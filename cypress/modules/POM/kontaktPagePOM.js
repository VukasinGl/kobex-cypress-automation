import { googleMapKobex } from "../../fixtures/testData";
class KontaktPagePOM {
  get title() {
    return cy.get("h1");
  }
  get imeInputField() {
    return cy.get("#name");
  }
  get emailInputField() {
    return cy.get("#email");
  }
  get porukaInputField() {
    return cy.get("#message");
  }
  get posaljiBtn() {
    return cy.contains("Pošalji");
  }
  get kobexEmailLink() {
    return cy.get("a[href='mailto:web@kobex.rs']").first();
  }
  get phoneNum1Link() {
    return cy.get("a[href='tel:0216216959']").first();
  }
  get phoneNum2Link() {
    return cy.get("a[href='tel:0216216955']").first();
  }
  get maloprodajaBgd1Map() {
    return cy.get(
      `iframe[src='${googleMapKobex} doo,Višegradska 3,Beograd&t=&z=17&ie=UTF8&iwloc=&output=embed']`
    );
  }
  get maloprodajaBgd2Map() {
    return cy.get(
      `iframe[src='${googleMapKobex} doo,Koče Kapetana 30,Beograd&t=&z=17&ie=UTF8&iwloc=&output=embed']`
    );
  }
  get maloprodajaNsMap() {
    return cy.get(
      `iframe[src='${googleMapKobex} doo,Hadži Ruvimova 49,Novi Sad&t=&z=17&ie=UTF8&iwloc=&output=embed']`
    );
  }
  get blancoBrandStoreMap() {
    return cy.get(
      `iframe[src='${googleMapKobex} doo,Fruškogorska 37,Novi Sad&t=&z=17&ie=UTF8&iwloc=&output=embed']`
    );
  }
  get rumenkaMap() {
    return cy.get(
      `iframe[src='${googleMapKobex},Arsenija Čarnojevića 5,Rumenka&t=&z=17&ie=UTF8&iwloc=&output=embed']`
    );
  }
  get proveriRadnoVremeLink() {
    return cy.get(
      "a[href='https://kobex-my.sharepoint.com/:b:/g/personal/boris_vukicevic_kobex_rs/EZ61yZF0KJVIvBeGn6-xFVgBgKlOpb0Oc5JdZshFXtgdCA?e=gCbl0z']"
    );
  }
  get kobexPiB() {
    return cy.contains("100735716");
  }
  get ulicaIBroj() {
    return cy.get("div").contains("Arsenija Čarnojevića 5 21201 Rumenka");
  }
  get popunitePoljeMsg() {
    return cy.get("li").contains("Popunite polje");
  }
  get emailNijeUDobromFormatuMsg() {
    return cy.get("li").contains("Greška, email nije u dobrom formatu");
  }
  get popunitePoljeMsg() {
    return cy.get("li").contains("Popunite polje");
  }
}
export const kontaktPagePOM = new KontaktPagePOM();
