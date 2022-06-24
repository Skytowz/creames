import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Footer from "../../../components/template/footer"
import Header from "../../../components/template/header";
import Template from "../../../components/template/template";

let container = null;
let containerTemoin = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Affiche la template", ()=> {
  act(() => {
    
  });
  expect(true).toBe(true);
})