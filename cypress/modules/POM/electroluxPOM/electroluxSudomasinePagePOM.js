class ElectroluxSudomasinePagePOM {
  get title() {
    return cy.get("h1").contains("ELECTROLUX - Sudomašine");
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
  get sirinaUredjajaFilter() {
    return cy.get("div[id='ŠIRINA UREĐAJA-list-1']");
  }
  get jacinaZvukaFilter() {
    return cy.get("div[id='JAČINA ZVUKA-list-1']");
  }
  get indikatorRadaFilter() {
    return cy.get("div[id='INDIKATOR RADA-list-1']");
  }
  get brojKorpiFilter() {
    return cy.get("div[id='BROJ KORPI-list-1']");
  }
  get nacinUgradnjeFilter() {
    return cy.get("div[id='Način ugradnje-list-1']");
  }
  get kapacitetPunjenja() {
    return cy.get("div[id='KAPACITET PUNJENJA-list-1']");
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
export const electroluxSudomasinePagePOM = new ElectroluxSudomasinePagePOM();
