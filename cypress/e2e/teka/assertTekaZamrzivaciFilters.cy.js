/// <reference types="Cypress" />

import { assertTekaZamrzivaciFiltersPOM } from "../../modules/POM/tekaPOM/assertTekaZamrzivaciFiltersPOM";
import { productFilters } from "../../fixtures/testData";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}teka-/zamrzivaci`);
  });

  it("Assert Teka - Zamrzivaci page filters - Visina 82cm filter", () => {
    cy.assertFilters(
      assertTekaZamrzivaciFiltersPOM.visina82cmCheckbox,
      productFilters.cm82
    );
  });

  it("Assert Teka - Zamrzivaci page filters - Sirina 60cm filter", () => {
    cy.assertFilters(
      assertTekaZamrzivaciFiltersPOM.sirina60cmCheckbox,
      productFilters.cm60
    );
  });

  it("Assert Teka - Zamrzivaci page filters - nacin ugradnje - Ugradni filter", () => {
    cy.assertFilters(
      assertTekaZamrzivaciFiltersPOM.ugradniCheckbox,
      productFilters.ugradni
    );
  });

  it("Assert Teka - Zamrzivaci page filters - Bela filter", () => {
    cy.assertFilters(
      assertTekaZamrzivaciFiltersPOM.belaCheckbox,
      productFilters.bela
    );
  });

  it("Assert Teka - Zamrzivaci page filters - No frost -Ne filter", () => {
    cy.assertFilters(
      assertTekaZamrzivaciFiltersPOM.noFrostNeCheckbox,
      productFilters.ne
    );
  });
});
