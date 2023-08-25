class BlancoSudoperePagePOM {
  get title() {
    return cy.get("h1").contains("BLANCO - Sudopere");
  }
  get artikliNaStanjuFilter() {
    return cy.get("#stanje_div");
  }
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoFilter() {
    return cy.get("#izdvojeni_div");
  }
  get metodUgradnjeFilter() {
    return cy.get("div[id='METOD UGRADNJE-list-1']");
  }
  get materijalFilter() {
    return cy.get("div[id='MATERIJAL-list-1']");
  }
  get elementFilter() {
    return cy.get("div[id='ELEMENT-list-1']");
  }
  get brojKoritaFilter() {
    return cy.get("div[id='BROJ KORITA-list-1']");
  }
  get dubinaKoritaFilter() {
    return cy.get("div[id='DUBINA KORITA-list-1']");
  }
  get bojaSilgranitaFilter() {
    return cy.get("div[id='BOJA SILGRANITA-list-1']");
  }
  get bojaKeramikeFilter() {
    return cy.get("div[id='BOJA KERAMIKE-list-1']");
  }
  get nacinUgradnjeFilter() {
    return cy.get("div[id='NAČIN UGRADNJE-list-1']");
  }
  get podizacCepaFilter() {
    return cy.get("div[id='PODIZAČ ČEPA-list-1']");
  }
  get sortirajDropDownMenu() {
    return cy.get("#view-option-sort");
  }
  get poNazivuA_Zoption() {
    return cy.get("select").select("Po nazivu A-Z");
  }
  get poNazivuZ_Aoption() {
    return cy.contains("Po nazivu Z-A");
  }
  get poCeniRastuceOption() {
    return cy.contains("Po ceni rastuće");
  }
  get poCeniOpadajućeOption() {
    return cy.contains("Po ceni opadajuće");
  }
  get poUnosuOpadajuceOption() {
    return cy.contains("Po unosu opadajuće");
  }
  get ponistiBtn() {
    return cy.contains("Poništi");
  }
  get filteri() {
    return cy.get("form[id='filteri']");
  }
}
export const blancoSudoperePagePOM = new BlancoSudoperePagePOM();
