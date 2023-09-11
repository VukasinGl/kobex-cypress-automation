/// <reference types="Cypress" />

import { assertElectroluxAspiratoriFiltersBL } from "../../modules/BL/electroluxBL/assertElectroluxAspiratoriFiltersBL";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}electrolux/aspiratori`);
  });

  it("Assert Electrolux - Aspiratori page filters - Ostrvski filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertOstrvskiCheckbox();
  });

  it("Assert Electrolux - Aspiratori page filters - Teleskopski filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertTeleskopskiCheckbox();
  });

  it("Assert Electrolux - Aspiratori page filters - Ugradni filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertUgradniCheckbox();
  });

  it("Assert Electrolux - Aspiratori page filters - Dekorativni filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertDekorativniCheckbox();
  });

  it("Assert Electrolux - Aspiratori page filters - Da filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertDaCheckbox();
  });

  it("Assert Electrolux - Aspiratori page filters - Element 60cm filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertElement60cmCheckbox();
  });

  it("Assert Electrolux - Aspiratori page filters - Element 90cm filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertElement90cmCheckbox();
  });

  it("Assert Electrolux - Aspiratori page filters - Tasteri filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertTasteriCheckbox();
  });

  it("Assert Electrolux - Aspiratori page filters - Na dodir filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertNaDodirCheckbox();
  });

  it("Assert Electrolux - Aspiratori page filters - Jacina 700m3/h filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertJacina700m3h();
  });

  it("Assert Electrolux - Aspiratori page filters - Jacina 620m3/h filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertJacina620m3h();
  });

  it("Assert Electrolux - Aspiratori page filters - Jacina 615m3/h filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertJacina615m3h();
  });

  it("Assert Electrolux - Aspiratori page filters - Jacina 650m3/h filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertJacina650m3h();
  });

  it("Assert Electrolux - Aspiratori page filters - Jacina 420m3/h filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertJacina420m3h();
  });

  it("Assert Electrolux - Aspiratori page filters - Jacina 330m3/h filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertJacina330m3h();
  });

  it("Assert Electrolux - Aspiratori page filters - Jacina 410m3/h filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertJacina410m3h();
  });

  it("Assert Electrolux - Aspiratori page filters - Jacina 600m3/h filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertJacina600m3h();
  });

  it("Assert Electrolux - Aspiratori page filters - Jacina 580m3/h filter", () => {
    assertElectroluxAspiratoriFiltersBL.assertJacina580m3h();
  });
});
