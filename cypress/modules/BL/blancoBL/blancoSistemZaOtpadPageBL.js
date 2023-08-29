import { headerAndFooterPOM } from "../../POM/headerAndFooterPOM/headerAndFooterPOM";
import { blancoDropDownMenuPOM } from "../../POM/headerAndFooterPOM/blancoDropDownMenuPOM";
import { blancoSistemZaOtpadPOM } from "../../POM/blancoPOM/blancoSistemZaOtpadPagePOM";

class BlancoSistemZaOtpadBL {
  assertBlancoSistemZaOtpadPage() {
    headerAndFooterPOM.blancoDropDownMenu.trigger("mouseover");
    blancoDropDownMenuPOM.sistemiZaRazdvajanjeOtpadaLink.click();
    blancoSistemZaOtpadPOM.title.should("be.visible");
    blancoSistemZaOtpadPOM.filteri
      .should("be.visible")
      .and("contain", "Artikli na stanju")
      .and("contain", "Izdvajamo")
      .and("contain", "VARIJACIJE")
      .and("contain", "ELEMENT");
    blancoSistemZaOtpadPOM.artikliNaStanjuFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSistemZaOtpadPOM.izdvajamoFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSistemZaOtpadPOM.varijacijeFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSistemZaOtpadPOM.elementFilter
      .should("have.descendants", "input[type='checkbox']")
      .and("be.visible");
    blancoSistemZaOtpadPOM.sortirajDropDownMenu.should("be.visible");
    blancoSistemZaOtpadPOM.poNazivuA_Zoption.should("be.visible");
    blancoSistemZaOtpadPOM.poNazivuZ_Aoption.should("be.visible");
    blancoSistemZaOtpadPOM.poCeniRastuceOption.should("be.visible");
    blancoSistemZaOtpadPOM.poCeniOpadajućeOption.should("be.visible");
    blancoSistemZaOtpadPOM.poUnosuOpadajuceOption.should("be.visible");
    blancoSistemZaOtpadPOM.stanjeCheckbox.should("not.be.checked");
    blancoSistemZaOtpadPOM.stanjeCheckbox.click({ force: true });
    blancoSistemZaOtpadPOM.stanjeCheckbox.should("be.checked");
    blancoSistemZaOtpadPOM.ponistiBtn.click();
    blancoSistemZaOtpadPOM.stanjeCheckbox.should("not.be.checked");
  }
}
export const blancoSistemZaOtpadBL = new BlancoSistemZaOtpadBL();
