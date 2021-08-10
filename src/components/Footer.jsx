import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright <span className="fa fa-copyright" /> {year}
      </p>
    </footer>
  );
}

export default Footer;
