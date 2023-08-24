import { tekaPagePOM } from "../../POM/tekaPOM/tekaPagePOM";
import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
class TekaPageBL {
  assertTekaPage() {
    headerAndFooterPOM.tekaDropDownMenu.click();
    tekaPagePOM.zamrzivaciImg
      .should("be.visible")
      .and("have.attr", "alt", "Zamrzivači");
    tekaPagePOM.mikrotalasnaImg
      .should("be.visible")
      .and("have.attr", "alt", "Mikrotalasna");
    tekaPagePOM.kafeAparatiImg
      .should("be.visible")
      .and("have.attr", "alt", "Kafe aparati");
    tekaPagePOM.frizideriImg
      .should("be.visible")
      .and("have.attr", "alt", "Frižideri");
    tekaPagePOM.aspiratoriImg
      .should("be.visible")
      .and("have.attr", "alt", "Aspiratori");
    tekaPagePOM.sudomasineImg
      .should("be.visible")
      .and("have.attr", "alt", "Sudomašine");
    tekaPagePOM.rerneImg.should("be.visible").and("have.attr", "alt", "Rerne");
    tekaPagePOM.ploceImg.should("be.visible").and("have.attr", "alt", "Ploče");
  }
}
export const tekaPageBL = new TekaPageBL();
