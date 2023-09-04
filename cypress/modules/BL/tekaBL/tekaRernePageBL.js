import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { tekaDropDownMenuPOM } from "../../POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { tekaRernePagePOM } from "../../POM/tekaPOM/tekaRernePagePOM";

class TekaRernePageBL {
  assertTekaRernePage() {
    headerAndFooterPOM.tekaDropDownMenu.trigger("mouseover");
    tekaDropDownMenuPOM.rerneLink.click();
    tekaRernePagePOM.title.should("be.visible");
    tekaRernePagePOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "BOJA UREĐAJA")
      .and("contain", "NAČIN ČIŠĆENJA")
      .and("contain", "ZAPREMINA")
      .and("contain", "UPRAVLJANJE")
      .and("contain", "VRSTA RERNE");
    tekaRernePagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaRernePagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaRernePagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaRernePagePOM.nacinCiscenjaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaRernePagePOM.zapreminaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaRernePagePOM.upravljanjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaRernePagePOM.vrstaRerneFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaRernePagePOM.sortirajDropDownMenu.should("be.visible");
    tekaRernePagePOM.poNazivuA_Zoption.should("be.visible");
    tekaRernePagePOM.poNazivuZ_Aoption.should("be.visible");
    tekaRernePagePOM.poCeniRastuceOption.should("be.visible");
    tekaRernePagePOM.poCeniOpadajućeOption.should("be.visible");
    tekaRernePagePOM.poUnosuOpadajuceOption.should("be.visible");
    tekaRernePagePOM.stanjeCheckbox.should("not.be.checked");
    tekaRernePagePOM.stanjeCheckbox.click({ force: true });
    tekaRernePagePOM.stanjeCheckbox.should("be.checked");
    tekaRernePagePOM.ponistiBtn.click();
    tekaRernePagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const tekaRernePageBL = new TekaRernePageBL();
