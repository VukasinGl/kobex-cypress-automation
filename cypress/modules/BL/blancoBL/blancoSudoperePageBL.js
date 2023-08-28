import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { blancoDropDownMenuPOM } from "../../POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { blancoSudoperePagePOM } from "../../POM/blancoPOM/blancoSudoperePagePOM";

class BlancoSudoperePageBL {
  assertBlancoSudoperePage() {
    headerAndFooterPOM.blancoDropDownMenu.trigger("mouseover");
    blancoDropDownMenuPOM.sudopereLink.click();
    blancoSudoperePagePOM.title.should("be.visible");
    blancoSudoperePagePOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "METOD UGRADNJE")
      .and("contain", "MATERIJAL")
      .and("contain", "ELEMENT")
      .and("contain", "BROJ KORITA")
      .and("contain", "DUBINA KORITA")
      .and("contain", "BOJA SILGRANITA")
      .and("contain", "BOJA KERAMIKE")
      .and("contain", "NAČIN UGRADNJE")
      .and("contain", "PODIZAČ ČEPA");
    blancoSudoperePagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.metodUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.materijalFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.elementFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.brojKoritaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.dubinaKoritaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.bojaSilgranitaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.bojaKeramikeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.podizacCepaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSudoperePagePOM.sortirajDropDownMenu.should("be.visible");
    blancoSudoperePagePOM.poNazivuA_Zoption.should("be.visible");
    blancoSudoperePagePOM.poNazivuZ_Aoption.should("be.visible");
    blancoSudoperePagePOM.poCeniRastuceOption.should("be.visible");
    blancoSudoperePagePOM.poCeniOpadajućeOption.should("be.visible");
    blancoSudoperePagePOM.poUnosuOpadajuceOption.should("be.visible");
    blancoSudoperePagePOM.stanjeCheckbox.should("not.be.checked");
    blancoSudoperePagePOM.stanjeCheckbox.click({ force: true });
    blancoSudoperePagePOM.stanjeCheckbox.should("be.checked");
    blancoSudoperePagePOM.ponistiBtn.click();
    blancoSudoperePagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const blancoSudoperePageBL = new BlancoSudoperePageBL();
