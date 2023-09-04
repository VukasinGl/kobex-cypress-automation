import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { tekaDropDownMenuPOM } from "../../POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { tekaAspiratoriPagePOM } from "../../POM/tekaPOM/tekaAspiratoriPagePOM";

class TekaAspiratoriPageBL {
  assertTekaAspiratoriPage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    tekaDropDownMenuPOM.aspiratoriLink.click({ force: true });
    tekaAspiratoriPagePOM.title.should("be.visible");
    tekaAspiratoriPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "UPRAVLJANJE")
      .and("contain", "NAČIN UGRADNJE")
      .and("contain", "ELEMENT")
      .and("contain", "BOJA UREĐAJA");
    tekaAspiratoriPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaAspiratoriPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaAspiratoriPagePOM.upravljanjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaAspiratoriPagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaAspiratoriPagePOM.elementFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaAspiratoriPagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaAspiratoriPagePOM.sortirajDropDownMenu.should("be.visible");
    tekaAspiratoriPagePOM.poNazivuA_Zoption.should("be.visible");
    tekaAspiratoriPagePOM.poNazivuZ_Aoption.should("be.visible");
    tekaAspiratoriPagePOM.poCeniRastuceOption.should("be.visible");
    tekaAspiratoriPagePOM.poCeniOpadajućeOption.should("be.visible");
    tekaAspiratoriPagePOM.poUnosuOpadajuceOption.should("be.visible");
    tekaAspiratoriPagePOM.stanjeCheckbox.should("not.be.checked");
    tekaAspiratoriPagePOM.stanjeCheckbox.click({ force: true });
    tekaAspiratoriPagePOM.stanjeCheckbox.should("be.checked");
    tekaAspiratoriPagePOM.ponistiBtn.click();
    tekaAspiratoriPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const tekaAspiratoriPageBL = new TekaAspiratoriPageBL();
