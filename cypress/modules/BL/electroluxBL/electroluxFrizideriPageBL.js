import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxFrizideriPagePOM } from "../../POM/electroluxPOM/electroluxFrizideriPagePOM";

class ElectroluxFrizideriPageBL {
  assertElectroluxFrizideriPage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.frizideriLink.click();
    electroluxFrizideriPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "KOMBINOVANI")
      .and("contain", "Način ugradnje")
      .and("contain", "BOJA UREĐAJA")
      .and("contain", "VRSTA HLAĐENJA")
      .and("contain", "ŠIRINA UREĐAJA")
      .and("contain", "KOMORA")
      .and("contain", "VISINA")
      .and("contain", "UKUPNA ZAPREMINA");
    electroluxFrizideriPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxFrizideriPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxFrizideriPagePOM.kombinovaniFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxFrizideriPagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxFrizideriPagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxFrizideriPagePOM.vrstaHladjenjaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxFrizideriPagePOM.sirinaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxFrizideriPagePOM.komoraFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxFrizideriPagePOM.visinaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxFrizideriPagePOM.ukupnaZapreminaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxFrizideriPagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxFrizideriPagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxFrizideriPagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxFrizideriPagePOM.poCeniRastuceOption.should("be.visible");
    electroluxFrizideriPagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxFrizideriPagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxFrizideriPagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxFrizideriPagePOM.stanjeCheckbox.click({ force: true });
    electroluxFrizideriPagePOM.stanjeCheckbox.should("be.checked");
    electroluxFrizideriPagePOM.ponistiBtn.click();
    electroluxFrizideriPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const electroluxFrizideriPageBL = new ElectroluxFrizideriPageBL();
