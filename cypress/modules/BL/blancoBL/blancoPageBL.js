import { blancoPagePOM } from "../../POM/blancoPOM/blancoPagePOM";
import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";

class BlancoPageBL {
  assertBlancoPage() {
    headerAndFooterPOM.blancoDropDownMenu.click();
    blancoPagePOM.sudopereImg
      .should("be.visible")
      .and("have.attr", "alt", "Sudopere");
    blancoPagePOM.slavinaImg
      .should("be.visible")
      .and("have.attr", "alt", "Slavina");
    blancoPagePOM.sistemiZaRazdvajanjeOtpadaImg
      .should("be.visible")
      .and("have.attr", "alt", "Sistem za razdvajanje otpada");
    blancoPagePOM.dozerImg
      .should("be.visible")
      .and("have.attr", "alt", "Dozer");
    blancoPagePOM.blancoPriborImg
      .should("be.visible")
      .and("have.attr", "alt", "BLANCO Pribor");
    blancoPagePOM.meljacBioOtpadaImg
      .should("be.visible")
      .and("have.attr", "alt", "Meljač BIO otpada");
    blancoPagePOM.drinkFilterImg
      .should("be.visible")
      .and("have.attr", "alt", "drink.filter");
  }
}
export const blancoPageBL = new BlancoPageBL();
