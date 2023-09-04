import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { syskorDropDownMenuPOM } from "../../POM/headerAndFooterPOM/syskorDropDownMenuPOM";
import { syskorKlizniSistemiPagePOM } from "../../POM/syskorPOM/syskorKlizniSistemiPagePOM";

class SyskorKlizniSistemiPageBL {
  assertSyskorKlizniSistemiPage() {
    headerAndFooterPOM.syskorDropDownMenu.trigger("mouseover");
    syskorDropDownMenuPOM.klizniSistemiLink.click();
    syskorKlizniSistemiPagePOM.title.should("be.visible");
    syskorKlizniSistemiPagePOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo");
    syskorKlizniSistemiPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    syskorKlizniSistemiPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    syskorKlizniSistemiPagePOM.sortirajDropDownMenu.should("be.visible");
    syskorKlizniSistemiPagePOM.poNazivuA_Zoption.should("be.visible");
    syskorKlizniSistemiPagePOM.poNazivuZ_Aoption.should("be.visible");
    syskorKlizniSistemiPagePOM.poCeniRastuceOption.should("be.visible");
    syskorKlizniSistemiPagePOM.poCeniOpadajućeOption.should("be.visible");
    syskorKlizniSistemiPagePOM.poUnosuOpadajuceOption.should("be.visible");
    syskorKlizniSistemiPagePOM.stanjeCheckbox.should("not.be.checked");
    syskorKlizniSistemiPagePOM.stanjeCheckbox.click({ force: true });
    syskorKlizniSistemiPagePOM.stanjeCheckbox.should("be.checked");
    syskorKlizniSistemiPagePOM.ponistiBtn.click();
    syskorKlizniSistemiPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const syskorKlizniSistemiPageBL = new SyskorKlizniSistemiPageBL();
