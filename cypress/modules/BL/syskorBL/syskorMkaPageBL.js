import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { syskorDropDownMenuPOM } from "../../POM/headerAndFooterPOM/syskorDropDownMenuPOM";
import { syskorMkaPagePOM } from "../../POM/syskorPOM/syskorMkaPagePOM";

class SyskorMkaPageBL {
  assertSyskorMkaPage() {
    headerAndFooterPOM.syskorDropDownMenu.trigger("mouseover");
    syskorDropDownMenuPOM.mkaLink.click();
    syskorMkaPagePOM.title.should("be.visible");
    syskorMkaPagePOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo");
    syskorMkaPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    syskorMkaPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    syskorMkaPagePOM.sortirajDropDownMenu.should("be.visible");
    syskorMkaPagePOM.poNazivuA_Zoption.should("be.visible");
    syskorMkaPagePOM.poNazivuZ_Aoption.should("be.visible");
    syskorMkaPagePOM.poCeniRastuceOption.should("be.visible");
    syskorMkaPagePOM.poCeniOpadajućeOption.should("be.visible");
    syskorMkaPagePOM.poUnosuOpadajuceOption.should("be.visible");
    syskorMkaPagePOM.stanjeCheckbox.should("not.be.checked");
    syskorMkaPagePOM.stanjeCheckbox.click({ force: true });
    syskorMkaPagePOM.stanjeCheckbox.should("be.checked");
    syskorMkaPagePOM.ponistiBtn.click();
    syskorMkaPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const syskorMkaPageBL = new SyskorMkaPageBL();
