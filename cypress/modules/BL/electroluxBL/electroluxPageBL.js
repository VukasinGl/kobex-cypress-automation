import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxPagePOM } from "../../POM/electroluxPOM/electroluxPagePOM";
class ElectroluxPageBL {
  assertElectroluxPage() {
    headerAndFooterPOM.electroluxDropDownMenu.click();
    electroluxPagePOM.ploceImg
      .should("be.visible")
      .and("have.attr", "alt", "Ploče");
    electroluxPagePOM.rerneImg
      .should("be.visible")
      .and("have.attr", "alt", "Rerne");
    electroluxPagePOM.aspiratoriImg
      .should("be.visible")
      .and("have.attr", "alt", "Aspiratori");
    electroluxPagePOM.sudomasineImg
      .should("be.visible")
      .and("have.attr", "alt", "Sudomašine");
    electroluxPagePOM.frizideriImg
      .should("be.visible")
      .and("have.attr", "alt", "Frižideri");
    electroluxPagePOM.zamrzivaciImg
      .should("be.visible")
      .and("have.attr", "alt", "Zamrzivači");
    electroluxPagePOM.mikrotalasnaImg
      .should("be.visible")
      .and("have.attr", "alt", "Mikrotalasna");
    electroluxPagePOM.vesMasineImg
      .should("be.visible")
      .and("have.attr", "alt", "Veš mašine");
    electroluxPagePOM.sporetiImg
      .should("be.visible")
      .and("have.attr", "alt", "Šporeti");
    electroluxPagePOM.mkaImg
      .should("be.visible")
      .and("have.attr", "alt", "MKA");
    electroluxPagePOM.electroluxPriborImg
      .should("be.visible")
      .and("have.attr", "alt", "ELECTROLUX Pribor");
  }
}
export const electroluxPageBL = new ElectroluxPageBL();
