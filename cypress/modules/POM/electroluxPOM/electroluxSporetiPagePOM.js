class ElectroluxSporetiPagePOM {
  get title() {
    return cy.get("h1").contains("ELECTROLUX - Šporeti");
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
  get vrstaPločeFilter() {
    return cy.get("div[id='VRSTA PLOČE-list-1']");
  }
  get nacinCiscenjaFilter() {
    return cy.get("div[id='NAČIN ČIŠĆENJA-list-1']");
  }
  get bojaUredjajaFilter() {
    return cy.get("div[id='BOJA UREĐAJA-list-1']");
  }
  get sirinaUredjajaFilter() {
    return cy.get("div[id='ŠIRINA UREĐAJA-list-1']");
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
export const electroluxSporetiPagePOM = new ElectroluxSporetiPagePOM();
