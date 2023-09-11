import { assertElectroluxSudomasineFiltersPOM } from "../../POM/electroluxPOM/assertElectroluxSudomasineFiltersPOM";

class AssertElectroluxSudomasineFiltersBL {
  assert44DbFilter() {
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka44DbCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka44DbCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka44DbCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "44dB"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka44DbCheckbox.should(
      "not.be.checked"
    );
  }
  assert49DbFilter() {
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka49DbCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka49DbCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka49DbCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "49dB"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka49DbCheckbox.should(
      "not.be.checked"
    );
  }
  assert39DbFilter() {
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka39DbCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka39DbCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka39DbCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "39dB"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka39DbCheckbox.should(
      "not.be.checked"
    );
  }
  assert42DbFilter() {
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka42DbCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka42DbCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka42DbCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "42dB"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka42DbCheckbox.should(
      "not.be.checked"
    );
  }
  assert48DbFilter() {
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka48DbCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka48DbCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka48DbCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "48dB"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka48DbCheckbox.should(
      "not.be.checked"
    );
  }
  assert46DbFilter() {
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka46DbCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka46DbCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka46DbCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "46dB"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.jacinaZvuka46DbCheckbox.should(
      "not.be.checked"
    );
  }
  assertSvetlosniSnopFilter() {
    assertElectroluxSudomasineFiltersPOM.svetlosniSnopCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.svetlosniSnopCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.svetlosniSnopCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "Svetlosni snop"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.svetlosniSnopCheckbox.should(
      "not.be.checked"
    );
  }
  assertProjekcijaVremenaFilter() {
    assertElectroluxSudomasineFiltersPOM.projekcijaVremenaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.projekcijaVremenaCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.projekcijaVremenaCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "Projekcija vremena"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.projekcijaVremenaCheckbox.should(
      "not.be.checked"
    );
  }
  assert2KorpeFilter() {
    assertElectroluxSudomasineFiltersPOM.dveKorpeCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.dveKorpeCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.dveKorpeCheckbox.should("be.checked");
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "2 korpe"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.dveKorpeCheckbox.should(
      "not.be.checked"
    );
  }
  assert3KorpeFilter() {
    assertElectroluxSudomasineFiltersPOM.triKorpeCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.triKorpeCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.triKorpeCheckbox.should("be.checked");
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "3 korpe"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.triKorpeCheckbox.should(
      "not.be.checked"
    );
  }
  assertUgradnaFilter() {
    assertElectroluxSudomasineFiltersPOM.ugradnaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.ugradnaCheckbox.check({ force: true });
    assertElectroluxSudomasineFiltersPOM.ugradnaCheckbox.should("be.checked");
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "Ugradna"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.ugradnaCheckbox.should(
      "not.be.checked"
    );
  }
  assert14kompletaFilter() {
    assertElectroluxSudomasineFiltersPOM.kapacitet14kompletaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.kapacitet14kompletaCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.kapacitet14kompletaCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "14 kompleta"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.kapacitet14kompletaCheckbox.should(
      "not.be.checked"
    );
  }
  assert16kompletaFilter() {
    assertElectroluxSudomasineFiltersPOM.kapacitet16kompletaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.kapacitet16kompletaCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.kapacitet16kompletaCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "16 kompleta"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.kapacitet16kompletaCheckbox.should(
      "not.be.checked"
    );
  }
  assert17kompletaFilter() {
    assertElectroluxSudomasineFiltersPOM.kapacitet17kompletaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.kapacitet17kompletaCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.kapacitet17kompletaCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "17 kompleta"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.kapacitet17kompletaCheckbox.should(
      "not.be.checked"
    );
  }
  assert13kompletaFilter() {
    assertElectroluxSudomasineFiltersPOM.kapacitet13kompletaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.kapacitet13kompletaCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.kapacitet13kompletaCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "13 kompleta"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.kapacitet13kompletaCheckbox.should(
      "not.be.checked"
    );
  }
  assert9kompletaFilter() {
    assertElectroluxSudomasineFiltersPOM.kapacitet9kompletaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.kapacitet9kompletaCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.kapacitet9kompletaCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "9 kompleta"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.kapacitet9kompletaCheckbox.should(
      "not.be.checked"
    );
  }
  assert10kompletaFilter() {
    assertElectroluxSudomasineFiltersPOM.kapacitet10kompletaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.kapacitet10kompletaCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.kapacitet10kompletaCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "10 kompleta"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.kapacitet10kompletaCheckbox.should(
      "not.be.checked"
    );
  }
  assert15kompletaFilter() {
    assertElectroluxSudomasineFiltersPOM.kapacitet15kompletaCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.kapacitet15kompletaCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.kapacitet15kompletaCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "15 kompleta"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.kapacitet15kompletaCheckbox.should(
      "not.be.checked"
    );
  }
  assert45cmFilter() {
    assertElectroluxSudomasineFiltersPOM.sirina45cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.sirina45cmCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.sirina45cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "45cm"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.sirina45cmCheckbox.should(
      "not.be.checked"
    );
  }
  assert60cmFilter() {
    assertElectroluxSudomasineFiltersPOM.sirina60cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.sirina60cmCheckbox.check({
      force: true,
    });
    assertElectroluxSudomasineFiltersPOM.sirina60cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxSudomasineFiltersPOM.productCharacteristics.should(
      "contain",
      "60cm"
    );
    assertElectroluxSudomasineFiltersPOM.ponistiBtn.click();
    assertElectroluxSudomasineFiltersPOM.sirina60cmCheckbox.should(
      "not.be.checked"
    );
  }
}
export const assertElectroluxSudomasineFiltersBL =
  new AssertElectroluxSudomasineFiltersBL();
