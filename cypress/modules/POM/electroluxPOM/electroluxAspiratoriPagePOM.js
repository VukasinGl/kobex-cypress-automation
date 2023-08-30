class ElectroluxAspiratoriPagePOM {
  get title() {
    return cy.get("h1").contains("ELECTROLUX - Aspiratori");
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
  get nacinUgradnjeFilter() {
    return cy.get("div[id='Način ugradnje-list-1']");
  }
  get hob2hoodFilter() {
    return cy.get("div[id='HOB2HOOD-list-1']");
  }
  get elementFilter() {
    return cy.get("div[id='ELEMENT-list-1']");
  }
  get bojaUredjajaFilter() {
    return cy.get("div[id='BOJA UREĐAJA-list-1']");
  }
  get upravljanjeFilter() {
    return cy.get("div[id='UPRAVLJANJE-list-1']");
  }
  get maksimalnaJacinaFilter() {
    return cy.get("div[id='MAKSIMALNA JAČINA-list-1']");
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
export const electroluxAspiratoriPagePOM = new ElectroluxAspiratoriPagePOM();
