import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { tekaDropDownMenuPOM } from "../../POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { tekaPlocePagePOM } from "../../POM/tekaPOM/tekaPlocePagePOM";

class TekaPlocePageBL {
  assertTekaPlocePage() {
    headerAndFooterPOM.tekaDropDownMenu.trigger("mouseover");
    tekaDropDownMenuPOM.ploceLink.click();
    tekaPlocePagePOM.title.should("be.visible");
    tekaPlocePagePOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "ŠIRINA UREĐAJA")
      .and("contain", "BOJA UREĐAJA")
      .and("contain", "VRSTA PLOČE")
      .and("contain", "URANJANJE U MERMER")
      .and("contain", "UPRAVLJANJE");
    tekaPlocePagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaPlocePagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaPlocePagePOM.sirinaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaPlocePagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaPlocePagePOM.vrstaPloceFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaPlocePagePOM.uranjanjeUMermerFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaPlocePagePOM.upravljanjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaPlocePagePOM.sortirajDropDownMenu.should("be.visible");
    tekaPlocePagePOM.poNazivuA_Zoption.should("be.visible");
    tekaPlocePagePOM.poNazivuZ_Aoption.should("be.visible");
    tekaPlocePagePOM.poCeniRastuceOption.should("be.visible");
    tekaPlocePagePOM.poCeniOpadajućeOption.should("be.visible");
    tekaPlocePagePOM.poUnosuOpadajuceOption.should("be.visible");
    tekaPlocePagePOM.stanjeCheckbox.should("not.be.checked");
    tekaPlocePagePOM.stanjeCheckbox.click({ force: true });
    tekaPlocePagePOM.stanjeCheckbox.should("be.checked");
    tekaPlocePagePOM.ponistiBtn.click();
    tekaPlocePagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const tekaPlocePageBL = new TekaPlocePageBL();
