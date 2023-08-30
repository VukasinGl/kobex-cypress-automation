class ElectroluxVesMasinePagePOM {
  get title() {
    return cy.get("h1").contains("ELECTROLUX - Veš mašine");
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
  get nacinPunjenjaFilter() {
    return cy.get("div[id='NAČIN PUNJENJA-list-1']");
  }
  get energetskiRazredFilter() {
    return cy.get("div[id='ENERGETSKI RAZRED-list-1']");
  }
  get slimFilter() {
    return cy.get("div[id='SLIM-list-1']");
  }
  get nacinSusenjaFilter() {
    return cy.get("div[id='NAČIN SUŠENJA-list-1']");
  }
  get kapacitetFilter() {
    return cy.get("div[id='KAPACITET-list-1']");
  }
  get inverterMotorFilter() {
    return cy.get("div[id='INVERTER MOTOR-list-1']");
  }
  get brojObrtajaFilter() {
    return cy.get("div[id='BROJ OBRTAJA-list-1']");
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
export const electroluxVesMasinePagePOM = new ElectroluxVesMasinePagePOM();
