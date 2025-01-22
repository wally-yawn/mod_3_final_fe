describe('Main app', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3000/api/v1/itineraries",{
      fixture: "itineraries"
    })
  })

  it('loads the itinerary cards correctly', () => {
    cy.visit('http://localhost:3001');
    cy.get('.itinerary-card').should('have.length', 3);
    cy.get('.itinerary-card').eq(0).within(() => {
      cy.get('.title').should('contain', 'Metal Bands Day 1 - 2025-02-01');
      cy.get('img.itinerary-img').should('have.attr', 'src', 'https://themusicroom.me/wp-content/uploads/2014/10/Nita.jpg');
      cy.get('img.itinerary-img').should('have.attr', 'alt', 'Metal Bands Day 1 image');
    });
    cy.get('.itinerary-card').eq(1).within(() => {
      cy.get('.title').should('contain', 'CO Bands Day 1 - 2025-02-01');
      cy.get('img.itinerary-img').should('have.attr', 'src', 'https://yocolorado.com/cdn/shop/articles/YoColorado-130793-Colors-Colorado-Flag-Blogbanner1.jpg?v=1651160341&width=1400');
      cy.get('img.itinerary-img').should('have.attr', 'alt', 'CO Bands Day 1 image');
    });
    cy.get('.itinerary-card').eq(2).within(() => {
      cy.get('.title').should('contain', 'CO Bands Day 2 - 2025-02-02');
      cy.get('img.itinerary-img').should('have.attr', 'src', 'https://yocolorado.com/cdn/shop/articles/YoColorado-130793-Colors-Colorado-Flag-Blogbanner1.jpg?v=1651160341&width=1400');
      cy.get('img.itinerary-img').should('have.attr', 'alt', 'CO Bands Day 2 image');
    });
  });
});
