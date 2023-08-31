import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxMkaPagePOM } from "../../POM/electroluxPOM/electroluxMkaPagePOM";

class ElectroluxMkaPageBL {
  assertElectroluxMkaPage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.mkaLink.click();
    electroluxMkaPagePOM.title.should("be.visible");
    electroluxMkaPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo");
    electroluxMkaPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxMkaPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxMkaPagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxMkaPagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxMkaPagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxMkaPagePOM.poCeniRastuceOption.should("be.visible");
    electroluxMkaPagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxMkaPagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxMkaPagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxMkaPagePOM.stanjeCheckbox.click({ force: true });
    electroluxMkaPagePOM.stanjeCheckbox.should("be.checked");
    electroluxMkaPagePOM.ponistiBtn.click();
    electroluxMkaPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const electroluxMkaPageBL = new ElectroluxMkaPageBL();
