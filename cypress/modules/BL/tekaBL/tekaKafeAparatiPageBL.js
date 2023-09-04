import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { tekaDropDownMenuPOM } from "../../POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { tekaKafeAparatiPagePOM } from "../../POM/tekaPOM/tekaKafeAparatiPagePOM";

class TekaKafeAparatiPageBL {
  assertTekaKafeAparatiPage() {
    headerAndFooterPOM.tekaDropDownMenu.trigger("mouseover");
    tekaDropDownMenuPOM.kafeAparatiLink.click();
    tekaKafeAparatiPagePOM.title.should("be.visible");
    tekaKafeAparatiPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo");
    tekaKafeAparatiPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaKafeAparatiPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaKafeAparatiPagePOM.sortirajDropDownMenu.should("be.visible");
    tekaKafeAparatiPagePOM.poNazivuA_Zoption.should("be.visible");
    tekaKafeAparatiPagePOM.poNazivuZ_Aoption.should("be.visible");
    tekaKafeAparatiPagePOM.poCeniRastuceOption.should("be.visible");
    tekaKafeAparatiPagePOM.poCeniOpadajućeOption.should("be.visible");
    tekaKafeAparatiPagePOM.poUnosuOpadajuceOption.should("be.visible");
    tekaKafeAparatiPagePOM.stanjeCheckbox.should("not.be.checked");
    tekaKafeAparatiPagePOM.stanjeCheckbox.click({ force: true });
    tekaKafeAparatiPagePOM.stanjeCheckbox.should("be.checked");
    tekaKafeAparatiPagePOM.ponistiBtn.click();
    tekaKafeAparatiPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const tekaKafeAparatiPageBL = new TekaKafeAparatiPageBL();
