class InspiracijePagePOM {
  get title() {
    return cy.get("h1");
  }
  get containerWithPosts() {
    return cy.get("div[class='post-grid-2']");
  }
  get nextPageBtn() {
    return cy.get("a[aria-label='Next']");
  }
  get previousPageBtn() {
    return cy.get("a[aria-label='Previous']");
  }
  get postsImg() {
    return cy.get("img[src*='uploads/blog']");
  }
  get firstPage() {
    return cy.get("a[href*='https://kobex.rs/news/1']");
  }
}
export const inspiracijePagePOM = new InspiracijePagePOM();
