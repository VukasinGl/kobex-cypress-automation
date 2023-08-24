class TekaPagePOM {
  get zamrzivaciImg() {
    return cy.get("a[href='/teka-/zamrzivaci']").find("img");
  }
  get mikrotalasnaImg() {
    return cy.get("a[href='/teka-/mikrotalasna']").find("img");
  }
  get kafeAparatiImg() {
    return cy.get("a[href='/teka-/kafe-aparati']").find("img");
  }
  get frizideriImg() {
    return cy.get("a[href='/teka-/frizideri']").find("img");
  }
  get aspiratoriImg() {
    return cy.get("a[href='/teka-/aspiratori']").find("img");
  }
  get sudomasineImg() {
    return cy.get("a[href='/teka-/sudomasine']").find("img");
  }
  get rerneImg() {
    return cy.get("a[href='/teka-/rerne']").find("img");
  }
  get ploceImg() {
    return cy.get("a[href='/teka-/ploce']").find("img");
  }
}
export const tekaPagePOM = new TekaPagePOM();
