import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxMikrotalasnaPagePOM } from "../../POM/electroluxPOM/electroluxMikrotalasnaPagePOM";

class ElectroluxMikrotalasnaPageBL {
  assertElectroluxZamrzivaciPage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.mikrotalasnaLink.click();
    electroluxMikrotalasnaPagePOM.title.should("be.visible");
    electroluxMikrotalasnaPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "UPRAVLJANJE")
      .and("contain", "GRILL GREJAČ")
      .and("contain", "Način ugradnje")
      .and("contain", "JAČINA")
      .and("contain", "ZAPREMINA");
    electroluxMikrotalasnaPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxMikrotalasnaPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxMikrotalasnaPagePOM.upravljanjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxMikrotalasnaPagePOM.grillGrejacFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxMikrotalasnaPagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxMikrotalasnaPagePOM.jacinaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxMikrotalasnaPagePOM.zapreminaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxMikrotalasnaPagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxMikrotalasnaPagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxMikrotalasnaPagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxMikrotalasnaPagePOM.poCeniRastuceOption.should("be.visible");
    electroluxMikrotalasnaPagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxMikrotalasnaPagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxMikrotalasnaPagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxMikrotalasnaPagePOM.stanjeCheckbox.click({ force: true });
    electroluxMikrotalasnaPagePOM.stanjeCheckbox.should("be.checked");
    electroluxMikrotalasnaPagePOM.ponistiBtn.click();
    electroluxMikrotalasnaPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const electroluxMikrotalasnaPageBL = new ElectroluxMikrotalasnaPageBL();
