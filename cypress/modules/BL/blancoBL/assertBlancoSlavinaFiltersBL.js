import { assertBlancoSlavinaFiltersPOM } from "../../POM/blancoPOM/assertBlancoSlavinaFiltersPOM";

class AssertBlancoSlavinaFiltersBL {
  // Assertions that are written as comments are left this way until all products have their characteristics uploaded!

  assertSaTusemFilter() {
    assertBlancoSlavinaFiltersPOM.saTusemCheckbox.should("not.be.checked");
    assertBlancoSlavinaFiltersPOM.saTusemCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.saTusemCheckbox.should("be.checked");
    assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
      "contain",
      "Sa tušem"
    );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.saTusemCheckbox.should("not.be.checked");
  }
  assertBezTusaFilter() {
    assertBlancoSlavinaFiltersPOM.bezTusaCheckbox.should("not.be.checked");
    assertBlancoSlavinaFiltersPOM.bezTusaCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.bezTusaCheckbox.should("be.checked");
    assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
      "contain",
      "Bez tuša"
    );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.bezTusaCheckbox.should("not.be.checked");
  }
  assertSilgranitLookFilter() {
    assertBlancoSlavinaFiltersPOM.silgranitLookCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSlavinaFiltersPOM.silgranitLookCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.silgranitLookCheckbox.should("be.checked");
    assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
      "contain",
      "Silgranit-Look"
    );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.silgranitLookCheckbox.should(
      "not.be.checked"
    );
  }
  assertMetalikFilter() {
    assertBlancoSlavinaFiltersPOM.metalikCheckbox.should("not.be.checked");
    assertBlancoSlavinaFiltersPOM.metalikCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.metalikCheckbox.should("be.checked");
    assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
      "contain",
      "Metalik"
    );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.metalikCheckbox.should("not.be.checked");
  }
  assertBlackMattFilter() {
    assertBlancoSlavinaFiltersPOM.blackMattCheckbox.should("not.be.checked");
    assertBlancoSlavinaFiltersPOM.blackMattCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.blackMattCheckbox.should("be.checked");
    assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
      "contain",
      "Black Matt"
    );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.blackMattCheckbox.should("not.be.checked");
  }
  assertCrnaFilter() {
    assertBlancoSlavinaFiltersPOM.crnaCheckbox.should("not.be.checked");
    assertBlancoSlavinaFiltersPOM.crnaCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.crnaCheckbox.should("be.checked");
    // assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Crna"
    // );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.crnaCheckbox.should("not.be.checked");
  }
  assertAntracitFilter() {
    assertBlancoSlavinaFiltersPOM.antracitSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSlavinaFiltersPOM.antracitSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSlavinaFiltersPOM.antracitSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Antracit"
    // );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.antracitSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertStenaSivaFilter() {
    assertBlancoSlavinaFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSlavinaFiltersPOM.stenaSivaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSlavinaFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Stena siva"
    // );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertVulkanSivaFilter() {
    assertBlancoSlavinaFiltersPOM.vulkanSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSlavinaFiltersPOM.vulkanSivaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSlavinaFiltersPOM.vulkanSivaSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Vulkan siva"
    // );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.vulkanSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertAlumetalikFilter() {
    assertBlancoSlavinaFiltersPOM.alumetalikSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSlavinaFiltersPOM.alumetalikSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSlavinaFiltersPOM.alumetalikSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Alumetalik"
    // );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.alumetalikSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertBelaFilter() {
    assertBlancoSlavinaFiltersPOM.belaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSlavinaFiltersPOM.belaSilgranitCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.belaSilgranitCheckbox.should("be.checked");
    // assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Bela"
    // );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.belaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertNeznobelaFilter() {
    assertBlancoSlavinaFiltersPOM.neznobelaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSlavinaFiltersPOM.neznobelaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSlavinaFiltersPOM.neznobelaSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Nežnobela"
    // );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.neznobelaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertTartufFilter() {
    assertBlancoSlavinaFiltersPOM.tartufSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSlavinaFiltersPOM.tartufSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSlavinaFiltersPOM.tartufSilgranitCheckbox.should("be.checked");
    // assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Tartuf"
    // );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.tartufSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertKafaFilter() {
    assertBlancoSlavinaFiltersPOM.kafaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSlavinaFiltersPOM.kafaSilgranitCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.kafaSilgranitCheckbox.should("be.checked");
    // assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
    //   "contain",
    //   "Kafa"
    // );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.kafaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertHromFilter() {
    assertBlancoSlavinaFiltersPOM.hromCheckbox.should("not.be.checked");
    assertBlancoSlavinaFiltersPOM.hromCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.hromCheckbox.should("be.checked");
    assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
      "contain",
      "Hrom"
    );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.hromCheckbox.should("not.be.checked");
  }
  assertZlatnoSatenFilter() {
    assertBlancoSlavinaFiltersPOM.zlatnoSatenCheckbox.should("not.be.checked");
    assertBlancoSlavinaFiltersPOM.zlatnoSatenCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.zlatnoSatenCheckbox.should("be.checked");
    assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
      "contain",
      "Zlatno saten"
    );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.zlatnoSatenCheckbox.should("not.be.checked");
  }
  assertInoxMassiveFilter() {
    assertBlancoSlavinaFiltersPOM.inoxMassiveCheckbox.should("not.be.checked");
    assertBlancoSlavinaFiltersPOM.inoxMassiveCheckbox.check({ force: true });
    assertBlancoSlavinaFiltersPOM.inoxMassiveCheckbox.should("be.checked");
    assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox Massive"
    );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.inoxMassiveCheckbox.should("not.be.checked");
  }
  assertInoxFinishUltraResistFilter() {
    assertBlancoSlavinaFiltersPOM.inoxFinishUltraResistCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSlavinaFiltersPOM.inoxFinishUltraResistCheckbox.check({
      force: true,
    });
    assertBlancoSlavinaFiltersPOM.inoxFinishUltraResistCheckbox.should(
      "be.checked"
    );
    assertBlancoSlavinaFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox-finish UltraResist"
    );
    assertBlancoSlavinaFiltersPOM.ponistiBtn.click();
    assertBlancoSlavinaFiltersPOM.inoxFinishUltraResistCheckbox.should(
      "not.be.checked"
    );
  }
}
export const assertBlancoSlavinaFiltersBL = new AssertBlancoSlavinaFiltersBL();
