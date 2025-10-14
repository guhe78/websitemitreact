import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: [process.env.FRONTEND_URL_LOCAL, process.env.FRONTEND_URL],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

const loadData = (filePath) => {
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

const dataFiles = {
  projects: "projects.json",
  about: "about.json",
};

app.get("/:type", async (req, res) => {
  const { type } = req.params;
  if (!dataFiles[type]) return res.status(404).send("Nicht gefunden");

  try {
    const filePath = path.join(__dirname, "data", dataFiles[type]);
    const data = await loadData(filePath);
    res.json(data);
  } catch (err) {
    console.error("Fehler beim Laden der Daten:", err);
    res.status(500).send("Fehler beim Lesen oder Parsen der Datei");
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
