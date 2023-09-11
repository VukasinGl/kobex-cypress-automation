import { assertElectroluxAspiratoriFiltersPOM } from "../../POM/electroluxPOM/assertElectroluxAspiratoriFiltersPOM";

class AssertElectroluxAspiratoriFiltersBL {
  assertTeleskopskiCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.teleskopskiCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.teleskopskiCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.teleskopskiCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "Teleskopski"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.teleskopskiCheckbox.should(
      "not.be.checked"
    );
  }
  assertUgradniCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.ugradniCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.ugradniCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.ugradniCheckbox.should("be.checked");
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "Ugradni"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.ugradniCheckbox.should(
      "not.be.checked"
    );
  }
  assertDekorativniCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.dekorativniCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.dekorativniCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.dekorativniCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "Dekorativni"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.dekorativniCheckbox.should(
      "not.be.checked"
    );
  }
  assertOstrvskiCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.ostrvskiCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.ostrvskiCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.ostrvskiCheckbox.should("be.checked");
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "Ostrvski"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.ostrvskiCheckbox.should(
      "not.be.checked"
    );
  }
  assertDaCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.daCheckbox.should("not.be.checked");
    assertElectroluxAspiratoriFiltersPOM.daCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.daCheckbox.should("be.checked");
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "Da"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.daCheckbox.should("not.be.checked");
  }
  assertElement60cmCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.element60cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.element60cmCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.element60cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "60cm"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.element60cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertElement90cmCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.element90cmCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.element90cmCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.element90cmCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "90cm"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.element90cmCheckbox.should(
      "not.be.checked"
    );
  }
  assertInoxCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.inoxCheckbox.should("not.be.checked");
    assertElectroluxAspiratoriFiltersPOM.inoxCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.inoxCheckbox.should("be.checked");
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "Inox"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.inoxCheckbox.should("not.be.checked");
  }
  assertCrnaCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.crnaCheckbox.should("not.be.checked");
    assertElectroluxAspiratoriFiltersPOM.crnaCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.crnaCheckbox.should("be.checked");
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "Crna"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.crnaCheckbox.should("not.be.checked");
  }
  assertTasteriCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.tasteriCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.tasteriCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.tasteriCheckbox.should("be.checked");
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "Tasteri"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.tasteriCheckbox.should(
      "not.be.checked"
    );
  }
  assertNaDodirCheckbox() {
    assertElectroluxAspiratoriFiltersPOM.naDodirCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.naDodirCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.naDodirCheckbox.should("be.checked");
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "Na dodir"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.naDodirCheckbox.should(
      "not.be.checked"
    );
  }
  assertJacina700m3h() {
    assertElectroluxAspiratoriFiltersPOM.jacina700m3hCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.jacina700m3hCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.jacina700m3hCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "700m3/h"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.jacina700m3hCheckbox.should(
      "not.be.checked"
    );
  }
  assertJacina620m3h() {
    assertElectroluxAspiratoriFiltersPOM.jacina620m3hCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.jacina620m3hCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.jacina620m3hCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "620m3/h"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.jacina620m3hCheckbox.should(
      "not.be.checked"
    );
  }
  assertJacina615m3h() {
    assertElectroluxAspiratoriFiltersPOM.jacina615m3hCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.jacina615m3hCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.jacina615m3hCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "615m3/h"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.jacina615m3hCheckbox.should(
      "not.be.checked"
    );
  }
  assertJacina650m3h() {
    assertElectroluxAspiratoriFiltersPOM.jacina650m3hCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.jacina650m3hCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.jacina650m3hCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "650m3/h"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.jacina650m3hCheckbox.should(
      "not.be.checked"
    );
  }
  assertJacina420m3h() {
    assertElectroluxAspiratoriFiltersPOM.jacina420m3hCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.jacina420m3hCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.jacina420m3hCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "420m3/h"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.jacina420m3hCheckbox.should(
      "not.be.checked"
    );
  }
  assertJacina330m3h() {
    assertElectroluxAspiratoriFiltersPOM.jacina330m3hCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.jacina330m3hCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.jacina330m3hCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "330m3/h"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.jacina330m3hCheckbox.should(
      "not.be.checked"
    );
  }
  assertJacina410m3h() {
    assertElectroluxAspiratoriFiltersPOM.jacina410m3hCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.jacina410m3hCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.jacina410m3hCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "410m3/h"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.jacina410m3hCheckbox.should(
      "not.be.checked"
    );
  }
  assertJacina600m3h() {
    assertElectroluxAspiratoriFiltersPOM.jacina600m3hCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.jacina600m3hCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.jacina600m3hCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "600m3/h"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.jacina600m3hCheckbox.should(
      "not.be.checked"
    );
  }
  assertJacina580m3h() {
    assertElectroluxAspiratoriFiltersPOM.jacina580m3hCheckbox.should(
      "not.be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.jacina580m3hCheckbox.check({
      force: true,
    });
    assertElectroluxAspiratoriFiltersPOM.jacina580m3hCheckbox.should(
      "be.checked"
    );
    assertElectroluxAspiratoriFiltersPOM.productCharacteristics.should(
      "contain",
      "580m3/h"
    );
    assertElectroluxAspiratoriFiltersPOM.ponistiBtn.click();
    assertElectroluxAspiratoriFiltersPOM.jacina580m3hCheckbox.should(
      "not.be.checked"
    );
  }
}
export const assertElectroluxAspiratoriFiltersBL =
  new AssertElectroluxAspiratoriFiltersBL();
