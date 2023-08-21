/// <reference types="Cypress" />
import "cypress-real-events/support";

import { headerAndFooterBL } from "../modules/BL/headerAndFooterBL";
import { homePageBL } from "../modules/BL/homePageBL";
import { blancoDropDownMenuPOM } from "../modules/POM/headerAndFooterPOM/blancoDropDownMenuPOM";
describe("Testing Home Page UI", () => {
  before(() => {
    cy.visit(`${Cypress.env("baseUrl")}`);
    headerAndFooterBL.assertHeaderAndFooterElemets();
    blancoDropDownMenuPOM.assertBlancoDropdownMenu();
  });
  it("Assert all the elements on the home page", () => {
    homePageBL.assertHomePageElements();
  });
});
