/// <reference types="Cypress" />

import { productFilters } from "../../fixtures/testData";
import { electroluxMikrotalasnaFiltersPOM } from "../../modules/POM/electroluxPOM/assertElectroluxMikrotalasnaFiltersPOM";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}electrolux/mikrotalasna`);
  });
  it("Assert Electrolux - Mikrotalasna page filters - Ugradna filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.ugradnaCheckbox,
      productFilters.ugradna
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - 900W filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.jacina900wCheckbox,
      productFilters.jacina900W
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - 800W filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.jacina800wCheckbox,
      productFilters.jacina800W
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - 700W filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.jacina700wCheckbox,
      productFilters.jacina700W
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - 20l filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.zapremina20lCheckbox,
      productFilters.l20
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - 25l filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.zapremina25lCheckbox,
      productFilters.l25
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - 17l filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.zapremina17lCheckbox,
      productFilters.l17
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - Mehanicko filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.mehanickoCheckbox,
      productFilters.mehanicko
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - Na dodir filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.naDodirCheckbox,
      productFilters.naDodir
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - Ne filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.neCheckbox,
      productFilters.ne
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - 20l filter", () => {
    cy.assertFilters(
      electroluxMikrotalasnaFiltersPOM.daCheckbox,
      productFilters.da
    );
  });
});
