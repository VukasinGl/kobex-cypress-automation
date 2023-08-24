/// <reference types="Cypress" />
import { headerAndFooterBL } from "../modules/BL/headerAndFooterBL";
import { homePageBL } from "../modules/BL/homePageBL";
import { blancoDropDownMenuPOM } from "../modules/POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { electroluxDropDownMenuPOM } from "../modules/POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { tekaDropDownMenuPOM } from "../modules/POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { syskorDropDownMenuPOM } from "../modules/POM/headerAndFooterPOM/syskorDropDownMenuPOM";
describe("Testing Home Page UI", () => {
  before(() => {
    cy.visit(`${Cypress.env("baseUrl")}`);
    headerAndFooterBL.assertHeaderAndFooterElemets();
    blancoDropDownMenuPOM.assertBlancoDropdownMenu();
    electroluxDropDownMenuPOM.assertElectroluxDropDownMenu();
    tekaDropDownMenuPOM.assertTekaDropDownMenu();
    syskorDropDownMenuPOM.assertSyskorDropDownMenu();
  });
  it("Assert all the elements on the home page", () => {
    homePageBL.assertHomePageElements();
  });
});
