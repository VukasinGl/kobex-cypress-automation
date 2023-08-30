import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxAspiratoriPagePOM } from "../../POM/electroluxPOM/electroluxAspiratoriPagePOM";

class ElectroluxAspiratoriPageBL {
  assertElectroluxAspiratoriPage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.aspiratoriLink.click();
    electroluxAspiratoriPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "Način ugradnje")
      .and("contain", "HOB2HOOD")
      .and("contain", "ELEMENT")
      .and("contain", "BOJA UREĐAJA")
      .and("contain", "UPRAVLJANJE")
      .and("contain", "MAKSIMALNA JAČINA");
    electroluxAspiratoriPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxAspiratoriPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxAspiratoriPagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxAspiratoriPagePOM.hob2hoodFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxAspiratoriPagePOM.elementFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxAspiratoriPagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxAspiratoriPagePOM.upravljanjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxAspiratoriPagePOM.maksimalnaJacinaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxAspiratoriPagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxAspiratoriPagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxAspiratoriPagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxAspiratoriPagePOM.poCeniRastuceOption.should("be.visible");
    electroluxAspiratoriPagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxAspiratoriPagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxAspiratoriPagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxAspiratoriPagePOM.stanjeCheckbox.click({ force: true });
    electroluxAspiratoriPagePOM.stanjeCheckbox.should("be.checked");
    electroluxAspiratoriPagePOM.ponistiBtn.click();
    electroluxAspiratoriPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const electroluxAspiratoriPageBL = new ElectroluxAspiratoriPageBL();
