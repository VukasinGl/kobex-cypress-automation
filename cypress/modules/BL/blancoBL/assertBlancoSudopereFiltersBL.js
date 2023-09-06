import { assertBlancoSudopereFiltersPOM } from "../../POM/blancoPOM/assertBlancoSudopereFiltersPOM";

class AssertBlancoSudopereFiltersBL {
  // Assertions that are written as comments are left this way until all products have their characteristics uploaded!

  assertIzdvajamoFilter() {
    assertBlancoSudopereFiltersPOM.izdvajamoCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.izdvajamoCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.izdvajamoCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.imgArea.should("contain", "Izdvajamo");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.izdvajamoCheckbox.should("not.be.checked");
  }
  assertUgradneFilter() {
    assertBlancoSudopereFiltersPOM.ugradneCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.ugradneCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.ugradneCheckbox.should("be.checked");
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain, Ugradne");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.ugradneCheckbox.should("not.be.checked");
  }
  assertPodgradneFilter() {
    assertBlancoSudopereFiltersPOM.podgradneCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.podgradneCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.podgradneCheckbox.should("be.checked");
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain, Podgradne");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.ugradneCheckbox.should("not.be.checked");
  }
  assertInoxFilter() {
    assertBlancoSudopereFiltersPOM.inoxCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.inoxCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.inoxCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.inoxCheckbox.should("not.be.checked");
  }
  assertSilgranitFilter() {
    assertBlancoSudopereFiltersPOM.silgranitCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.silgranitCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.silgranitCheckbox.should("be.checked");
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Silgranit");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.silgranitCheckbox.should("not.be.checked");
  }
  assertKeramikaFilter() {
    assertBlancoSudopereFiltersPOM.keramikaCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.keramikaCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.keramikaCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "Keramika"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.keramikaCheckbox.should("not.be.checked");
  }
  assertElement30cmFilter() {
    assertBlancoSudopereFiltersPOM.cm30ElementCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.cm30ElementCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.cm30ElementCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "30cm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.cm30ElementCheckbox.should("not.be.checked");
  }
  assertElement40cmFilter() {
    assertBlancoSudopereFiltersPOM.cm40ElementCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.cm40ElementCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.cm40ElementCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "40cm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.cm40ElementCheckbox.should("not.be.checked");
  }
  assertElement45cmFilter() {
    assertBlancoSudopereFiltersPOM.cm45ElementCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.cm45ElementCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.cm45ElementCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "45cm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.cm45ElementCheckbox.should("not.be.checked");
  }
  assertElement50cmFilter() {
    assertBlancoSudopereFiltersPOM.cm50ElementCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.cm50ElementCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.cm50ElementCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "50cm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.cm50ElementCheckbox.should("not.be.checked");
  }
  assertElement60cmFilter() {
    assertBlancoSudopereFiltersPOM.cm60ElementCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.cm60ElementCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.cm60ElementCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "60cm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.cm60ElementCheckbox.should("not.be.checked");
  }
  assertElement80cmFilter() {
    assertBlancoSudopereFiltersPOM.cm80ElementCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.cm80ElementCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.cm80ElementCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "80cm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.cm80ElementCheckbox.should("not.be.checked");
  }
  assertElement90cmFilter() {
    assertBlancoSudopereFiltersPOM.cm90ElementCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.cm90ElementCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.cm90ElementCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "90cm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.cm90ElementCheckbox.should("not.be.checked");
  }
  assertElementUgaonaFilter() {
    assertBlancoSudopereFiltersPOM.ugaonaElementCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.ugaonaElementCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.ugaonaElementCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "Ugaona"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.ugaonaElementCheckbox.should(
      "not.be.checked"
    );
  }
  assert1KoritoFilter() {
    assertBlancoSudopereFiltersPOM.korito1Checkbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.korito1Checkbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.korito1Checkbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "1 korito"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.korito1Checkbox.should("not.be.checked");
  }
  assert1KoritoSaOcedjivacemFilter() {
    assertBlancoSudopereFiltersPOM.korito1SaOcedjivacemCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.korito1SaOcedjivacemCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.korito1SaOcedjivacemCheckbox.should(
      "be.checked"
    );
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "1 korito sa oceđivačem"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.korito1SaOcedjivacemCheckbox.should(
      "not.be.checked"
    );
  }
  assert2KoritaFilter() {
    assertBlancoSudopereFiltersPOM.korito2Checkbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.korito2Checkbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.korito2Checkbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "2 korita"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.korito2Checkbox.should("not.be.checked");
  }
  assert2KoritaSaOcedjivacemFilter() {
    assertBlancoSudopereFiltersPOM.korito2SaOcedjivacemCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.korito2SaOcedjivacemCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.korito2SaOcedjivacemCheckbox.should(
      "be.checked"
    );
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "2 korita sa oceđivačem"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.korito2SaOcedjivacemCheckbox.should(
      "not.be.checked"
    );
  }
  assertDo150mmDubinaKoritaFilter() {
    assertBlancoSudopereFiltersPOM.do150mmCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.do150mmCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.do150mmCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "do 150mm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.do150mmCheckbox.should("not.be.checked");
  }
  assertOd186Do204mmDubinaKoritaFilter() {
    assertBlancoSudopereFiltersPOM.od186mmDo204mmCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.od186mmDo204mmCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.od186mmDo204mmCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "186mm-204mm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.od186mmDo204mmCheckbox.should(
      "not.be.checked"
    );
  }
  assertOd150Do165mmDubinaKoritaFilter() {
    assertBlancoSudopereFiltersPOM.od150mmDo165mmCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.od150mmDo165mmCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.od150mmDo165mmCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "150mm - 165mm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.od150mmDo165mmCheckbox.should(
      "not.be.checked"
    );
  }
  assertOd166Do185mmDubinaKoritaFilter() {
    assertBlancoSudopereFiltersPOM.od166mmDo185mmCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.od166mmDo185mmCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.od166mmDo185mmCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "166mm - 185mm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.od166mmDo185mmCheckbox.should(
      "not.be.checked"
    );
  }
  assertPreko205mmDubinaKoritaFilter() {
    assertBlancoSudopereFiltersPOM.preko205mmCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.preko205mmCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.preko205mmCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "Preko 205mm"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.preko205mmCheckbox.should("not.be.checked");
  }
  assertCrnaBojaSilgranitaFilter() {
    assertBlancoSudopereFiltersPOM.crnaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.crnaSilgranitCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.crnaSilgranitCheckbox.should("be.checked");
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Crna");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.crnaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertAntracitBojaSilgranitaFilter() {
    assertBlancoSudopereFiltersPOM.antracitSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.antracitSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.antracitSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Antracit");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.antracitSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertStenaSivaBojaSilgranitaFilter() {
    assertBlancoSudopereFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.stenaSivaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Stena siva");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.stenaSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertVulkanSivaBojaSilgranitaFilter() {
    assertBlancoSudopereFiltersPOM.vulkanSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.vulkanSivaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.vulkanSivaSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Vulkan siva");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.vulkanSivaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertAlumetalikBojaSilgranitaFilter() {
    assertBlancoSudopereFiltersPOM.alumetalikSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.alumetalikSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.alumetalikSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Alumetalik");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.alumetalikSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertBelaBojaSilgranitaFilter() {
    assertBlancoSudopereFiltersPOM.belaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.belaSilgranitCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.belaSilgranitCheckbox.should("be.checked");
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Bela");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.belaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertNeznobelaBojaSilgranitaFilter() {
    assertBlancoSudopereFiltersPOM.neznobelaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.neznobelaSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.neznobelaSilgranitCheckbox.should(
      "be.checked"
    );
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Neznobela");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.neznobelaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertTartufBojaSilgranitaFilter() {
    assertBlancoSudopereFiltersPOM.tartufSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.tartufSilgranitCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.tartufSilgranitCheckbox.should("be.checked");
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Tartuf");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.tartufSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertKafaBojaSilgranitaFilter() {
    assertBlancoSudopereFiltersPOM.kafaSilgranitCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.kafaSilgranitCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.kafaSilgranitCheckbox.should("be.checked");
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Kafa");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.kafaSilgranitCheckbox.should(
      "not.be.checked"
    );
  }
  assertCrnaBojaKeramikeFilter() {
    assertBlancoSudopereFiltersPOM.crnaKeramikaCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.crnaKeramikaCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.crnaKeramikaCheckbox.should("be.checked");
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Crna");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.crnaKeramikaCheckbox.should(
      "not.be.checked"
    );
  }
  assertBazaltBojaKeramikeFilter() {
    assertBlancoSudopereFiltersPOM.bazaltKeramikaCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.bazaltKeramikaCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.bazaltKeramikaCheckbox.should("be.checked");
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Bazalt");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.bazaltKeramikaCheckbox.should(
      "not.be.checked"
    );
  }
  assertKristalnoBelaBojaKeramikeFilter() {
    assertBlancoSudopereFiltersPOM.kristalnoBelaKeramikaCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.kristalnoBelaKeramikaCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.kristalnoBelaKeramikaCheckbox.should(
      "be.checked"
    );
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Kristalno bela");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.kristalnoBelaKeramikaCheckbox.should(
      "not.be.checked"
    );
  }
  assertMagnolijaBojaKeramikeFilter() {
    assertBlancoSudopereFiltersPOM.magnolijaKeramikaCheckbox.should(
      "not.be.checked"
    );
    assertBlancoSudopereFiltersPOM.magnolijaKeramikaCheckbox.check({
      force: true,
    });
    assertBlancoSudopereFiltersPOM.magnolijaKeramikaCheckbox.should(
      "be.checked"
    );
    // assertBlancoSudopereFiltersPOM.productCharacteristics.should("contain", "Magnolija");
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.magnolijaKeramikaCheckbox.should(
      "not.be.checked"
    );
  }
  assertBezPodizacaCepaFilter() {
    assertBlancoSudopereFiltersPOM.bezPodizacaCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.bezPodizacaCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.bezPodizacaCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "Bez podizača"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.bezPodizacaCheckbox.should("not.be.checked");
  }
  assertSaPodizacemCepaFilter() {
    assertBlancoSudopereFiltersPOM.saPodizacemCheckbox.should("not.be.checked");
    assertBlancoSudopereFiltersPOM.saPodizacemCheckbox.check({ force: true });
    assertBlancoSudopereFiltersPOM.saPodizacemCheckbox.should("be.checked");
    assertBlancoSudopereFiltersPOM.productCharacteristics.should(
      "contain",
      "Sa podizačem"
    );
    assertBlancoSudopereFiltersPOM.ponistiBtn.click();
    assertBlancoSudopereFiltersPOM.saPodizacemCheckbox.should("not.be.checked");
  }
}
export const assertBlancoSudopereFiltersBL =
  new AssertBlancoSudopereFiltersBL();
