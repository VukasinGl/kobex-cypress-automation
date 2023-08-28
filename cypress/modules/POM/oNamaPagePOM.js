import { headerAndFooterPOM } from "./headerAndFooterPOM/headerAndFooterPOM";
import { oNamaPageData } from "../../fixtures/testData";

class ONamaPagePOM {
  get oNamaTitle() {
    return cy.get("h1").eq(1);
  }
  get oNamaText() {
    return cy.get("p");
  }
  assertONamaPage() {
    headerAndFooterPOM.oNamaBtn.click();
    this.oNamaTitle.should("be.visible").and("have.text", oNamaPageData.title);
    this.oNamaText
      .should("be.visible")
      .and(
        "contain",
        oNamaPageData.p1,
        oNamaPageData.p2,
        oNamaPageData.p3,
        oNamaPageData.p4
      );
  }
}
export const oNamaPagePOM = new ONamaPagePOM();
