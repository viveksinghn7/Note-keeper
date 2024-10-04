import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {year} | Note Keeper</p>
      <p>Made with <span style={{ color: "#e74c3c" }}>❤</span> by Viveksingh Negi using ReactJS</p>
    </footer>
  );
}

export default Footer;
