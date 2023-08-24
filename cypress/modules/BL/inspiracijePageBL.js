import { headerAndFooterPOM } from "../POM/headerAndFooterPOM/headerAndFooterPOM";
import { inspiracijePagePOM } from "../POM/inspiracijePagePOM";
class InspiracijePageBL {
  assertInspiracijePage() {
    headerAndFooterPOM.inspiracijeBtn.click();
    inspiracijePagePOM.title.should("be.visible").and("contain", "Inspiracije");
    inspiracijePagePOM.postsImg.should("be.visible").then((post) => {
      if ((post.length = 8)) {
        inspiracijePagePOM.nextPageBtn.click();
        inspiracijePagePOM.postsImg
          .should("be.visible")
          .and("have.attr", "src");
        inspiracijePagePOM.title
          .should("be.visible")
          .and("contain", "Inspiracije");
      }
    });
  }
}
export const inspiracijePageBL = new InspiracijePageBL();
