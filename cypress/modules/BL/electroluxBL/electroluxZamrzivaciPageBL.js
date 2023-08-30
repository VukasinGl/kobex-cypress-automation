import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxZamrzivaciPagePOM } from "../../POM/electroluxPOM/electroluxZamrzivaciPagePOM";

class ElectroluxZamrzivaciPageBL {
  assertElectroluxZamrzivaciPage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.zamrzivaciLink.click();
    electroluxZamrzivaciPagePOM.title.should("be.visible");
    electroluxZamrzivaciPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "Način ugradnje")
      .and("contain", "BOJA UREĐAJA")
      .and("contain", "ŠIRINA UREĐAJA")
      .and("contain", "VISINA")
      .and("contain", "UKUPNA ZAPREMINA")
      .and("contain", "NO FROST");
    electroluxZamrzivaciPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxZamrzivaciPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxZamrzivaciPagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxZamrzivaciPagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxZamrzivaciPagePOM.sirinaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxZamrzivaciPagePOM.visinaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxZamrzivaciPagePOM.ukupnaZapreminaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxZamrzivaciPagePOM.noFrostFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxZamrzivaciPagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxZamrzivaciPagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxZamrzivaciPagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxZamrzivaciPagePOM.poCeniRastuceOption.should("be.visible");
    electroluxZamrzivaciPagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxZamrzivaciPagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxZamrzivaciPagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxZamrzivaciPagePOM.stanjeCheckbox.click({ force: true });
    electroluxZamrzivaciPagePOM.stanjeCheckbox.should("be.checked");
    electroluxZamrzivaciPagePOM.ponistiBtn.click();
    electroluxZamrzivaciPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const electroluxZamrzivaciPageBL = new ElectroluxZamrzivaciPageBL();
