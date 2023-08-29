/// <reference types="Cypress" />

import { headerAndFooterBL } from "../../modules/BL/headerAndFooterBL";
import { blancoDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { electroluxDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { tekaDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { syskorDropDownMenuPOM } from "../../modules/POM/headerAndFooterPOM/syskorDropDownMenuPOM";
import { blancoMeljacBioOtpadaBL } from "../../modules/BL/blancoBL/blancoMeljacBioOtpadaPageBL";

describe("Testing blanco meljac bio otpada page UI", () => {
  before(() => {
    cy.visit(`${Cypress.env("baseUrl")}`);
  });

  it("Assert all the elements on the blanco meljac bio otpada page", () => {
    blancoMeljacBioOtpadaBL.assertBlancoMeljacBioOtpadaPage();
  });

  after(() => {
    headerAndFooterBL.assertHeaderAndFooterElemets();
    blancoDropDownMenuPOM.assertBlancoDropdownMenu();
    electroluxDropDownMenuPOM.assertElectroluxDropDownMenu();
    tekaDropDownMenuPOM.assertTekaDropDownMenu();
    syskorDropDownMenuPOM.assertSyskorDropDownMenu();
  });
});
