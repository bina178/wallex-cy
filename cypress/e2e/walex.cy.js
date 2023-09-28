describe("Digikala Automation Test", () => {
  it("Should select and add the most expensive mobile phone to the shopping cart", () => {
    
    cy.visit("https://www.digikala.com/");
    cy.get('a[href="/categories/"]').click();
    cy.wait(2000);
    cy.get('span[data-cro-id="searchbox-type"]').first().click();
    cy.wait(2000);
    cy.get('input[name="search-input"]').type('سامسونگ ').type('{enter}');
    cy.wait(2000);
    cy.get('div[data-cro-id="plp-filter-icon"]').scrollIntoView().click({ force: true });
    cy.get('div[data-cro-id="plp-filter-drop-down"]').first().click();
    cy.get('.text-subtitle-strong:contains("موبایل")').click();
    cy.wait(2000);
    cy.get('div[data-cro-id="plp-filter-icon"]').scrollIntoView().click({ force: true });
    cy.contains('محدوده قیمت').click();
    cy.get('input[name="min"]').type('10000000');
    cy.get('input[name="max"]').clear();
    cy.get('input[name="max"]').type('20000000');
    cy.wait(2000);
    cy.get('div[data-cro-id="plp-sort-icon"]').scrollIntoView().click({ force: true });
    cy.contains('div', 'گران‌ترین').click();
    cy.contains("گران‌ترین").should("exist");
    cy.wait(2000);
    cy.get('[data-product-index]').then(($elements) => {
      const firstItem = $elements[0];
      cy.wrap(firstItem).click();
    });
    cy.wait(2000);
    cy.window().then((win) => {
    cy.wrap(win).should('have.property', 'document').its('readyState').should('eq', 'complete');
    cy.wrap(win.document).then((doc) => {
    cy.get(doc).find('h1').first().invoke('text').should('match', /موبایل/);
    });
  });

  });
});