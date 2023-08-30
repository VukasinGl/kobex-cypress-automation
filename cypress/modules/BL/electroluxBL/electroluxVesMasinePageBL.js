import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { electroluxDropDownMenuPOM } from "../../POM/headerAndFooterPOM/electroluxDropDownMenuPOM";
import { electroluxVesMasinePagePOM } from "../../POM/electroluxPOM/electroluxVesMasinePagePOM";

class ElectroluxVesMasinePageBL {
  assertElectroluxVesMasinePage() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    electroluxDropDownMenuPOM.vesMasineLink.click();
    electroluxVesMasinePagePOM.title.should("be.visible");
    electroluxVesMasinePagePOM.filteri
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "NAČIN PUNJENJA")
      .and("contain", "ENERGETSKI RAZRED")
      .and("contain", "SLIM")
      .and("contain", "NAČIN SUŠENJA")
      .and("contain", "KAPACITET")
      .and("contain", "INVERTER MOTOR")
      .and("contain", "BROJ OBRTAJA");
    electroluxVesMasinePagePOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxVesMasinePagePOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxVesMasinePagePOM.nacinPunjenjaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxVesMasinePagePOM.energetskiRazredFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxVesMasinePagePOM.slimFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxVesMasinePagePOM.nacinPunjenjaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxVesMasinePagePOM.kapacitetFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxVesMasinePagePOM.inverterMotorFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxVesMasinePagePOM.brojObrtajaFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    electroluxVesMasinePagePOM.sortirajDropDownMenu.should("be.visible");
    electroluxVesMasinePagePOM.poNazivuA_Zoption.should("be.visible");
    electroluxVesMasinePagePOM.poNazivuZ_Aoption.should("be.visible");
    electroluxVesMasinePagePOM.poCeniRastuceOption.should("be.visible");
    electroluxVesMasinePagePOM.poCeniOpadajućeOption.should("be.visible");
    electroluxVesMasinePagePOM.poUnosuOpadajuceOption.should("be.visible");
    electroluxVesMasinePagePOM.stanjeCheckbox.should("not.be.checked");
    electroluxVesMasinePagePOM.stanjeCheckbox.click({ force: true });
    electroluxVesMasinePagePOM.stanjeCheckbox.should("be.checked");
    electroluxVesMasinePagePOM.ponistiBtn.click();
    electroluxVesMasinePagePOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const electroluxVesMasinePageBL = new ElectroluxVesMasinePageBL();
