describe('Main app', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3000/api/v1/itineraries",{
      fixture: "itineraries"
    })
    cy.intercept("GET", "http://localhost:3000/api/v1/itineraries/3",{
      fixture: "itinerary"
    })
    cy.intercept("DELETE", "http://localhost:3000/api/v1/shows/1",{
      fixture: "delete"
    } )

    cy.visit('http://localhost:3001');
  })

  it('loads the itinerary cards correctly', () => {
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

  it('filters based on the radio selection', () =>{
    cy.get('.radio-selectors > h2').contains('See selected days')
    cy.get('input[type="radio"][value="2025-02-01"]').check();
    cy.get('input[type="radio"][value="2025-02-01"]').should('be.checked');

    cy.get('.itinerary-card').should('have.length', 2);

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
  })

  it('loads the details page when clicking on a card', () => {
    cy.get('.itinerary-card').eq(0).click()
    cy.get('.title').should('contain', 'CO Bands Day 1 - 2025-02-01');
    cy.get('img.itinerary-img').should('have.attr', 'src', 'https://yocolorado.com/cdn/shop/articles/YoColorado-130793-Colors-Colorado-Flag-Blogbanner1.jpg?v=1651160341&width=1400');
    cy.get('img.itinerary-img').should('have.attr', 'alt', 'CO Bands Day 1 image');
    cy.get('.user-card').should('have.length', 2)
    cy.get('.user-card').eq(0).within(() => {
      cy.get('.name').should('contain', 'Wally Wallace');
      cy.get('.email').should('contain', 'wwallace24@turing.edu');
    })
    cy.get('.user-card').eq(1).within(() => {
      cy.get('.name').should('contain', 'Dahlia Wallace');
      cy.get('.email').should('contain', 'dahila@cat.com');
    })
    cy.get('.show-card').should('have.length', 1)
    cy.get('.show-card').eq(0).within(() => {
      cy.get('.name').should('contain', 'The Deceitful Mind');
      cy.get('.time').should('contain', '09:00 PM');
    })
  })

  it('returns home from the details page', () => {
    cy.get('.itinerary-card').eq(0).click()
    .get('.home-btn').click()
    cy.url().should("eq", "http://localhost:3001/");
  })

  it('deletes a show from the itineraries details page', () => {
    cy.get('.itinerary-card').eq(0).click()
    cy.get('.show-card').eq(0).within(() => {
      cy.get('.delete-btn').click()
      cy.get("p").contains("This show has been deleted")
    })
  })
});