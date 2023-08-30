/// <reference types="Cypress" />

import { headerAndFooterBL } from "../../modules/BL/headerAndFooterBL";
import { blancoDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { electroluxDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { tekaDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { syskorDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/syskorDropDownMenuPOM";
import { electroluxPlocePageBL } from "../../modules/BL/electroluxBL/electroluxPlocePageBL";

describe("Testing electrolux ploce page UI", () => {
  before(() => {
    cy.visit(`${Cypress.env("baseUrl")}`);
  });

  it("Assert all the elements on the electrolux ploce page", () => {
    electroluxPlocePageBL.assertElectroluxPlocePage();
  });

  after(() => {
    headerAndFooterBL.assertHeaderAndFooterElemets();
    blancoDropDownMenuPOM.assertBlancoDropdownMenu();
    electroluxDropDownMenuPOM.assertElectroluxDropDownMenu();
    tekaDropDownMenuPOM.assertTekaDropDownMenu();
    syskorDropDownMenuPOM.assertSyskorDropDownMenu();
  });
});
