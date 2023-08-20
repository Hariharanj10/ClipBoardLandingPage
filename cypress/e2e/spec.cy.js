describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})
describe("TransactionPage Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/TransactionPage"); 
  });

  it("should open the drawer when 'New account' button is clicked", () => {
    cy.contains("New account").click();
    cy.get(".ant-drawer-content").should("be.visible");
  });

  it("should add a new account when 'Add' button is clicked", () => {
    cy.contains("New account").click();

    cy.get("select").eq(0).select("Pune");
    cy.get("select").eq(1).select("Tier Manager");

    cy.get(".ant-drawer-footer .ant-btn-primary").click();
    cy.get(".ant-table-row").should("have.length", 1);
  });

  it("should show a warning when adding a duplicate account", () => {
    cy.contains("New account").click();

    cy.get("select").eq(0).select("Pune");
    cy.get("select").eq(1).select("Tier Manager");

    cy.get(".ant-drawer-footer .ant-btn-primary").click();

    cy.contains("New account").click();
    cy.get("select").eq(0).select("Pune");
    cy.get("select").eq(1).select("Tier Manager");

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Duplicate entry is not allowed");
    });
  });

  it("should delete an account when the 'Delete' button is clicked", () => {
    cy.contains("New account").click();

    cy.get("select").eq(0).select("Pune");
    cy.get("select").eq(1).select("Tier Manager");

    cy.get(".ant-drawer-footer .ant-btn-primary").click();

    cy.get(".ant-table-row").should("have.length", 1);

    cy.get(".ant-table-row").contains("Tier Manager").parent().find("button").click();

    cy.get(".ant-table-row").should("have.length", 0);
  });

  it("should set an account as primary when 'Set as primary' is selected from dropdown", () => {
    cy.contains("New account").click();

    cy.get("select").eq(0).select("Pune");
    cy.get("select").eq(1).select("Tier Manager");

    cy.get(".ant-drawer-footer .ant-btn-primary").click();

    cy.get(".ant-table-row").should("have.length", 1);

    cy.get(".ant-table-row").contains("Tier Manager").parent().find("button").click();
    cy.get(".ant-table-row").contains("Set as primary").click();

    cy.get(".ant-table-row button.ant-btn-primary").should("have.length", 1);
  });
});
