import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { syskorPagePOM } from "../../POM/syskorPOM/syskorPagePOM";

class SyskorPageBL {
  assertSyskorPage() {
    headerAndFooterPOM.syskorDropDownMenu.click();
    syskorPagePOM.klizniSistemiImg
      .should("be.visible")
      .and("have.attr", "alt", "Klizni sistemi");
    syskorPagePOM.mkaImg.should("be.visible").and("have.attr", "alt", "MKA");
  }
}
export const syskorPageBL = new SyskorPageBL();
