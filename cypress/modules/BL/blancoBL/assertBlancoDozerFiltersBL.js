import { assertBlancoDozerFiltersPOM } from "../../POM/blancoPOM/assertBlancoDozerFiltersPOM";

class AssertBlancoDozerFiltersBL {
  // Assertions that are written as comments are left this way until all products have their characteristics uploaded!

  assertBlackMattFilter() {
    assertBlancoDozerFiltersPOM.blackMattCheckbox.should("not.be.checked");
    assertBlancoDozerFiltersPOM.blackMattCheckbox.check({ force: true });
    assertBlancoDozerFiltersPOM.blackMattCheckbox.should("be.checked");
    assertBlancoDozerFiltersPOM.productCharacteristics.should(
      "contain",
      "Black Matt"
    );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.blackMattCheckbox.should("not.be.checked");
  }
  assertCrnaFilter() {
    assertBlancoDozerFiltersPOM.crnaCheckbox.should("not.be.checked");
    assertBlancoDozerFiltersPOM.crnaCheckbox.check({ force: true });
    assertBlancoDozerFiltersPOM.crnaCheckbox.should("be.checked");
    // assertBlancoDozerFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Crna"
    // );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.crnaCheckbox.should("not.be.checked");
  }
  assertAntracitFilter() {
    assertBlancoDozerFiltersPOM.antracitSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDozerFiltersPOM.antracitSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDozerFiltersPOM.antracitSilgranitCheckbox.should("be.checked");
    // assertBlancoDozerFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Antracit"
    // );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.antracitSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertStenaSivaFilter() {
    assertBlancoDozerFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDozerFiltersPOM.stenaSivaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDozerFiltersPOM.stenaSivaSilgranitCheckbox.should("be.checked");
    // assertBlancoDozerFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Stena siva"
    // );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertVulkanSivaFilter() {
    assertBlancoDozerFiltersPOM.vulkanSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDozerFiltersPOM.vulkanSivaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDozerFiltersPOM.vulkanSivaSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoDozerFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Vulkan siva"
    // );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.vulkanSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertAlumetalikFilter() {
    assertBlancoDozerFiltersPOM.alumetalikSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDozerFiltersPOM.alumetalikSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDozerFiltersPOM.alumetalikSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoDozerFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Alumetalik"
    // );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.alumetalikSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertBelaFilter() {
    assertBlancoDozerFiltersPOM.belaSilgranitCheckbox.should("not.be.checked");
    assertBlancoDozerFiltersPOM.belaSilgranitCheckbox.check({ force: true });
    assertBlancoDozerFiltersPOM.belaSilgranitCheckbox.should("be.checked");
    // assertBlancoDozerFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Bela"
    // );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.belaSilgranitCheckbox.should("not.be.checked");
  }
  assertNeznobelaFilter() {
    assertBlancoDozerFiltersPOM.neznobelaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDozerFiltersPOM.neznobelaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDozerFiltersPOM.neznobelaSilgranitCheckbox.should("be.checked");
    // assertBlancoDozerFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Neznobela"
    // );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.neznobelaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertTartufFilter() {
    assertBlancoDozerFiltersPOM.tartufSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDozerFiltersPOM.tartufSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoDozerFiltersPOM.tartufSilgranitCheckbox.should("be.checked");
    // assertBlancoDozerFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Tartuf"
    // );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.tartufSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertKafaFilter() {
    assertBlancoDozerFiltersPOM.kafaSilgranitCheckbox.should("not.be.checked");
    assertBlancoDozerFiltersPOM.kafaSilgranitCheckbox.check({ force: true });
    assertBlancoDozerFiltersPOM.kafaSilgranitCheckbox.should("be.checked");
    // assertBlancoDozerFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Kafa"
    // );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.kafaSilgranitCheckbox.should("not.be.checked");
  }
  assertSilgranitLookFilter() {
    assertBlancoDozerFiltersPOM.silgranitLookCheckbox.should("not.be.checked");
    assertBlancoDozerFiltersPOM.silgranitLookCheckbox.check({ force: true });
    assertBlancoDozerFiltersPOM.silgranitLookCheckbox.should("be.checked");
    assertBlancoDozerFiltersPOM.productCharacteristics.should(
      "contain",
      "Silgranit-Look"
    );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.silgranitLookCheckbox.should("not.be.checked");
  }
  assertMetalikFilter() {
    assertBlancoDozerFiltersPOM.metalikCheckbox.should("not.be.checked");
    assertBlancoDozerFiltersPOM.metalikCheckbox.check({ force: true });
    assertBlancoDozerFiltersPOM.metalikCheckbox.should("be.checked");
    assertBlancoDozerFiltersPOM.productCharacteristics.should(
      "contain",
      "Metalik"
    );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.metalikCheckbox.should("not.be.checked");
  }
  assertHromFilter() {
    assertBlancoDozerFiltersPOM.hromCheckbox.should("not.be.checked");
    assertBlancoDozerFiltersPOM.hromCheckbox.check({ force: true });
    assertBlancoDozerFiltersPOM.hromCheckbox.should("be.checked");
    assertBlancoDozerFiltersPOM.productCharacteristics.should(
      "contain",
      "Hrom"
    );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.hromCheckbox.should("not.be.checked");
  }
  assertZlatnoSatenFilter() {
    assertBlancoDozerFiltersPOM.zlatnoSatenCheckbox.should("not.be.checked");
    assertBlancoDozerFiltersPOM.zlatnoSatenCheckbox.check({ force: true });
    assertBlancoDozerFiltersPOM.zlatnoSatenCheckbox.should("be.checked");
    assertBlancoDozerFiltersPOM.productCharacteristics.should(
      "contain",
      "Saten zlatno"
    );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.zlatnoSatenCheckbox.should("not.be.checked");
  }
  assertInoxMassiveFilter() {
    assertBlancoDozerFiltersPOM.inoxMassiveCheckbox.should("not.be.checked");
    assertBlancoDozerFiltersPOM.inoxMassiveCheckbox.check({ force: true });
    assertBlancoDozerFiltersPOM.inoxMassiveCheckbox.should("be.checked");
    assertBlancoDozerFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox Massive"
    );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.inoxMassiveCheckbox.should("not.be.checked");
  }
  assertInoxFinishUltraResistFilter() {
    assertBlancoDozerFiltersPOM.inoxFinishUltraResistCheckbox.should(
      "not.be.checked"
    );
    assertBlancoDozerFiltersPOM.inoxFinishUltraResistCheckbox.check({
      force: true,
    });
    assertBlancoDozerFiltersPOM.inoxFinishUltraResistCheckbox.should(
      "be.checked"
    );
    assertBlancoDozerFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox -finish UltraResist"
    );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.inoxFinishUltraResistCheckbox.should(
      "not.be.checked"
    );
  }
  assertInoxFinishFilter() {
    assertBlancoDozerFiltersPOM.inoxFinishCheckbox.should("not.be.checked");
    assertBlancoDozerFiltersPOM.inoxFinishCheckbox.check({ force: true });
    assertBlancoDozerFiltersPOM.inoxFinishCheckbox.should("be.checked");
    assertBlancoDozerFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox -finish"
    );
    assertBlancoDozerFiltersPOM.ponistiBtn.click();
    assertBlancoDozerFiltersPOM.inoxFinishCheckbox.should("not.be.checked");
  }
}
export const assertBlancoDozerFiltersBL = new AssertBlancoDozerFiltersBL();
