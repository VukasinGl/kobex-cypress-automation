/// <reference types="Cypress" />
import { headerAndFooterBL } from "../modules/BL/headerAndFooterBL";
import { homePageBL } from "../modules/BL/homePageBL";
import { blancoDropDownMenu } from "../modules/POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { electroluxDropDownMenu } from "../modules/POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { tekaDropDownMenu } from "../modules/POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { syskorDropDownMenu } from "../modules/POM/headerAndFooterPOM/syskorDropDownMenuPOM";
describe("Testing Home Page UI", () => {
  before(() => {
    cy.visit(`${Cypress.env("baseUrl")}`);
    headerAndFooterBL.assertHeaderAndFooterElemets();
    blancoDropDownMenu.assertBlancoDropdownMenu();
    electroluxDropDownMenu.assertElectroluxDropDownMenu();
    tekaDropDownMenu.assertTekaDropDownMenu();
    syskorDropDownMenu.assertSyskorDropDownMenu();
  });
  it("Assert all the elements on the home page", () => {
    homePageBL.assertHomePageElements();
  });
});
