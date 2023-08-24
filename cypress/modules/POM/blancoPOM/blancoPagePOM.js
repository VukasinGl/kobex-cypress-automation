class BlancoPagePOM {
  get sudopereImg() {
    return cy.get("a[href='/blanco/sudopere']").find("img");
  }
  get slavinaImg() {
    return cy.get("a[href='/blanco/slavina']").find("img");
  }
  get sistemiZaRazdvajanjeOtpadaImg() {
    return cy.get("a[href='/blanco/sistem-za-razdvajanje-otpada']").find("img");
  }
  get dozerImg() {
    return cy.get("a[href='/blanco/dozer']").find("img");
  }
  get blancoPriborImg() {
    return cy.get("a[href='/blanco/blanco-pribor']").find("img");
  }
  get meljacBioOtpadaImg() {
    return cy.get("a[href='/blanco/meljac-bio-otpada']").find("img");
  }
  get drinkFilterImg() {
    return cy.get("a[href='/blanco/drink.filter']").find("img");
  }
}
export const blancoPagePOM = new BlancoPagePOM();
