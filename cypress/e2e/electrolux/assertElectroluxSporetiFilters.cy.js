/// <reference types="Cypress" />

import { assertElectroluxSporetiFiltersPOM } from "../../modules/POM/electroluxPOM/assertElectroluxSporetiFiltersPOM";
import { productFilters } from "../../fixtures/testData";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}electrolux/sporeti`);
  });

  it("Assert Electrolux - Ves masine page filters - vrsta ploce - Staklokeramika filter", () => {
    cy.assertFilters(
      assertElectroluxSporetiFiltersPOM.staklokeramikaCheckbox,
      productFilters.staklokeramika
    );
  });

  it("Assert Electrolux - Ves masine page filters - nacin ciscenja - Aqua clean filter", () => {
    cy.assertFilters(
      assertElectroluxSporetiFiltersPOM.aquaCleanCheckbox,
      productFilters.aquaClean
    );
  });

  it("Assert Electrolux - Ves masine page filters - boja uredjaja - Bela filter", () => {
    cy.assertFilters(
      assertElectroluxSporetiFiltersPOM.belaCheckbox,
      productFilters.bela
    );
  });

  it("Assert Electrolux - Ves masine page filters - boja uredjaja - Inox filter", () => {
    cy.assertFilters(
      assertElectroluxSporetiFiltersPOM.inoxCheckbox,
      productFilters.inox
    );
  });

  it("Assert Electrolux - Ves masine page filters - sirina uredjaja - 60cm filter", () => {
    cy.assertFilters(
      assertElectroluxSporetiFiltersPOM.sirina60cmCheckbox,
      productFilters.cm60
    );
  });

  it("Assert Electrolux - Ves masine page filters - sirina uredjaja - 50cm filter", () => {
    cy.assertFilters(
      assertElectroluxSporetiFiltersPOM.sirina50cmCheckbox,
      productFilters.cm50
    );
  });
});
