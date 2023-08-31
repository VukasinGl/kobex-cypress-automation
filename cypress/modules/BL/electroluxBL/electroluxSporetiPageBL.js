import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxSporetiPagePOM } from "../../POM/electroluxPOM/electroluxSporetiPagePOM";

class ElectroluxSporetiPageBL {
  assertElectroluxSporetiPage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.sporetiLink.click();
    electroluxSporetiPagePOM.title.should("be.visible");
    electroluxSporetiPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "VRSTA PLOČE")
      .and("contain", "NAČIN ČIŠĆENJA")
      .and("contain", "BOJA UREĐAJA")
      .and("contain", "ŠIRINA UREĐAJA");
    electroluxSporetiPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSporetiPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSporetiPagePOM.vrstaPločeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSporetiPagePOM.nacinCiscenjaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSporetiPagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSporetiPagePOM.sirinaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxSporetiPagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxSporetiPagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxSporetiPagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxSporetiPagePOM.poCeniRastuceOption.should("be.visible");
    electroluxSporetiPagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxSporetiPagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxSporetiPagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxSporetiPagePOM.stanjeCheckbox.click({ force: true });
    electroluxSporetiPagePOM.stanjeCheckbox.should("be.checked");
    electroluxSporetiPagePOM.ponistiBtn.click();
    electroluxSporetiPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const electroluxSporetiPageBL = new ElectroluxSporetiPageBL();
