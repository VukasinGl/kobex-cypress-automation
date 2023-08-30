/// <reference types="Cypress" />

import { headerAndFooterBL } from "../../modules/BL/headerAndFooterBL";
import { blancoDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { electroluxDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { tekaDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { syskorDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/syskorDropDownMenuPOM";
import { electroluxMikrotalasnaPageBL } from "../../modules/BL/electroluxBL/electroluxMikrotalasnaPageBL";

describe("Testing electrolux mikrotalasna page UI", () => {
  before(() => {
    cy.visit(`${Cypress.env("baseUrl")}`);
  });

  it("Assert all the elements on the electrolux mikrotalasna page", () => {
    electroluxMikrotalasnaPageBL.assertElectroluxZamrzivaciPage();
  });

  after(() => {
    headerAndFooterBL.assertHeaderAndFooterElemets();
    blancoDropDownMenuPOM.assertBlancoDropdownMenu();
    electroluxDropDownMenuPOM.assertElectroluxDropDownMenu();
    tekaDropDownMenuPOM.assertTekaDropDownMenu();
    syskorDropDownMenuPOM.assertSyskorDropDownMenu();
  });
});
