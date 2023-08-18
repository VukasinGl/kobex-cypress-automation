import { homePagePOM } from "../POM/homePagePOM/homePagePOM";

class HomePageBL {
  scrollLogosOnHomePage() {
    let arrayOfLogos = [
      homePagePOM.elextroluxLogo,
      homePagePOM.syskorLogo,
      homePagePOM.tekaLogo,
      homePagePOM.ritterLogo,
      homePagePOM.blancoLogo,
    ];
    for (let logos of arrayOfLogos) {
      homePagePOM.nextArrow.click();
      logos.should("be.visible");
    }
  }
  scrollBackgroundImgs() {
    let arrayOfBackgroundImgs = [
      homePagePOM.blancoUnitBackgroundImg,
      homePagePOM.blancoEtagonBackgroundImg,
      homePagePOM.silgranitBackgroundImg,
      homePagePOM.zaVelikeiMaleBackgroundImg,
      homePagePOM.blancoUnit2BackgroundImg,
    ];
    for (let imgs of arrayOfBackgroundImgs) {
      homePagePOM.sledeciBtn.click();
      imgs.should("be.visible");
    }
  }

  assertHomePageElements() {
    homePagePOM.saznajViseBtn
      .should("be.visible")
      .and("have.text", "Saznaj više");
    this.scrollBackgroundImgs();
    homePagePOM.sledeciBtn.should("exist");
    homePagePOM.prethodniBtn.should("exist");
    homePagePOM.slider.should("be.visible");
    homePagePOM.blancoPageLink.find("img").should("be.visible");
    homePagePOM.tekaPageLink.find("img").should("be.visible");
    homePagePOM.electroluxPageLink.find("img").should("be.visible");
    homePagePOM.syskorPageLink.find("img").should("be.visible");
    homePagePOM.nextArrow.should("be.visible");
    homePagePOM.previousArrow.should("be.visible");
    this.scrollLogosOnHomePage();
    homePagePOM.izdvajamoSection
      .should("have.text", "Izdvajamo")
      .and("be.visible");
    homePagePOM.inspiracijeBtn
      .should("have.text", "Inspiracije")
      .and("be.visible");
    homePagePOM.sveVestiBtn.should("have.text", "Sve vesti").and("be.visible");
  }
}
export const homePageBL = new HomePageBL();
