class BlancoDrinkFilterPOM {
  get title() {
    return cy.get("h1").contains("BLANCO - drink.filter");
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
  get silgranitLookFilter() {
    return cy.get("div[id='SILGRANIT-LOOK-list-1']");
  }
  get tusFilter() {
    return cy.get("div[id='TUŠ-list-1']");
  }
  get materijalFilter() {
    return cy.get("div[id='MATERIJAL-list-1']");
  }
  get bojaSilgranitLookFilter() {
    return cy.get("div[id='BOJA SILGRANIT LOOK-list-1']");
  }
  get metalikPovrsinaFilter() {
    return cy.get("div[id='METALIK POVRŠINA-list-1']");
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
export const blancoDrinkFilterPOM = new BlancoDrinkFilterPOM();
