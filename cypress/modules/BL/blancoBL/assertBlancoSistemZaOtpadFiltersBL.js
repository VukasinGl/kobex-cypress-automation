import { assertBlancoSistemZaOtpadFiltersPOM } from "../../POM/blancoPOM/assertBlancoSistemZaOtpadFiltersPOM";

class AssertBlancoSistemZaOtpadFiltersBL {
  assertZaFrontSaFiokomFilter() {
    assertBlancoSistemZaOtpadFiltersPOM.zaFrontSaFiokomCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.zaFrontSaFiokomCheckbox.check({
      force: true,
    });
    assertBlancoSistemZaOtpadFiltersPOM.zaFrontSaFiokomCheckbox.should(
      "be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.productCharacteristics.should(
      "contain",
      "Za front sa fiokom"
    );
    assertBlancoSistemZaOtpadFiltersPOM.ponistiBtn.click();
    assertBlancoSistemZaOtpadFiltersPOM.zaFrontSaFiokomCheckbox.should(
      "not.be.checked"
    );
  }
  assertZaFrontBezFiokeFilter() {
    assertBlancoSistemZaOtpadFiltersPOM.zaFrontBezFiokeCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.zaFrontBezFiokeCheckbox.check({
      force: true,
    });
    assertBlancoSistemZaOtpadFiltersPOM.zaFrontBezFiokeCheckbox.should(
      "be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.productCharacteristics.should(
      "contain",
      "Za front bez fioke"
    );
    assertBlancoSistemZaOtpadFiltersPOM.ponistiBtn.click();
    assertBlancoSistemZaOtpadFiltersPOM.zaFrontBezFiokeCheckbox.should(
      "not.be.checked"
    );
  }
  assertZaVrataFilter() {
    assertBlancoSistemZaOtpadFiltersPOM.zaVrataCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.zaVrataCheckbox.check({
      force: true,
    });
    assertBlancoSistemZaOtpadFiltersPOM.zaVrataCheckbox.should("be.checked");
    assertBlancoSistemZaOtpadFiltersPOM.productCharacteristics.should(
      "contain",
      "Za vrata"
    );
    assertBlancoSistemZaOtpadFiltersPOM.ponistiBtn.click();
    assertBlancoSistemZaOtpadFiltersPOM.zaVrataCheckbox.should(
      "not.be.checked"
    );
  }
  assertElement30cmFilter() {
    assertBlancoSistemZaOtpadFiltersPOM.cm30ElementCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.cm30ElementCheckbox.check({
      force: true,
    });
    assertBlancoSistemZaOtpadFiltersPOM.cm30ElementCheckbox.should(
      "be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.productCharacteristics.should(
      "contain",
      "30cm"
    );
    assertBlancoSistemZaOtpadFiltersPOM.ponistiBtn.click();
    assertBlancoSistemZaOtpadFiltersPOM.cm30ElementCheckbox.should(
      "not.be.checked"
    );
  }
  assertElement40cmFilter() {
    assertBlancoSistemZaOtpadFiltersPOM.cm40ElementCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.cm40ElementCheckbox.check({
      force: true,
    });
    assertBlancoSistemZaOtpadFiltersPOM.cm40ElementCheckbox.should(
      "be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.productCharacteristics.should(
      "contain",
      "40cm"
    );
    assertBlancoSistemZaOtpadFiltersPOM.ponistiBtn.click();
    assertBlancoSistemZaOtpadFiltersPOM.cm40ElementCheckbox.should(
      "not.be.checked"
    );
  }
  assertElement45cmFilter() {
    assertBlancoSistemZaOtpadFiltersPOM.cm45ElementCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.cm45ElementCheckbox.check({
      force: true,
    });
    assertBlancoSistemZaOtpadFiltersPOM.cm45ElementCheckbox.should(
      "be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.productCharacteristics.should(
      "contain",
      "45cm"
    );
    assertBlancoSistemZaOtpadFiltersPOM.ponistiBtn.click();
    assertBlancoSistemZaOtpadFiltersPOM.cm45ElementCheckbox.should(
      "not.be.checked"
    );
  }
  assertElement50cmFilter() {
    assertBlancoSistemZaOtpadFiltersPOM.cm50ElementCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.cm50ElementCheckbox.check({
      force: true,
    });
    assertBlancoSistemZaOtpadFiltersPOM.cm50ElementCheckbox.should(
      "be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.productCharacteristics.should(
      "contain",
      "50cm"
    );
    assertBlancoSistemZaOtpadFiltersPOM.ponistiBtn.click();
    assertBlancoSistemZaOtpadFiltersPOM.cm50ElementCheckbox.should(
      "not.be.checked"
    );
  }
  assertElement60cmFilter() {
    assertBlancoSistemZaOtpadFiltersPOM.cm60ElementCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.cm60ElementCheckbox.check({
      force: true,
    });
    assertBlancoSistemZaOtpadFiltersPOM.cm60ElementCheckbox.should(
      "be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.productCharacteristics.should(
      "contain",
      "60cm"
    );
    assertBlancoSistemZaOtpadFiltersPOM.ponistiBtn.click();
    assertBlancoSistemZaOtpadFiltersPOM.cm60ElementCheckbox.should(
      "not.be.checked"
    );
  }
  assertElement80cmFilter() {
    assertBlancoSistemZaOtpadFiltersPOM.cm80ElementCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.cm80ElementCheckbox.check({
      force: true,
    });
    assertBlancoSistemZaOtpadFiltersPOM.cm80ElementCheckbox.should(
      "be.checked"
    );
    assertBlancoSistemZaOtpadFiltersPOM.productCharacteristics.should(
      "contain",
      "80cm"
    );
    assertBlancoSistemZaOtpadFiltersPOM.ponistiBtn.click();
    assertBlancoSistemZaOtpadFiltersPOM.cm80ElementCheckbox.should(
      "not.be.checked"
    );
  }
}
export const assertBlancoSistemZaOtpadFiltersBL =
  new AssertBlancoSistemZaOtpadFiltersBL();
