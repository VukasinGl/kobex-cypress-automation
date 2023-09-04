import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { tekaDropDownMenuPOM } from "../../POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { tekaSudomasinePagePOM } from "../../POM/tekaPOM/tekaSudomasinePagePOM";

class TekaSudomasinePageBL {
  assertTekaSudomasinePage() {
    headerAndFooterPOM.tekaDropDownMenu.trigger("mouseover");
    tekaDropDownMenuPOM.sudomasineLink.click();
    tekaSudomasinePagePOM.title.should("be.visible");
    tekaSudomasinePagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "KAPACITET PUNJENJA")
      .and("contain", "NAČIN UGRADNJE")
      .and("contain", "JAČINA ZVUKA")
      .and("contain", "ŠIRINA UREĐAJA")
      .and("contain", "BROJ KORPI");
    tekaSudomasinePagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaSudomasinePagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaSudomasinePagePOM.kapacitetPunjenja
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaSudomasinePagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaSudomasinePagePOM.jacinaZvukaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaSudomasinePagePOM.brojKorpiFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaSudomasinePagePOM.sirinaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaSudomasinePagePOM.sortirajDropDownMenu.should("be.visible");
    tekaSudomasinePagePOM.poNazivuA_Zoption.should("be.visible");
    tekaSudomasinePagePOM.poNazivuZ_Aoption.should("be.visible");
    tekaSudomasinePagePOM.poCeniRastuceOption.should("be.visible");
    tekaSudomasinePagePOM.poCeniOpadajućeOption.should("be.visible");
    tekaSudomasinePagePOM.poUnosuOpadajuceOption.should("be.visible");
    tekaSudomasinePagePOM.stanjeCheckbox.should("not.be.checked");
    tekaSudomasinePagePOM.stanjeCheckbox.click({ force: true });
    tekaSudomasinePagePOM.stanjeCheckbox.should("be.checked");
    tekaSudomasinePagePOM.ponistiBtn.click();
    tekaSudomasinePagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const tekaSudomasinePageBL = new TekaSudomasinePageBL();
