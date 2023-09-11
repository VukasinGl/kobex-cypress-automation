import { assertElectroluxRerneFiltersPOM } from "../../POM/electroluxPOM/assertElectroluxRerneFiltersPOM";

class AssertElectroluxRerneFiltersBL {
  assertMultifunkcionalnaFilter() {
    assertElectroluxRerneFiltersPOM.multifunkcionalnaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxRerneFiltersPOM.multifunkcionalnaCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.multifunkcionalnaCheckbox.should(
      "be.checked"
    );
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Multifunkcionalna"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.multifunkcionalnaCheckbox.should(
      "not.be.checked"
    );
  }
  assertParnaFilter() {
    assertElectroluxRerneFiltersPOM.parnaCheckbox.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.parnaCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.parnaCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Parna"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.parnaCheckbox.should("not.be.checked");
  }
  assertVentilatorskaFilter() {
    assertElectroluxRerneFiltersPOM.ventilatorskaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxRerneFiltersPOM.ventilatorskaCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.ventilatorskaCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Ventilatorska"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.ventilatorskaCheckbox.should(
      "not.be.checked"
    );
  }
  assertGrejnaFiokaFilter() {
    assertElectroluxRerneFiltersPOM.grejnaFiokaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxRerneFiltersPOM.grejnaFiokaCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.grejnaFiokaCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Grejna fioka"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.grejnaFiokaCheckbox.should(
      "not.be.checked"
    );
  }
  assertUgradnaFilter() {
    assertElectroluxRerneFiltersPOM.ugradnaCheckbox.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.ugradnaCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.ugradnaCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Ugradna"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.ugradnaCheckbox.should("not.be.checked");
  }
  assertAquaCleanFilter() {
    assertElectroluxRerneFiltersPOM.aquaCleanCheckbox.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.aquaCleanCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.aquaCleanCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Aqua clean"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.aquaCleanCheckbox.should("not.be.checked");
  }
  assertPirolitickoFilter() {
    assertElectroluxRerneFiltersPOM.pirolitickoCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxRerneFiltersPOM.pirolitickoCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.pirolitickoCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Pirolitičko"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.pirolitickoCheckbox.should(
      "not.be.checked"
    );
  }
  assertKatalitickoFilter() {
    assertElectroluxRerneFiltersPOM.katalitickoCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxRerneFiltersPOM.katalitickoCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.katalitickoCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Katalitičko"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.katalitickoCheckbox.should(
      "not.be.checked"
    );
  }
  assertCrnaFilter() {
    assertElectroluxRerneFiltersPOM.crnaCheckbox.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.crnaCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.crnaCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Crna"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.crnaCheckbox.should("not.be.checked");
  }
  assertInoxFilter() {
    assertElectroluxRerneFiltersPOM.inoxCheckbox.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.inoxCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.inoxCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.inoxCheckbox.should("not.be.checked");
  }
  assertCrnaSaInoxDetaljimaFilter() {
    assertElectroluxRerneFiltersPOM.crnaSaInoxDetaljimaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxRerneFiltersPOM.crnaSaInoxDetaljimaCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.crnaSaInoxDetaljimaCheckbox.should(
      "be.checked"
    );
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Crna sa inox detaljima"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.crnaSaInoxDetaljimaCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina57LFilter() {
    assertElectroluxRerneFiltersPOM.zapremina57L.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.zapremina57L.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.zapremina57L.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "57l"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.zapremina57L.should("not.be.checked");
  }
  assertZapremina42LFilter() {
    assertElectroluxRerneFiltersPOM.zapremina42L.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.zapremina42L.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.zapremina42L.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "42l"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.zapremina42L.should("not.be.checked");
  }
  assertZapremina71LFilter() {
    assertElectroluxRerneFiltersPOM.zapremina71L.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.zapremina71L.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.zapremina71L.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "71l"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.zapremina71L.should("not.be.checked");
  }
  assertZapremina65LFilter() {
    assertElectroluxRerneFiltersPOM.zapremina65L.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.zapremina65L.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.zapremina65L.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "65l"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.zapremina65L.should("not.be.checked");
  }
  assertNaDodirFilter() {
    assertElectroluxRerneFiltersPOM.naDodirCheckbox.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.naDodirCheckbox.check({ force: true });
    assertElectroluxRerneFiltersPOM.naDodirCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Na dodir"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.naDodirCheckbox.should("not.be.checked");
  }
  assertPotapajuciDugmiciFilter() {
    assertElectroluxRerneFiltersPOM.potapajuciDugmiciCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxRerneFiltersPOM.potapajuciDugmiciCheckbox.check({
      force: true,
    });
    assertElectroluxRerneFiltersPOM.potapajuciDugmiciCheckbox.should(
      "be.checked"
    );
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Potapajući dugmići"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.potapajuciDugmiciCheckbox.should(
      "not.be.checked"
    );
  }
  assertMehanickoFilter() {
    assertElectroluxRerneFiltersPOM.mehanickoCheckbox.should("not.be.checked");
    assertElectroluxRerneFiltersPOM.mehanickoCheckbox.check({ force: true });
    assertElectroluxRerneFiltersPOM.mehanickoCheckbox.should("be.checked");
    assertElectroluxRerneFiltersPOM.productCharacteristics.should(
      "contain",
      "Mehaničko"
    );
    assertElectroluxRerneFiltersPOM.ponistiBtn.click();
    assertElectroluxRerneFiltersPOM.mehanickoCheckbox.should("not.be.checked");
  }
}
export const assertElectroluxRerneFiltersBL =
  new AssertElectroluxRerneFiltersBL();
