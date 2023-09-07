/// <reference types="Cypress" />

import { assertBlancoSistemZaOtpadFiltersBL } from "../../modules/BL/blancoBL/assertBlancoSistemZaOtpadFiltersBL";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}blanco/sistem-za-razdvajanje-otpada`);
  });

  it("Assert Blanco- Sistem za razdvajanje otpada page filters - Za front sa fiokom filter", () => {
    assertBlancoSistemZaOtpadFiltersBL.assertZaFrontSaFiokomFilter();
  });

  it("Assert Blanco- Sistem za razdvajanje otpada page filters - Za front bez fioke filter", () => {
    assertBlancoSistemZaOtpadFiltersBL.assertZaFrontBezFiokeFilter();
  });

  it("Assert Blanco- Sistem za razdvajanje otpada page filters - Za vrata filter", () => {
    assertBlancoSistemZaOtpadFiltersBL.assertZaVrataFilter();
  });

  it("Assert Blanco - Sistem za razdvajanje otpada filters - Element - 30cm filter", () => {
    assertBlancoSistemZaOtpadFiltersBL.assertElement30cmFilter();
  });

  it("Assert Blanco - Sistem za razdvajanje otpada filters - Element - 40cm filter", () => {
    assertBlancoSistemZaOtpadFiltersBL.assertElement40cmFilter();
  });

  it("Assert Blanco - Sistem za razdvajanje otpada filters - Element - 45cm filter", () => {
    assertBlancoSistemZaOtpadFiltersBL.assertElement45cmFilter();
  });

  it("Assert Blanco - Sistem za razdvajanje otpada filters - Element - 50cm filter", () => {
    assertBlancoSistemZaOtpadFiltersBL.assertElement50cmFilter();
  });

  it("Assert Blanco - Sistem za razdvajanje otpada filters - Element - 60cm filter", () => {
    assertBlancoSistemZaOtpadFiltersBL.assertElement60cmFilter();
  });

  it("Assert Blanco - Sistem za razdvajanje otpada filters - Element - 80cm filter", () => {
    assertBlancoSistemZaOtpadFiltersBL.assertElement80cmFilter();
  });
});
