import { assertElectroluxFrizideriFiltersPOM } from "../../POM/electroluxPOM/assertElectroluxFrizideriFilteraPOM";

class AssertElectroluxFrizideriFiltersBL {
  assertBezKomoreFilter() {
    assertElectroluxFrizideriFiltersPOM.bezKomoreCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.bezKomoreCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.bezKomoreCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Bez komore"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.bezKomoreCheckbox.should(
      "not.be.checked"
    );
  }
  assertSaKomoromFilter() {
    assertElectroluxFrizideriFiltersPOM.saKomoromCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.saKomoromCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.saKomoromCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Sa komorom"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.saKomoromCheckbox.should(
      "not.be.checked"
    );
  }
  assertVisina186cmFilter() {
    assertElectroluxFrizideriFiltersPOM.visina186cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.visina186cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.visina186cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "186cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.visina186cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertVisina82cmFilter() {
    assertElectroluxFrizideriFiltersPOM.visina82cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.visina82cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.visina82cmCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "82cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.visina82cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertVisina88cmFilter() {
    assertElectroluxFrizideriFiltersPOM.visina88cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.visina88cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.visina88cmCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "88cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.visina88cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertVisina122cmFilter() {
    assertElectroluxFrizideriFiltersPOM.visina122cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.visina122cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.visina122cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "122cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.visina122cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertVisina178cmFilter() {
    assertElectroluxFrizideriFiltersPOM.visina178cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.visina178cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.visina178cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "178cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.visina178cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertVisina144cmFilter() {
    assertElectroluxFrizideriFiltersPOM.visina144cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.visina144cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.visina144cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "144cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.visina144cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertVisina189cmFilter() {
    assertElectroluxFrizideriFiltersPOM.visina189cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.visina189cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.visina189cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "189cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.visina189cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertVisina201cmFilter() {
    assertElectroluxFrizideriFiltersPOM.visina201cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.visina201cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.visina201cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "201cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.visina201cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertVisina192cmFilter() {
    assertElectroluxFrizideriFiltersPOM.visina192cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.visina192cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.visina192cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "192cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.visina192cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina387lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina387lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina387lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina387lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "387l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina387lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina461lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina461lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina461lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina461lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "461l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina461lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina127lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina127lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina127lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina127lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "127l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina127lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina371lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina371lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina371lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina371lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "371l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina371lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina109lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina109lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina109lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina109lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "109l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina109lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina142lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina142lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina142lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina142lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "142l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina142lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina122lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina122lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina122lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina122lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "122l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina122lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina207lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina207lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina207lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina207lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "207l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina207lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina310lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina310lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina310lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina310lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "310l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina310lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina217lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina217lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina217lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina217lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "217l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina217lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina267lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina267lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina267lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina267lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "267l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina267lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina133lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina133lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina133lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina133lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "133l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina133lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina187lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina187lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina187lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina187lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "187l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina187lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina253lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina253lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina253lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina253lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "253l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina253lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina273lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina273lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina273lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina273lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "273l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina273lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina324lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina324lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina324lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina324lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "324l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina324lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina331lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina331lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina331lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina331lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "331"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina331lCheckbox.should(
      "not.be.checked"
    );
  }
  assertZapremina367lFilter() {
    assertElectroluxFrizideriFiltersPOM.zapremina367lCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.zapremina367lCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.zapremina367lCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "367l"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.zapremina367lCheckbox.should(
      "not.be.checked"
    );
  }
  assertSamoFriziderFilter() {
    assertElectroluxFrizideriFiltersPOM.samoFriziderCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.samoFriziderCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.samoFriziderCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Samo frižider"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.samoFriziderCheckbox.should(
      "not.be.checked"
    );
  }
  assertKombinovaniFilter() {
    assertElectroluxFrizideriFiltersPOM.kombinovaniCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.kombinovaniCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.kombinovaniCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Kombinovani"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.kombinovaniCheckbox.should(
      "not.be.checked"
    );
  }
  assertSamostojeciFilter() {
    assertElectroluxFrizideriFiltersPOM.samostojeciCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.samostojeciCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.samostojeciCheckbox.should(
      "be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Samostojeći"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.samostojeciCheckbox.should(
      "not.be.checked"
    );
  }
  assertUgradniFilter() {
    assertElectroluxFrizideriFiltersPOM.ugradniCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.ugradniCheckbox.check({ force: true });
    assertElectroluxFrizideriFiltersPOM.ugradniCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Ugradni"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.ugradniCheckbox.should(
      "not.be.checked"
    );
  }
  assertCrnaFilter() {
    assertElectroluxFrizideriFiltersPOM.crnaCheckbox.should("not.be.checked");
    assertElectroluxFrizideriFiltersPOM.crnaCheckbox.check({ force: true });
    assertElectroluxFrizideriFiltersPOM.crnaCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Crna"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.crnaCheckbox.should("not.be.checked");
  }
  assertInoxFilter() {
    assertElectroluxFrizideriFiltersPOM.inoxCheckbox.should("not.be.checked");
    assertElectroluxFrizideriFiltersPOM.inoxCheckbox.check({ force: true });
    assertElectroluxFrizideriFiltersPOM.inoxCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.inoxCheckbox.should("not.be.checked");
  }
  assertBelaFilter() {
    assertElectroluxFrizideriFiltersPOM.belaCheckbox.should("not.be.checked");
    assertElectroluxFrizideriFiltersPOM.belaCheckbox.check({ force: true });
    assertElectroluxFrizideriFiltersPOM.belaCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Bela"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.belaCheckbox.should("not.be.checked");
  }
  assertSivaFilter() {
    assertElectroluxFrizideriFiltersPOM.sivaCheckbox.should("not.be.checked");
    assertElectroluxFrizideriFiltersPOM.sivaCheckbox.check({ force: true });
    assertElectroluxFrizideriFiltersPOM.sivaCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Siva"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.sivaCheckbox.should("not.be.checked");
  }
  assertLowFrostFilter() {
    assertElectroluxFrizideriFiltersPOM.lowFrostCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.lowFrostCheckbox.check({ force: true });
    assertElectroluxFrizideriFiltersPOM.lowFrostCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "Low Frost"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.lowFrostCheckbox.should(
      "not.be.checked"
    );
  }
  assertNoFrostFilter() {
    assertElectroluxFrizideriFiltersPOM.noFrostCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.noFrostCheckbox.check({ force: true });
    assertElectroluxFrizideriFiltersPOM.noFrostCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "No Frost"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.noFrostCheckbox.should(
      "not.be.checked"
    );
  }
  assertSirina60cmFilter() {
    assertElectroluxFrizideriFiltersPOM.sirina60cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.sirina60cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.sirina60cmCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "60cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.sirina60cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertSirina56cmFilter() {
    assertElectroluxFrizideriFiltersPOM.sirina56cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.sirina56cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.sirina56cmCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "56cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.sirina56cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertSirina54cmFilter() {
    assertElectroluxFrizideriFiltersPOM.sirina54cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.sirina54cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.sirina54cmCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "54cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.sirina54cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertSirina55cmFilter() {
    assertElectroluxFrizideriFiltersPOM.sirina55cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.sirina55cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.sirina55cmCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "55cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.sirina55cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertSirina70cmFilter() {
    assertElectroluxFrizideriFiltersPOM.sirina70cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxFrizideriFiltersPOM.sirina70cmCheckbox.check({
      force: true,
    });
    assertElectroluxFrizideriFiltersPOM.sirina70cmCheckbox.should("be.checked");
    assertElectroluxFrizideriFiltersPOM.productCharacteristics.should(
      "contain",
      "70cm"
    );
    assertElectroluxFrizideriFiltersPOM.ponistiBtn.click();
    assertElectroluxFrizideriFiltersPOM.sirina70cmCheckbox.should(
      "not.be.checked"
    );
  }
}
export const assertElectroluxFrizideriFiltersBL =
  new AssertElectroluxFrizideriFiltersBL();
