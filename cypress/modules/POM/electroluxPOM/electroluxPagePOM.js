class ElectroluxPagePOM {
  get ploceImg() {
    return cy.get("a[href='/electrolux/ploce']").find("img");
  }
  get rerneImg() {
    return cy.get("a[href='/electrolux/rerne']").find("img");
  }
  get aspiratoriImg() {
    return cy.get("a[href='/electrolux/aspiratori']").find("img");
  }
  get sudomasineImg() {
    return cy.get("a[href='/electrolux/sudomasine']").find("img");
  }
  get frizideriImg() {
    return cy.get("a[href='/electrolux/frizideri']").find("img");
  }
  get zamrzivaciImg() {
    return cy.get("a[href='/electrolux/zamrzivaci']").find("img");
  }
  get mikrotalasnaImg() {
    return cy.get("a[href='/electrolux/mikrotalasna']").find("img");
  }
  get vesMasineImg() {
    return cy.get("a[href='/electrolux/ves-masine']").find("img");
  }
  get sporetiImg() {
    return cy.get("a[href='/electrolux/sporeti']").find("img");
  }
  get mkaImg() {
    return cy.get("a[href='/electrolux/mali-kucni-aparati']").find("img");
  }
  get electroluxPriborImg() {
    return cy.get("a[href='/electrolux/electrolux-pribor']").find("img");
  }
}
export const electroluxPagePOM = new ElectroluxPagePOM();
