import { assertBlancoDrinkFilterFiltersPOM } from "../../POM/blancoPOM/assertBlancoDrinkFilterFiltersPOM";

class AssertBlancoDrinkFilterFiltersBL {
  // Assertions that are written as comments are left this way until all products have their characteristics uploaded!

  assertBlackMattFilter() {
    assertBlancoDrinkFilterFiltersPOM.blackMattCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.blackMattCheckbox.check({ force: true });
    assertBlancoDrinkFilterFiltersPOM.blackMattCheckbox.should("be.checked");
    assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
      "contain",
      "Black Matt"
    );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.blackMattCheckbox.should(
      "not.be.checked"
    );
  }
  assertCrnaFilter() {
    assertBlancoDrinkFilterFiltersPOM.crnaCheckbox.should("not.be.checked");
    assertBlancoDrinkFilterFiltersPOM.crnaCheckbox.check({ force: true });
    assertBlancoDrinkFilterFiltersPOM.crnaCheckbox.should("be.checked");
    // assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Crna"
    // );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.crnaCheckbox.should("not.be.checked");
  }
  assertAntracitFilter() {
    assertBlancoDrinkFilterFiltersPOM.antracitSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.antracitSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDrinkFilterFiltersPOM.antracitSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Antracit"
    // );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.antracitSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertStenaSivaFilter() {
    assertBlancoDrinkFilterFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.stenaSivaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDrinkFilterFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Stena siva"
    // );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertAlumetalikFilter() {
    assertBlancoDrinkFilterFiltersPOM.alumetalikSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.alumetalikSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDrinkFilterFiltersPOM.alumetalikSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Alumetalik"
    // );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.alumetalikSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertBelaFilter() {
    assertBlancoDrinkFilterFiltersPOM.belaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.belaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDrinkFilterFiltersPOM.belaSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Bela"
    // );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.belaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertTartufFilter() {
    assertBlancoDrinkFilterFiltersPOM.tartufSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.tartufSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDrinkFilterFiltersPOM.tartufSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Tartuf"
    // );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.tartufSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertKafaFilter() {
    assertBlancoDrinkFilterFiltersPOM.kafaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.kafaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDrinkFilterFiltersPOM.kafaSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Kafa"
    // );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.kafaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertSilgranitLookFilter() {
    assertBlancoDrinkFilterFiltersPOM.silgranitLookCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.silgranitLookCheckbox.check({
      force: true,
    });
    assertBlancoDrinkFilterFiltersPOM.silgranitLookCheckbox.should(
      "be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
      "contain",
      "Silgranit-Look"
    );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.silgranitLookCheckbox.should(
      "not.be.checked"
    );
  }
  assertMetalikFilter() {
    assertBlancoDrinkFilterFiltersPOM.metalikCheckbox.should("not.be.checked");
    assertBlancoDrinkFilterFiltersPOM.metalikCheckbox.check({ force: true });
    assertBlancoDrinkFilterFiltersPOM.metalikCheckbox.should("be.checked");
    assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
      "contain",
      "Metalik"
    );
  }
  assertSilgranitFilter() {
    assertBlancoDrinkFilterFiltersPOM.silgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.silgranitCheckbox.check({ force: true });
    assertBlancoDrinkFilterFiltersPOM.silgranitCheckbox.should("be.checked");
    // assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Silgranit"
    // );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.silgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertInoxFilter() {
    assertBlancoDrinkFilterFiltersPOM.inoxCheckbox.should("not.be.checked");
    assertBlancoDrinkFilterFiltersPOM.inoxCheckbox.check({ force: true });
    assertBlancoDrinkFilterFiltersPOM.inoxCheckbox.should("be.checked");
    assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox"
    );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.inoxCheckbox.should("not.be.checked");
  }

  assertSaTusemFilter() {
    assertBlancoDrinkFilterFiltersPOM.saTusemCheckbox.should("not.be.checked");
    assertBlancoDrinkFilterFiltersPOM.saTusemCheckbox.check({ force: true });
    assertBlancoDrinkFilterFiltersPOM.saTusemCheckbox.should("be.checked");
    assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
      "contain",
      "Sa tušem"
    );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.saTusemCheckbox.should("not.be.checked");
  }
  assertBezTusaFilter() {
    assertBlancoDrinkFilterFiltersPOM.bezTusaCheckbox.should("not.be.checked");
    assertBlancoDrinkFilterFiltersPOM.bezTusaCheckbox.check({ force: true });
    assertBlancoDrinkFilterFiltersPOM.bezTusaCheckbox.should("be.checked");
    assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
      "contain",
      "Bez tuša"
    );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.bezTusaCheckbox.should("not.be.checked");
  }
  assertInoxFinishUltraResistFilter() {
    assertBlancoDrinkFilterFiltersPOM.inoxFinishUltraResistCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.inoxFinishUltraResistCheckbox.check({
      force: true,
    });
    assertBlancoDrinkFilterFiltersPOM.inoxFinishUltraResistCheckbox.should(
      "be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox-finish UltraResist"
    );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.inoxFinishUltraResistCheckbox.should(
      "not.be.checked"
    );
  }
  assertZlatnoSatenFilter() {
    assertBlancoDrinkFilterFiltersPOM.zlatnoSatenCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDrinkFilterFiltersPOM.zlatnoSatenCheckbox.check({
      force: true,
    });
    assertBlancoDrinkFilterFiltersPOM.zlatnoSatenCheckbox.should("be.checked");
    assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
      "contain",
      "Zlatno saten"
    );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.zlatnoSatenCheckbox.should(
      "not.be.checked"
    );
  }
  assertHromFilter() {
    assertBlancoDrinkFilterFiltersPOM.hromCheckbox.should("not.be.checked");
    assertBlancoDrinkFilterFiltersPOM.hromCheckbox.check({ force: true });
    assertBlancoDrinkFilterFiltersPOM.hromCheckbox.should("be.checked");
    assertBlancoDrinkFilterFiltersPOM.productCharacteristics.should(
      "contain",
      "Hrom"
    );
    assertBlancoDrinkFilterFiltersPOM.ponistiBtn.click();
    assertBlancoDrinkFilterFiltersPOM.hromCheckbox.should("not.be.checked");
  }
}
export const assertBlancoDrinkFilterFiltersBL =
  new AssertBlancoDrinkFilterFiltersBL();
