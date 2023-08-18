/// <reference types="Cypress" />
import { headerAndFooterBL } from "../modules/BL/headerAndFooterBL";
import { homePageBL } from "../modules/BL/homePageBL";

describe("Testing Home Page UI", () => {
  before(() => {
    cy.visit("/");
  });
  it("Assert all the elements on the home page", () => {
    headerAndFooterBL.assertGenericElemets();
    homePageBL.assertHomePageElements();
  });
});
