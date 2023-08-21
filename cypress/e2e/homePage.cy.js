/// <reference types="Cypress" />

import { headerAndFooterBL } from "../modules/BL/headerAndFooterBL";
import { homePageBL } from "../modules/BL/homePageBL";
import { blancoDropDownMenuPOM } from "../modules/POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { electroluxDropDownMenu } from "../modules/POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
describe("Testing Home Page UI", () => {
  before(() => {
    cy.visit(`${Cypress.env("baseUrl")}`);
    headerAndFooterBL.assertHeaderAndFooterElemets();
    blancoDropDownMenuPOM.assertBlancoDropdownMenu();
    electroluxDropDownMenu.assertElectroluxDropDownMenu();
  });
  it("Assert all the elements on the home page", () => {
    homePageBL.assertHomePageElements();
  });
});
