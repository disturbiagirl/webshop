"use client";
import "@styles/globals.css";
import Navbar from "@components/Navbar";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="main"></div>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default layout;
