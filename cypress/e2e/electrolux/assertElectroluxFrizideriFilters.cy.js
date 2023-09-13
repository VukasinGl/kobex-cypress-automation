/// <reference types="Cypress" />

import { assertElectroluxFrizideriFiltersBL } from "../../modules/BL/electroluxBL/assertElectroluxFrizideriFilteraBL";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}electrolux/frizideri`);
  });

  it("Assert Electrolux - Frizideri page filters - Bez komore filter", () => {
    assertElectroluxFrizideriFiltersBL.assertBezKomoreFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Sa komorom filter", () => {
    assertElectroluxFrizideriFiltersBL.assertSaKomoromFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Visina 186cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertVisina186cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Visina 82cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertVisina82cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Visina 88cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertVisina88cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Visina 122cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertVisina122cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Visina 178cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertVisina178cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Visina 144cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertVisina144cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Visina 189cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertVisina189cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Visina 201cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertVisina201cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Visina 192cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertVisina192cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 387l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina387lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 461l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina461lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 127l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina127lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 371l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina371lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 109l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina109lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 142l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina142lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 122l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina122lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 207l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina207lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 310l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina109lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 217l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina217lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 267l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina267lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 133l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina133lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 187l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina187lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 253l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina253lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 273l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina273lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 324l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina324lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 331l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina331lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ukupna zapremina 367l filter", () => {
    assertElectroluxFrizideriFiltersBL.assertZapremina367lFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Samo frizider filter", () => {
    assertElectroluxFrizideriFiltersBL.assertSamoFriziderFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Kombinovani filter", () => {
    assertElectroluxFrizideriFiltersBL.assertKombinovaniFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Samostojeci filter", () => {
    assertElectroluxFrizideriFiltersBL.assertSamostojeciFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Ugradni filter", () => {
    assertElectroluxFrizideriFiltersBL.assertUgradniFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Crna filter", () => {
    assertElectroluxFrizideriFiltersBL.assertCrnaFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Inox filter", () => {
    assertElectroluxFrizideriFiltersBL.assertInoxFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Bela filter", () => {
    assertElectroluxFrizideriFiltersBL.assertBelaFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Siva filter", () => {
    assertElectroluxFrizideriFiltersBL.assertSivaFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Low Frost filter", () => {
    assertElectroluxFrizideriFiltersBL.assertLowFrostFilter();
  });

  it("Assert Electrolux - Frizideri page filters - No Frost filter", () => {
    assertElectroluxFrizideriFiltersBL.assertNoFrostFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Sirina 60cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertSirina60cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Sirina 56cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertSirina56cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Sirina 54cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertSirina54cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Sirina 55cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertSirina55cmFilter();
  });

  it("Assert Electrolux - Frizideri page filters - Sirina 70cm filter", () => {
    assertElectroluxFrizideriFiltersBL.assertSirina70cmFilter();
  });
});
