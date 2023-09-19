import { headerAndFooterPOM } from "../POM/headerAndFooterPOM/headerAndFooterPOM";
import { kontaktPagePOM } from "../POM/kontaktPagePOM";

class KontaktPageBL {
  assertKontaktPage() {
    headerAndFooterPOM.kontaktBtn.click();
    kontaktPagePOM.title
      .should("be.visible")
      .and("contain", "Kontaktirajte nas");
    kontaktPagePOM.emailInputField.should("be.visible");
    kontaktPagePOM.emailInputField.should("be.visible");
    kontaktPagePOM.porukaInputField.should("be.visible");
    kontaktPagePOM.posaljiBtn.should("have.class", "disabled");
    kontaktPagePOM.kobexEmailLink
      .should("be.visible")
      .and("contain", "web@kobex.rs");
    kontaktPagePOM.phoneNum1Link
      .should("be.visible")
      .and("contain", "021 6216959");
    kontaktPagePOM.phoneNum2Link
      .should("be.visible")
      .and("contain", "021 6216955");
    kontaktPagePOM.maloprodajaBgd1Map.should("be.visible");
    kontaktPagePOM.maloprodajaBgd2Map.should("be.visible");
    kontaktPagePOM.maloprodajaNsMap.should("be.visible");
    kontaktPagePOM.blancoBrandStoreMap.should("be.visible");
    kontaktPagePOM.rumenkaMap.should("be.visible");
    kontaktPagePOM.proveriRadnoVremeLink
      .should("be.visible")
      .and("contain", "proveri");
    kontaktPagePOM.kobexPiB.should("be.visible");
    kontaktPagePOM.popunitePoljeMsg.should("not.exist");
    kontaktPagePOM.emailNijeUDobromFormatuMsg.should("not.exist");
    kontaktPagePOM.posaljiBtn.click();
    kontaktPagePOM.popunitePoljeMsg.should("be.visible");
    kontaktPagePOM.emailNijeUDobromFormatuMsg.should("be.visible");
  }
}
export const kontaktPageBL = new KontaktPageBL();
