import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { tekaDropDownMenuPOM } from "../../POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { tekaZamrzivaciPagePOM } from "../../POM/tekaPOM/tekaZamrzivaciPagePOM";

class TekaZamrzivaciPageBL {
  assertTekaZamrzivaciPage() {
    headerAndFooterPOM.tekaDropDownMenu.trigger("mouseover");
    tekaDropDownMenuPOM.zamrzivaciLink.click();
    tekaZamrzivaciPagePOM.title.should("be.visible");
    tekaZamrzivaciPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "BOJA UREĐAJA")
      .and("contain", "NAČIN UGRADNJE")
      .and("contain", "VISINA")
      .and("contain", "ŠIRINA UREĐAJA")
      .and("contain", "NO FROST");
    tekaZamrzivaciPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaZamrzivaciPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaZamrzivaciPagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaZamrzivaciPagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaZamrzivaciPagePOM.visinaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaZamrzivaciPagePOM.sirinaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaZamrzivaciPagePOM.noFrostFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
  }
}
export const tekaZamrzivaciPageBL = new TekaZamrzivaciPageBL();
