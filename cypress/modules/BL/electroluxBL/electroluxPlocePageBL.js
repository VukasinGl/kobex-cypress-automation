import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxPlocePagePOM } from "../../POM/electroluxPOM/electroluxPlocePagePOM";

class ElectroluxPlocePageBL {
  assertElectroluxPlocePage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.ploceLink.click();
    electroluxPlocePagePOM.title.should("be.visible");
    electroluxPlocePagePOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "VRSTA PLOČE")
      .and("contain", "URANJANJE U MERMER")
      .and("contain", "BOJA UREĐAJA")
      .and("contain", "UPRAVLJANJE")
      .and("contain", "ŠIRINA UREĐAJA");
    electroluxPlocePagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxPlocePagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxPlocePagePOM.vrstaPloceFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxPlocePagePOM.uranjanjeUMermerFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxPlocePagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxPlocePagePOM.upravljanjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxPlocePagePOM.sirinaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxPlocePagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxPlocePagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxPlocePagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxPlocePagePOM.poCeniRastuceOption.should("be.visible");
    electroluxPlocePagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxPlocePagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxPlocePagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxPlocePagePOM.stanjeCheckbox.click({ force: true });
    electroluxPlocePagePOM.stanjeCheckbox.should("be.checked");
    electroluxPlocePagePOM.ponistiBtn.click();
    electroluxPlocePagePOM.stanjeCheckbox.should("not.be.checked");
  }
}

export const electroluxPlocePageBL = new ElectroluxPlocePageBL();
