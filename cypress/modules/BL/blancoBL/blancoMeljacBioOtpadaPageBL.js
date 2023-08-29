import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { blancoDropDownMenuPOM } from "../../POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { blancoMeljacBioOtpadaPOM } from "../../POM/blancoPOM/blancoMeljacBioOtpadaPagePOM";

class BlancoMeljacBioOtpadaBL {
  assertBlancoMeljacBioOtpadaPage() {
    headerAndFooterPOM.blancoDropDownMenu.trigger("mouseover");
    blancoDropDownMenuPOM.meljacBioOtpadaLink.click();
    blancoMeljacBioOtpadaPOM.title.should("be.visible");
    blancoMeljacBioOtpadaPOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo");
    blancoMeljacBioOtpadaPOM.sortirajDropDownMenu.should("be.visible");
    blancoMeljacBioOtpadaPOM.poNazivuA_Zoption.should("be.visible");
    blancoMeljacBioOtpadaPOM.poNazivuZ_Aoption.should("be.visible");
    blancoMeljacBioOtpadaPOM.poCeniRastuceOption.should("be.visible");
    blancoMeljacBioOtpadaPOM.poCeniOpadajućeOption.should("be.visible");
    blancoMeljacBioOtpadaPOM.poUnosuOpadajuceOption.should("be.visible");
    blancoMeljacBioOtpadaPOM.stanjeCheckbox.should("not.be.checked");
    blancoMeljacBioOtpadaPOM.stanjeCheckbox.click({ force: true });
    blancoMeljacBioOtpadaPOM.stanjeCheckbox.should("be.checked");
    blancoMeljacBioOtpadaPOM.ponistiBtn.click();
    blancoMeljacBioOtpadaPOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const blancoMeljacBioOtpadaBL = new BlancoMeljacBioOtpadaBL();
