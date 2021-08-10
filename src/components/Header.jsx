import React, { useState } from "react";
import LibraryBooksTwoToneIcon from "@material-ui/icons/LibraryBooksTwoTone";
import InvertColorsIcon from "@material-ui/icons/InvertColors";

function Header() {
  const [darkMode, darkModeState] = useState(true);

  function Dark() {
    darkModeState(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#393E46" : "#eeeeee";
  }

  return (
    <header>
      <h1>
        <LibraryBooksTwoToneIcon />
        &nbsp;Notes
      </h1>
      <button onClick={Dark} className="theme">
        <InvertColorsIcon fontSize="small" />
        &nbsp;Change Theme
      </button>
    </header>
  );
}

export default Header;
