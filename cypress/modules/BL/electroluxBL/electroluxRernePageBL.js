import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxRernePagePOM } from "../../POM/electroluxPOM/electroluxRernePagePOM";

class ElectroluxRernePageBL {
  assertElectroluxRernePage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.rerneLink.click();
    electroluxRernePagePOM.title.should("be.visible");
    electroluxRernePagePOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "Način ugradnje")
      .and("contain", "NAČIN ČIŠĆENJA")
      .and("contain", "ZAPREMINA")
      .and("contain", "BOJA UREĐAJA")
      .and("contain", "UPRAVLJANJE")
      .and("contain", "VRSTA RERNE");
    electroluxRernePagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxRernePagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxRernePagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxRernePagePOM.nacinCiscenjaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxRernePagePOM.zapreminaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxRernePagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxRernePagePOM.upravljanjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxRernePagePOM.vrstaRerneFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxRernePagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxRernePagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxRernePagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxRernePagePOM.poCeniRastuceOption.should("be.visible");
    electroluxRernePagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxRernePagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxRernePagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxRernePagePOM.stanjeCheckbox.click({ force: true });
    electroluxRernePagePOM.stanjeCheckbox.should("be.checked");
    electroluxRernePagePOM.ponistiBtn.click();
    electroluxRernePagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const electroluxRernePageBL = new ElectroluxRernePageBL();
