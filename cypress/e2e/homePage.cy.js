/// <reference types="Cypress" />
import { genericBL } from "../modules/BL/genericBL";
import { homePageBL } from "../modules/BL/homePageBL";

describe("Testing Home Page UI", () => {
  before(() => {
    cy.visit("/");
  });
  it("Assert all the elements on the home page", () => {
    genericBL.assertGenericElemets();
    homePageBL.assertHomePageElements();
  });
});
