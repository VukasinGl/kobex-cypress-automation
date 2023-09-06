import { assertFiltersPOM } from "../POM/assertFiltersPOM";

class AssertFiltersBL {
  // Assertions that are written as comments are left this way until all products have their characteristics uploaded!

  assertIzdvajamoFilter() {
    assertFiltersPOM.izdvajamoCheckbox.should("not.be.checked");
    assertFiltersPOM.izdvajamoCheckbox.check({ force: true });
    assertFiltersPOM.izdvajamoCheckbox.should("be.checked");
    assertFiltersPOM.imgArea.should("contain", "Izdvajamo");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.izdvajamoCheckbox.should("not.be.checked");
  }
  assertUgradneFilter() {
    assertFiltersPOM.ugradneCheckbox.should("not.be.checked");
    assertFiltersPOM.ugradneCheckbox.check({ force: true });
    assertFiltersPOM.ugradneCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain, Ugradne");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.ugradneCheckbox.should("not.be.checked");
  }
  assertPodgradneFilter() {
    assertFiltersPOM.podgradneCheckbox.should("not.be.checked");
    assertFiltersPOM.podgradneCheckbox.check({ force: true });
    assertFiltersPOM.podgradneCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain, Podgradne");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.ugradneCheckbox.should("not.be.checked");
  }
  assertInoxFilter() {
    assertFiltersPOM.inoxCheckbox.should("not.be.checked");
    assertFiltersPOM.inoxCheckbox.check({ force: true });
    assertFiltersPOM.inoxCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "Inox");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.inoxCheckbox.should("not.be.checked");
  }
  assertSilgranitFilter() {
    assertFiltersPOM.silgranitCheckbox.should("not.be.checked");
    assertFiltersPOM.silgranitCheckbox.check({ force: true });
    assertFiltersPOM.silgranitCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Silgranit");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.silgranitCheckbox.should("not.be.checked");
  }
  assertKeramikaFilter() {
    assertFiltersPOM.keramikaCheckbox.should("not.be.checked");
    assertFiltersPOM.keramikaCheckbox.check({ force: true });
    assertFiltersPOM.keramikaCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "Keramika");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.keramikaCheckbox.should("not.be.checked");
  }
  assertElement30cmFilter() {
    assertFiltersPOM.cm30ElementCheckbox.should("not.be.checked");
    assertFiltersPOM.cm30ElementCheckbox.check({ force: true });
    assertFiltersPOM.cm30ElementCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "30cm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.cm30ElementCheckbox.should("not.be.checked");
  }
  assertElement40cmFilter() {
    assertFiltersPOM.cm40ElementCheckbox.should("not.be.checked");
    assertFiltersPOM.cm40ElementCheckbox.check({ force: true });
    assertFiltersPOM.cm40ElementCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "40cm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.cm40ElementCheckbox.should("not.be.checked");
  }
  assertElement45cmFilter() {
    assertFiltersPOM.cm45ElementCheckbox.should("not.be.checked");
    assertFiltersPOM.cm45ElementCheckbox.check({ force: true });
    assertFiltersPOM.cm45ElementCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "45cm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.cm45ElementCheckbox.should("not.be.checked");
  }
  assertElement50cmFilter() {
    assertFiltersPOM.cm50ElementCheckbox.should("not.be.checked");
    assertFiltersPOM.cm50ElementCheckbox.check({ force: true });
    assertFiltersPOM.cm50ElementCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "50cm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.cm50ElementCheckbox.should("not.be.checked");
  }
  assertElement60cmFilter() {
    assertFiltersPOM.cm60ElementCheckbox.should("not.be.checked");
    assertFiltersPOM.cm60ElementCheckbox.check({ force: true });
    assertFiltersPOM.cm60ElementCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "60cm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.cm60ElementCheckbox.should("not.be.checked");
  }
  assertElement80cmFilter() {
    assertFiltersPOM.cm80ElementCheckbox.should("not.be.checked");
    assertFiltersPOM.cm80ElementCheckbox.check({ force: true });
    assertFiltersPOM.cm80ElementCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "80cm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.cm80ElementCheckbox.should("not.be.checked");
  }
  assertElement90cmFilter() {
    assertFiltersPOM.cm90ElementCheckbox.should("not.be.checked");
    assertFiltersPOM.cm90ElementCheckbox.check({ force: true });
    assertFiltersPOM.cm90ElementCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "90cm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.cm90ElementCheckbox.should("not.be.checked");
  }
  assertElementUgaonaFilter() {
    assertFiltersPOM.ugaonaElementCheckbox.should("not.be.checked");
    assertFiltersPOM.ugaonaElementCheckbox.check({ force: true });
    assertFiltersPOM.ugaonaElementCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "Ugaona");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.ugaonaElementCheckbox.should("not.be.checked");
  }
  assert1KoritoFilter() {
    assertFiltersPOM.korito1Checkbox.should("not.be.checked");
    assertFiltersPOM.korito1Checkbox.check({ force: true });
    assertFiltersPOM.korito1Checkbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "1 korito");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.korito1Checkbox.should("not.be.checked");
  }
  assert1KoritoSaOcedjivacemFilter() {
    assertFiltersPOM.korito1SaOcedjivacemCheckbox.should("not.be.checked");
    assertFiltersPOM.korito1SaOcedjivacemCheckbox.check({ force: true });
    assertFiltersPOM.korito1SaOcedjivacemCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should(
      "contain",
      "1 korito sa oceđivačem"
    );
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.korito1SaOcedjivacemCheckbox.should("not.be.checked");
  }
  assert2KoritaFilter() {
    assertFiltersPOM.korito2Checkbox.should("not.be.checked");
    assertFiltersPOM.korito2Checkbox.check({ force: true });
    assertFiltersPOM.korito2Checkbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "2 korita");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.korito2Checkbox.should("not.be.checked");
  }
  assert2KoritaSaOcedjivacemFilter() {
    assertFiltersPOM.korito2SaOcedjivacemCheckbox.should("not.be.checked");
    assertFiltersPOM.korito2SaOcedjivacemCheckbox.check({ force: true });
    assertFiltersPOM.korito2SaOcedjivacemCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should(
      "contain",
      "2 korita sa oceđivačem"
    );
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.korito2SaOcedjivacemCheckbox.should("not.be.checked");
  }
  assertDo150mmDubinaKoritaFilter() {
    assertFiltersPOM.do150mmCheckbox.should("not.be.checked");
    assertFiltersPOM.do150mmCheckbox.check({ force: true });
    assertFiltersPOM.do150mmCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "do 150mm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.do150mmCheckbox.should("not.be.checked");
  }
  assertOd186Do204mmDubinaKoritaFilter() {
    assertFiltersPOM.od186mmDo204mmCheckbox.should("not.be.checked");
    assertFiltersPOM.od186mmDo204mmCheckbox.check({ force: true });
    assertFiltersPOM.od186mmDo204mmCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "186mm-204mm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.od186mmDo204mmCheckbox.should("not.be.checked");
  }
  assertOd150Do165mmDubinaKoritaFilter() {
    assertFiltersPOM.od150mmDo165mmCheckbox.should("not.be.checked");
    assertFiltersPOM.od150mmDo165mmCheckbox.check({ force: true });
    assertFiltersPOM.od150mmDo165mmCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "150mm - 165mm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.od150mmDo165mmCheckbox.should("not.be.checked");
  }
  assertOd166Do185mmDubinaKoritaFilter() {
    assertFiltersPOM.od166mmDo185mmCheckbox.should("not.be.checked");
    assertFiltersPOM.od166mmDo185mmCheckbox.check({ force: true });
    assertFiltersPOM.od166mmDo185mmCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "166mm - 185mm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.od166mmDo185mmCheckbox.should("not.be.checked");
  }
  assertPreko205mmDubinaKoritaFilter() {
    assertFiltersPOM.preko205mmCheckbox.should("not.be.checked");
    assertFiltersPOM.preko205mmCheckbox.check({ force: true });
    assertFiltersPOM.preko205mmCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "Preko 205mm");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.preko205mmCheckbox.should("not.be.checked");
  }
  assertCrnaBojaSilgranitaFilter() {
    assertFiltersPOM.crnaSilgranitCheckbox.should("not.be.checked");
    assertFiltersPOM.crnaSilgranitCheckbox.check({ force: true });
    assertFiltersPOM.crnaSilgranitCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Crna");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.crnaSilgranitCheckbox.should("not.be.checked");
  }
  assertAntracitBojaSilgranitaFilter() {
    assertFiltersPOM.antracitSilgranitCheckbox.should("not.be.checked");
    assertFiltersPOM.antracitSilgranitCheckbox.check({ force: true });
    assertFiltersPOM.antracitSilgranitCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Antracit");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.antracitSilgranitCheckbox.should("not.be.checked");
  }
  assertStenaSivaBojaSilgranitaFilter() {
    assertFiltersPOM.stenaSivaSilgranitCheckbox.should("not.be.checked");
    assertFiltersPOM.stenaSivaSilgranitCheckbox.check({ force: true });
    assertFiltersPOM.stenaSivaSilgranitCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Stena siva");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.stenaSivaSilgranitCheckbox.should("not.be.checked");
  }
  assertVulkanSivaBojaSilgranitaFilter() {
    assertFiltersPOM.vulkanSivaSilgranitCheckbox.should("not.be.checked");
    assertFiltersPOM.vulkanSivaSilgranitCheckbox.check({ force: true });
    assertFiltersPOM.vulkanSivaSilgranitCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Vulkan siva");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.vulkanSivaSilgranitCheckbox.should("not.be.checked");
  }
  assertAlumetalikBojaSilgranitaFilter() {
    assertFiltersPOM.alumetalikSilgranitCheckbox.should("not.be.checked");
    assertFiltersPOM.alumetalikSilgranitCheckbox.check({ force: true });
    assertFiltersPOM.alumetalikSilgranitCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Alumetalik");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.alumetalikSilgranitCheckbox.should("not.be.checked");
  }
  assertBelaBojaSilgranitaFilter() {
    assertFiltersPOM.belaSilgranitCheckbox.should("not.be.checked");
    assertFiltersPOM.belaSilgranitCheckbox.check({ force: true });
    assertFiltersPOM.belaSilgranitCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Bela");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.belaSilgranitCheckbox.should("not.be.checked");
  }
  assertNeznobelaBojaSilgranitaFilter() {
    assertFiltersPOM.neznobelaSilgranitCheckbox.should("not.be.checked");
    assertFiltersPOM.neznobelaSilgranitCheckbox.check({ force: true });
    assertFiltersPOM.neznobelaSilgranitCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Neznobela");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.neznobelaSilgranitCheckbox.should("not.be.checked");
  }
  assertTartufBojaSilgranitaFilter() {
    assertFiltersPOM.tartufSilgranitCheckbox.should("not.be.checked");
    assertFiltersPOM.tartufSilgranitCheckbox.check({ force: true });
    assertFiltersPOM.tartufSilgranitCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Tartuf");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.tartufSilgranitCheckbox.should("not.be.checked");
  }
  assertKafaBojaSilgranitaFilter() {
    assertFiltersPOM.kafaSilgranitCheckbox.should("not.be.checked");
    assertFiltersPOM.kafaSilgranitCheckbox.check({ force: true });
    assertFiltersPOM.kafaSilgranitCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Kafa");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.kafaSilgranitCheckbox.should("not.be.checked");
  }
  assertCrnaBojaKeramikeFilter() {
    assertFiltersPOM.crnaKeramikaCheckbox.should("not.be.checked");
    assertFiltersPOM.crnaKeramikaCheckbox.check({ force: true });
    assertFiltersPOM.crnaKeramikaCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Crna");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.crnaKeramikaCheckbox.should("not.be.checked");
  }
  assertBazaltBojaKeramikeFilter() {
    assertFiltersPOM.bazaltKeramikaCheckbox.should("not.be.checked");
    assertFiltersPOM.bazaltKeramikaCheckbox.check({ force: true });
    assertFiltersPOM.bazaltKeramikaCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Bazalt");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.bazaltKeramikaCheckbox.should("not.be.checked");
  }
  assertKristalnoBelaBojaKeramikeFilter() {
    assertFiltersPOM.kristalnoBelaKeramikaCheckbox.should("not.be.checked");
    assertFiltersPOM.kristalnoBelaKeramikaCheckbox.check({ force: true });
    assertFiltersPOM.kristalnoBelaKeramikaCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Kristalno bela");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.kristalnoBelaKeramikaCheckbox.should("not.be.checked");
  }
  assertMagnolijaBojaKeramikeFilter() {
    assertFiltersPOM.magnolijaKeramikaCheckbox.should("not.be.checked");
    assertFiltersPOM.magnolijaKeramikaCheckbox.check({ force: true });
    assertFiltersPOM.magnolijaKeramikaCheckbox.should("be.checked");
    // assertFiltersPOM.productCharacteristics.should("contain", "Magnolija");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.magnolijaKeramikaCheckbox.should("not.be.checked");
  }
  assertBezPodizacaCepaFilter() {
    assertFiltersPOM.bezPodizacaCheckbox.should("not.be.checked");
    assertFiltersPOM.bezPodizacaCheckbox.check({ force: true });
    assertFiltersPOM.bezPodizacaCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "Bez podizača");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.bezPodizacaCheckbox.should("not.be.checked");
  }
  assertSaPodizacemCepaFilter() {
    assertFiltersPOM.saPodizacemCheckbox.should("not.be.checked");
    assertFiltersPOM.saPodizacemCheckbox.check({ force: true });
    assertFiltersPOM.saPodizacemCheckbox.should("be.checked");
    assertFiltersPOM.productCharacteristics.should("contain", "Sa podizačem");
    assertFiltersPOM.ponistiBtn.click();
    assertFiltersPOM.saPodizacemCheckbox.should("not.be.checked");
  }
}
export const assertFiltersBL = new AssertFiltersBL();
