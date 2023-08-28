import { blancoSlavinaPagePOM } from "../../POM/blancoPOM/blancoSlavinaPagePOM";
import { blancoDropDownMenuPOM } from "../../POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";

class BlancoSlavinaPageBL {
  assertBlancoSlavinaPage() {
    headerAndFooterPOM.blancoDropDownMenu.trigger("mouseover");
    blancoDropDownMenuPOM.slavinaLink.click();
    blancoSlavinaPagePOM.title.should("be.visible");
    blancoSlavinaPagePOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "TUŠ")
      .and("contain", "MATERIJAL")
      .and("contain", "BOJA SILGRANIT LOOK")
      .and("contain", "METALIK POVRŠINA");
    blancoSlavinaPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSlavinaPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSlavinaPagePOM.tusFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSlavinaPagePOM.materijalFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSlavinaPagePOM.bojaSilgranitLookFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSlavinaPagePOM.metalikPovrsinaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSlavinaPagePOM.sortirajDropDownMenu.should("be.visible");
    blancoSlavinaPagePOM.poNazivuA_Zoption.should("be.visible");
    blancoSlavinaPagePOM.poNazivuZ_Aoption.should("be.visible");
    blancoSlavinaPagePOM.poCeniRastuceOption.should("be.visible");
    blancoSlavinaPagePOM.poCeniOpadajućeOption.should("be.visible");
    blancoSlavinaPagePOM.poUnosuOpadajuceOption.should("be.visible");
    blancoSlavinaPagePOM.stanjeCheckbox.should("not.be.checked");
    blancoSlavinaPagePOM.stanjeCheckbox.click({ force: true });
    blancoSlavinaPagePOM.stanjeCheckbox.should("be.checked");
    blancoSlavinaPagePOM.ponistiBtn.click();
    blancoSlavinaPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const blancoSlavinaPageBL = new BlancoSlavinaPageBL();
