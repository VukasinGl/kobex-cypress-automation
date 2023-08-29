import { blancoDropDownMenuPOM } from "../../POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { blancoDrinkFilterPOM } from "../../POM/blancoPOM/blancoDrinkFilterPagePOM";
import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";

class BlancoDrinkFilterBL {
  assertBlancoDrinkFilterPage() {
    headerAndFooterPOM.blancoDropDownMenu.trigger("mouseover");
    blancoDropDownMenuPOM.drinkFilterLink.click();
    blancoDrinkFilterPOM.title.should("be.visible");
    blancoDrinkFilterPOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "TUŠ")
      .and("contain", "MATERIJAL")
      .and("contain", "BOJA SILGRANIT LOOK")
      .and("contain", "SILGRANIT-LOOK")
      .and("contain", "METALIK POVRŠINA");
    blancoDrinkFilterPOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDrinkFilterPOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDrinkFilterPOM.tusFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDrinkFilterPOM.materijalFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDrinkFilterPOM.bojaSilgranitLookFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDrinkFilterPOM.metalikPovrsinaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDrinkFilterPOM.silgranitLookFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoDrinkFilterPOM.sortirajDropDownMenu.should("be.visible");
    blancoDrinkFilterPOM.poNazivuA_Zoption.should("be.visible");
    blancoDrinkFilterPOM.poNazivuZ_Aoption.should("be.visible");
    blancoDrinkFilterPOM.poCeniRastuceOption.should("be.visible");
    blancoDrinkFilterPOM.poCeniOpadajućeOption.should("be.visible");
    blancoDrinkFilterPOM.poUnosuOpadajuceOption.should("be.visible");
    blancoDrinkFilterPOM.stanjeCheckbox.should("not.be.checked");
    blancoDrinkFilterPOM.stanjeCheckbox.click({ force: true });
    blancoDrinkFilterPOM.stanjeCheckbox.should("be.checked");
    blancoDrinkFilterPOM.ponistiBtn.click();
    blancoDrinkFilterPOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const blancoDrinkFilterBL = new BlancoDrinkFilterBL();
