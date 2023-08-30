import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxSudomasinePagePOM } from "../../POM/electroluxPOM/electroluxSudomasinePagePOM";

class ElectroluxSudomasinePageBL {
  assertElectroluxSudomasinePage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.sudomasineLink.click();
    electroluxSudomasinePagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "ŠIRINA UREĐAJA")
      .and("contain", "JAČINA ZVUKA")
      .and("contain", "INDIKATOR RADA")
      .and("contain", "BROJ KORPI")
      .and("contain", "Način ugradnje")
      .and("contain", "KAPACITET PUNJENJA");
    electroluxSudomasinePagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSudomasinePagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSudomasinePagePOM.sirinaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSudomasinePagePOM.jacinaZvukaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSudomasinePagePOM.indikatorRadaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSudomasinePagePOM.brojKorpiFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSudomasinePagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSudomasinePagePOM.kapacitetPunjenja
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSudomasinePagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxSudomasinePagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxSudomasinePagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxSudomasinePagePOM.poCeniRastuceOption.should("be.visible");
    electroluxSudomasinePagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxSudomasinePagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxSudomasinePagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxSudomasinePagePOM.stanjeCheckbox.click({ force: true });
    electroluxSudomasinePagePOM.stanjeCheckbox.should("be.checked");
    electroluxSudomasinePagePOM.ponistiBtn.click();
    electroluxSudomasinePagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const electroluxSudomasinePageBL = new ElectroluxSudomasinePageBL();
