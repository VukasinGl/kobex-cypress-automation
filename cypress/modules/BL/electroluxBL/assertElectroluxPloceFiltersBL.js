import { assertElectroluxPloceFiltersPOM } from "../../POM/electroluxPOM/assertElectroluxPloceFiltersPOM";

class AssertElectroluxPloceFiltersBL {
  assertCrnaFilter() {
    assertElectroluxPloceFiltersPOM.crnaCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.crnaCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.crnaCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Crna"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.crnaCheckbox.should("not.be.checked");
  }
  assertBelaFilter() {
    assertElectroluxPloceFiltersPOM.belaCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.belaCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.belaCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Bela"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.belaCheckbox.should("not.be.checked");
  }

  assertInoxFilter() {
    assertElectroluxPloceFiltersPOM.inoxCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.inoxCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.inoxCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.inoxCheckbox.should("not.be.checked");
  }
  assertSenzorskoFilter() {
    assertElectroluxPloceFiltersPOM.senzorskoCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.senzorskoCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.senzorskoCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Senzorsko"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.senzorskoCheckbox.should("not.be.checked");
  }
  assertMehanickoFilter() {
    assertElectroluxPloceFiltersPOM.mehanickoCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.mehanickoCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.mehanickoCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Mehaničko"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.mehanickoCheckbox.should("not.be.checked");
  }
  assert60cmFilter() {
    assertElectroluxPloceFiltersPOM.sirina60cmCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.sirina60cmCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.sirina60cmCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "60cm"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.sirina60cmCheckbox.should("not.be.checked");
  }
  assert30cmFilter() {
    assertElectroluxPloceFiltersPOM.sirina30cmCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.sirina30cmCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.sirina30cmCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "30cm"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.sirina30cmCheckbox.should("not.be.checked");
  }
  assert80cmFilter() {
    assertElectroluxPloceFiltersPOM.sirina80cmCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.sirina80cmCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.sirina80cmCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "80cm"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.sirina80cmCheckbox.should("not.be.checked");
  }
  assert83cmFilter() {
    assertElectroluxPloceFiltersPOM.sirina83cmCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.sirina83cmCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.sirina83cmCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "83cm"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.sirina83cmCheckbox.should("not.be.checked");
  }
  assert75cmFilter() {
    assertElectroluxPloceFiltersPOM.sirina75cmCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.sirina75cmCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.sirina75cmCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "75cm"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.sirina75cmCheckbox.should("not.be.checked");
  }
  assert90cmFilter() {
    assertElectroluxPloceFiltersPOM.sirina90cmCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.sirina90cmCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.sirina90cmCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "90cm"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.sirina90cmCheckbox.should("not.be.checked");
  }
  assertStaklokeramikaFilter() {
    assertElectroluxPloceFiltersPOM.staklokeramikaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxPloceFiltersPOM.staklokeramikaCheckbox.check({
      force: true,
    });
    assertElectroluxPloceFiltersPOM.staklokeramikaCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Staklokeramika"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.staklokeramikaCheckbox.should(
      "not.be.checked"
    );
  }
  assertGasFilter() {
    assertElectroluxPloceFiltersPOM.gasCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.gasCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.gasCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Gas"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.gasCheckbox.should("not.be.checked");
  }
  assertKombinovanaFilter() {
    assertElectroluxPloceFiltersPOM.kombinovanaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxPloceFiltersPOM.kombinovanaCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.kombinovanaCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Kombinovana"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.kombinovanaCheckbox.should(
      "not.be.checked"
    );
  }
  assertIndukcijaFilter() {
    assertElectroluxPloceFiltersPOM.indukcijaCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.indukcijaCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.indukcijaCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Indukcija"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.indukcijaCheckbox.should("not.be.checked");
  }
  assertDaFilter() {
    assertElectroluxPloceFiltersPOM.daCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.daCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.daCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Da"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.daCheckbox.should("not.be.checked");
  }
  assertNeFilter() {
    assertElectroluxPloceFiltersPOM.neCheckbox.should("not.be.checked");
    assertElectroluxPloceFiltersPOM.neCheckbox.check({ force: true });
    assertElectroluxPloceFiltersPOM.neCheckbox.should("be.checked");
    assertElectroluxPloceFiltersPOM.productCharacteristics.should(
      "contain",
      "Ne"
    );
    assertElectroluxPloceFiltersPOM.ponistiBtn.click();
    assertElectroluxPloceFiltersPOM.neCheckbox.should("not.be.checked");
  }
}
export const assertElectroluxPloceFiltersBL =
  new AssertElectroluxPloceFiltersBL();
