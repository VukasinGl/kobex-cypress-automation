/// <reference types="Cypress" />

import { headerAndFooterBL } from "../../modules/BL/headerAndFooterBL";
import { blancoDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { electroluxDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { tekaDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { syskorDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/syskorDropDownMenuPOM";
import { blancoSlavinaPageBL } from "../../modules/BL/blancoBL/blancoSlavinaPageBL";

describe("Testing blanco slavina page UI", () => {
  before(() => {
    cy.visit(`${Cypress.env("baseUrl")}`);
  });

  it("Assert all the elements on the blanco slavina page", () => {
    blancoSlavinaPageBL.assertBlancoSlavinaPage();
  });

  after(() => {
    headerAndFooterBL.assertHeaderAndFooterElemets();
    blancoDropDownMenuPOM.assertBlancoDropdownMenu();
    electroluxDropDownMenuPOM.assertElectroluxDropDownMenu();
    tekaDropDownMenuPOM.assertTekaDropDownMenu();
    syskorDropDownMenuPOM.assertSyskorDropDownMenu();
  });
});
