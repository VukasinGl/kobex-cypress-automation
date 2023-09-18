/// <reference types="Cypress" />

import { productFilters } from "../../fixtures/testData";
import { assertTekaMikrotalasnaFiltersPOM } from "../../modules/POM/tekaPOM/assertTekaMikrotalasnaFiltersPOM";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}teka-/mikrotalasna`);
  });

  it("Assert Teka - Mikrotalasna page filters - 20l filter", () => {
    cy.assertFilters(
      assertTekaMikrotalasnaFiltersPOM.zapremina20lCheckbox,
      productFilters.l20
    );
  });

  it("Assert Teka - Mikrotalasna page filters - Mehanicko filter", () => {
    cy.assertFilters(
      assertTekaMikrotalasnaFiltersPOM.mehanickoCheckbox,
      productFilters.mehanicko
    );
  });

  it("Assert Teka - Mikrotalasna page filters - Ugradna filter", () => {
    cy.assertFilters(
      assertTekaMikrotalasnaFiltersPOM.ugradnaCheckbox,
      productFilters.ugradna
    );
  });

  it("Assert Teka - Mikrotalasna page filters - Da filter", () => {
    cy.assertFilters(
      assertTekaMikrotalasnaFiltersPOM.daCheckbox,
      productFilters.da
    );
  });

  it("Assert Electrolux - Mikrotalasna page filters - 1200W filter", () => {
    cy.assertFilters(
      assertTekaMikrotalasnaFiltersPOM.jacina1200wCheckbox,
      productFilters.jacina1200W
    );
  });
});
