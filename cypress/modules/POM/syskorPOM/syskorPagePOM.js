class SyskorPagePOM {
  get klizniSistemiImg() {
    return cy.get("a[href='/syskor/klizni-sistemi']").find("img");
  }
  get mkaImg() {
    return cy.get("a[href='/syskor/mka']").find("img");
  }
}
export const syskorPagePOM = new SyskorPagePOM();
