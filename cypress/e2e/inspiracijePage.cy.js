/// <reference types="Cypress" />

import { headerAndFooterBL } from "../modules/BL/headerAndFooterBL";
import { blancoDropDownMenuPOM } from "../modules/POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { electroluxDropDownMenuPOM } from "../modules/POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { tekaDropDownMenuPOM } from "../modules/POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { syskorDropDownMenuPOM } from "../modules/POM/headerAndFooterPOM/syskorDropDownMenuPOM";
import { inspiracijePageBL } from "../modules/BL/inspiracijePageBL";

describe("Testing inspiracije page UI", () => {
  before(() => {
    cy.visit(`${Cypress.env("baseUrl")}`);
  });

  it("Assert all the elements on the inspiracije page", () => {
    inspiracijePageBL.assertInspiracijePage();
  });

  after(() => {
    headerAndFooterBL.assertHeaderAndFooterElemets();
    blancoDropDownMenuPOM.assertBlancoDropdownMenu();
    electroluxDropDownMenuPOM.assertElectroluxDropDownMenu();
    tekaDropDownMenuPOM.assertTekaDropDownMenu();
    syskorDropDownMenuPOM.assertSyskorDropDownMenu();
  });
});
