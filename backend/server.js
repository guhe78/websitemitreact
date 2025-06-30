import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import path from "path"; // Importiere das path-Modul
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

const loadProjects = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          resolve(JSON.parse(data));
        } catch (parseErr) {
          reject(parseErr);
        }
      }
    });
  });
};

app.get("/projects", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "./public/projects.json");
    const data = await loadProjects(filePath);
    res.json(data);
  } catch (err) {
    console.error("Fehler beim Laden der Projektdaten:", err);
    res.status(500).send("Fehler beim Lesen oder Parsen der Datei");
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
