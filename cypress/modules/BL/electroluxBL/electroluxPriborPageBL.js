import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxPriborPagePOM } from "../../POM/electroluxPOM/electroluxPriborPagePOM";

class ElectroluxPriborPageBL {
  assertElectroluxPriborPage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.electroluxPriborLink.click();
    electroluxPriborPagePOM.title.should("be.visible");
    electroluxPriborPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo");
    electroluxPriborPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxPriborPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxPriborPagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxPriborPagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxPriborPagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxPriborPagePOM.poCeniRastuceOption.should("be.visible");
    electroluxPriborPagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxPriborPagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxPriborPagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxPriborPagePOM.stanjeCheckbox.click({ force: true });
    electroluxPriborPagePOM.stanjeCheckbox.should("be.checked");
    electroluxPriborPagePOM.ponistiBtn.click();
    electroluxPriborPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const electroluxPriborPageBL = new ElectroluxPriborPageBL();
