/// <reference types="Cypress" />

import { assertTekaFrizideriFiltersPOM } from "../../modules/POM/tekaPOM/assertTekaFrizideriFiltersPOM";
import { productFilters } from "../../fixtures/testData";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}teka-/frizideri`);
  });

  it("Assert Teka - Frizideri page filters - Samostojeci filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.samostojeciCheckbox,
      productFilters.samostojeci
    );
  });

  it("Assert Teka - Frizideri page filters - Ugradni filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.ugradniCheckbox,
      productFilters.ugradni
    );
  });

  it("Assert Teka - Frizideri page filters - Samo frizider filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.samoFriziderCheckbox,
      productFilters.samoFrizider
    );
  });

  it("Assert Teka - Frizideri page filters - Kombinovani filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.kombinovaniCheckbox,
      productFilters.kombinovani
    );
  });

  it("Assert Teka - Frizideri page filters - Crna filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.crnaCheckbox,
      productFilters.crna
    );
  });

  it("Assert Teka - Frizideri page filters - Inox filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.inoxCheckbox,
      productFilters.inox
    );
  });

  it("Assert Teka - Frizideri page filters - Bela filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.belaCheckbox,
      productFilters.bela
    );
  });

  it("Assert Teka - Frizideri page filters - Low Frost filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.lowFrostCheckbox,
      productFilters.lowFrost
    );
  });

  it("Assert Teka - Frizideri page filters - No Frost filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.noFrostCheckbox,
      productFilters.noFrost
    );
  });

  it("Assert Teka - Frizideri page filters - Bez komore filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.bezKomoreCheckbox,
      productFilters.bezKomore
    );
  });

  it("Assert Teka - Frizideri page filters - Sa komorom filter", () => {
    cy.assertFilters(
      assertTekaFrizideriFiltersPOM.saKomoromCheckbox,
      productFilters.saKomorom
    );
  });
});
