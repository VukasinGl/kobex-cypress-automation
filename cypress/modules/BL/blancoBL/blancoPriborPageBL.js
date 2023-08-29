import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { blancoDropDownMenuPOM } from "../../POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { blancoPriborPOM } from "../../POM/blancoPOM/blancoPriborPagePOM";

class BlancoPriborBL {
  assertBlancoPriborPage() {
    headerAndFooterPOM.blancoDropDownMenu.trigger("mouseover");
    blancoDropDownMenuPOM.blancoPriborLink.click();
    blancoPriborPOM.title.should("be.visible");
    blancoPriborPOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo");
    blancoPriborPOM.sortirajDropDownMenu.should("be.visible");
    blancoPriborPOM.poNazivuA_Zoption.should("be.visible");
    blancoPriborPOM.poNazivuZ_Aoption.should("be.visible");
    blancoPriborPOM.poCeniRastuceOption.should("be.visible");
    blancoPriborPOM.poCeniOpadajućeOption.should("be.visible");
    blancoPriborPOM.poUnosuOpadajuceOption.should("be.visible");
    blancoPriborPOM.stanjeCheckbox.should("not.be.checked");
    blancoPriborPOM.stanjeCheckbox.click({ force: true });
    blancoPriborPOM.stanjeCheckbox.should("be.checked");
    blancoPriborPOM.ponistiBtn.click();
    blancoPriborPOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const blancoPriborBL = new BlancoPriborBL();
