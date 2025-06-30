import React from "react";

function Footer() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <p>Copyright {new Date().getFullYear()}</p>
        </div>
        <div className="col">Kontakt</div>
      </div>
    </div>
  );
}

export default Footer;
