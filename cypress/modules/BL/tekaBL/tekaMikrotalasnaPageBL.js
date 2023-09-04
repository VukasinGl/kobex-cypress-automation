import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { tekaDropDownMenuPOM } from "../../POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { tekaMikrotalasnaPagePOM } from "../../POM/tekaPOM/tekaMikrotalasnaPagePOM";

class TekaMikrotalasnaPageBL {
  assertTekaMikrotalasnaPage() {
    headerAndFooterPOM.tekaDropDownMenu.trigger("mouseover");
    tekaDropDownMenuPOM.mikrotalasnaLink.click();
    tekaMikrotalasnaPagePOM.title.should("be.visible");
    tekaMikrotalasnaPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "JAČINA")
      .and("contain", "ZAPREMINA")
      .and("contain", "UPRAVLJANJE")
      .and("contain", "NAČIN UGRADNJE")
      .and("contain", "GRILL GREJAČ");
    tekaMikrotalasnaPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaMikrotalasnaPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaMikrotalasnaPagePOM.jacinaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaMikrotalasnaPagePOM.zapreminaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaMikrotalasnaPagePOM.upravljanjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaMikrotalasnaPagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaMikrotalasnaPagePOM.grillGrejacFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaMikrotalasnaPagePOM.sortirajDropDownMenu.should("be.visible");
    tekaMikrotalasnaPagePOM.poNazivuA_Zoption.should("be.visible");
    tekaMikrotalasnaPagePOM.poNazivuZ_Aoption.should("be.visible");
    tekaMikrotalasnaPagePOM.poCeniRastuceOption.should("be.visible");
    tekaMikrotalasnaPagePOM.poCeniOpadajućeOption.should("be.visible");
    tekaMikrotalasnaPagePOM.poUnosuOpadajuceOption.should("be.visible");
    tekaMikrotalasnaPagePOM.stanjeCheckbox.should("not.be.checked");
    tekaMikrotalasnaPagePOM.stanjeCheckbox.click({ force: true });
    tekaMikrotalasnaPagePOM.stanjeCheckbox.should("be.checked");
    tekaMikrotalasnaPagePOM.ponistiBtn.click();
    tekaMikrotalasnaPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const tekaMikrotalasnaPageBL = new TekaMikrotalasnaPageBL();
