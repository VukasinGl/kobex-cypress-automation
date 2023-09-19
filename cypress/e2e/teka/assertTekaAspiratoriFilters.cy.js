/// <reference types="Cypress" />

import { assertTekaAspiratoriFiltersPOM } from "../../modules/POM/tekaPOM/assertTekaAspiratoriFiltersPOM";
import { productFilters } from "../../fixtures/testData";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}teka-/aspiratori`);
  });

  it("Assert Teka - Aspiratori page filters - Tasteri filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.tasteriCheckbox,
      productFilters.tasteri
    );
  });

  it("Assert Teka - Aspiratori page filters - Na dodir filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.naDodirCheckbox,
      productFilters.naDodir
    );
  });

  it("Assert Teka - Aspiratori page filters - Ugradni filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.ugradniCheckbox,
      productFilters.ugradni
    );
  });

  it("Assert Teka - Aspiratori page filters - Ostrvski filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.ostrvskiCheckbox,
      productFilters.ostrvski
    );
  });

  it("Assert Teka - Aspiratori page filters - Dekorativni filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.dekorativniCheckbox,
      productFilters.dekorativni
    );
  });

  it("Assert Teka - Aspiratori page filters - Teleskopski filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.teleskopskiCheckbox,
      productFilters.teleskopski
    );
  });

  it("Assert Teka - Aspiratori page filters - Element 60cm filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.element60cmCheckbox,
      productFilters.cm60
    );
  });

  it("Assert Teka - Aspiratori page filters - Element 40cm filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.element40cmCheckbox,
      productFilters.cm40
    );
  });

  it("Assert Teka - Aspiratori page filters - Element 110cm filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.element110cmCheckbox,
      productFilters.cm110
    );
  });

  it("Assert Teka - Aspiratori page filters - Element 90cm filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.element90cmCheckbox,
      productFilters.cm90
    );
  });

  it("Assert Teka - Aspiratori page filters - Element 80cm filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.element80cmCheckbox,
      productFilters.cm80
    );
  });

  it("Assert Teka - Aspiratori page filters - Inox filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.inoxCheckbox,
      productFilters.inox
    );
  });

  it("Assert Teka - Aspiratori page filters - Crna filter", () => {
    cy.assertFilters(
      assertTekaAspiratoriFiltersPOM.crnaCheckbox,
      productFilters.crna
    );
  });
});
