import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { tekaDropDownMenuPOM } from "../../POM/headerAndFooterPOM/tekaDropDownMenuPOM";
import { tekaFrizideriPagePOM } from "../../POM/tekaPOM/tekaFrizideriPagePOM";

class TekaFrizideriPageBL {
  assertTekaFrizideriPage() {
    headerAndFooterPOM.tekaDropDownMenu.trigger("mouseover");
    tekaDropDownMenuPOM.frizideriLink.click();
    tekaFrizideriPagePOM.title.should("be.visible");
    tekaFrizideriPagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "BOJA UREĐAJA")
      .and("contain", "VRSTA HLAĐENJA")
      .and("contain", "NAČIN UGRADNJE")
      .and("contain", "KOMORA")
      .and("contain", "KOMBINOVANI");
    tekaFrizideriPagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaFrizideriPagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaFrizideriPagePOM.bojaUredjajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaFrizideriPagePOM.vrstaHladjenjaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaFrizideriPagePOM.nacinUgradnjeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaFrizideriPagePOM.komoraFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaFrizideriPagePOM.kombinovaniFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    tekaFrizideriPagePOM.sortirajDropDownMenu.should("be.visible");
    tekaFrizideriPagePOM.poNazivuA_Zoption.should("be.visible");
    tekaFrizideriPagePOM.poNazivuZ_Aoption.should("be.visible");
    tekaFrizideriPagePOM.poCeniRastuceOption.should("be.visible");
    tekaFrizideriPagePOM.poCeniOpadajućeOption.should("be.visible");
    tekaFrizideriPagePOM.poUnosuOpadajuceOption.should("be.visible");
    tekaFrizideriPagePOM.stanjeCheckbox.should("not.be.checked");
    tekaFrizideriPagePOM.stanjeCheckbox.click({ force: true });
    tekaFrizideriPagePOM.stanjeCheckbox.should("be.checked");
    tekaFrizideriPagePOM.ponistiBtn.click();
    tekaFrizideriPagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const tekaFrizideriPageBL = new TekaFrizideriPageBL();
