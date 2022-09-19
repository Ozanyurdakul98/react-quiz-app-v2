import React from "react";
import SvgComponent from "../Assets/Logo.js";
import "./Header.css";
export default function Header() {
  return (
    <section className="Header">
      <SvgComponent className="Header-logo"></SvgComponent>
      <h1 className="Header-heading1">{"Now with React"}</h1>
    </section>
  );
}
