import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { blancoDropDownMenuPOM } from "../../POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { blancoDozerPOM } from "../../POM/blancoPOM/blancoDozerPagePOM";

class BlancoDozerBL {
  assertBlancoDozerPage() {
    headerAndFooterPOM.blancoDropDownMenu.trigger("mouseover");
    blancoDropDownMenuPOM.dozerLink.click();
    blancoDozerPOM.title.should("be.visible");
    blancoDozerPOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "SILGRANIT-LOOK")
      .and("contain", "MATERIJAL")
      .and("contain", "METALIK POVRŠINA");
    blancoDozerPOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDozerPOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDozerPOM.silgranitLookFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDozerPOM.materijalFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDozerPOM.metalikPovrsinaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDozerPOM.sortirajDropDownMenu.should("be.visible");
    blancoDozerPOM.poNazivuA_Zoption.should("be.visible");
    blancoDozerPOM.poNazivuZ_Aoption.should("be.visible");
    blancoDozerPOM.poCeniRastuceOption.should("be.visible");
    blancoDozerPOM.poCeniOpadajućeOption.should("be.visible");
    blancoDozerPOM.poUnosuOpadajuceOption.should("be.visible");
    blancoDozerPOM.stanjeCheckbox.should("not.be.checked");
    blancoDozerPOM.stanjeCheckbox.click({ force: true });
    blancoDozerPOM.stanjeCheckbox.should("be.checked");
    blancoDozerPOM.ponistiBtn.click();
    blancoDozerPOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const blancoDozerBL = new BlancoDozerBL();
