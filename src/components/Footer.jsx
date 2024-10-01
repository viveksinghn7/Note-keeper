import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {year} | Note Keeper</p>
      <p>Made with ❤️ by Viveksingh Negi using ReactJS</p>
    </footer>
  );
}

export default Footer;
