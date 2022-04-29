// cy.exec() - to run system commands
// cy.task() - to run code in Node via the pluginsFile
// cy.request() - to make HTTP requests

describe('My First Test', () => {

  // beforeEach(() => {
    // If you're running node.js on your server, you might add a before or beforeEach hook that executes an npm task.
    // in the blow code we see api configration for our testing

    ///reset and seed the database prior to every test
    ///cy.exec('npm run db:reset && npm run db:seed')

    ///seed a post in the DB that we control from our tests
    ///cy.request('POST', '/test/seed/post', {
    ///  title: 'First Post',
    ///  authorId: 1,
    ///  body: '...',
    ///})

    ///cy.request('POST', '/test/seed/user', { name: 'Mahdi' })
    ///  .its('body')
    ///  .as('currentUser')
  // })

  it('Visit Page ', () => {
    cy.visit("/")
  });
  
  it('checking the url is the one that we want', () => {
    cy.url().should('include', '/')
  });

  it('finds the content "Create new User"', () => {
    cy.contains('Create new User').click();
  });


  it('fills the inputs and click submit', () => {
    cy.get('input').eq(0).click().type("Mahdi Khavari")
    cy.get('input').eq(1).click().type("09034604960")
    cy.contains('make new one').click()
  });

  it('Delete All previous Datas except the new one we made', () => {
    cy.contains("mobina").next().next().contains('Delete').click()
    cy.contains("kimia").next().next().contains('Delete').click()
    cy.contains("mohi").next().next().contains('Delete').click()
  });

  it('Create a new User', () => {
    cy.contains('Create new User').click();
    cy.get('input').eq(0).click().type("Bitcoin company")
    cy.get('input').eq(1).click().type("123456789")
    cy.contains('make new one').click()
  });

  it('Edit User', () => {
    cy.contains('Mahdi').next().next().contains('Edit').click()
    cy.get('input').eq(0).click().clear().type("We Edited User Data")
    cy.get('input').eq(1).click().clear().type("09904604960")
    cy.contains('Save changes').click()
  });

  // testing errors

  it("testing errors",()=>{
    cy.contains("Test error")
  });

  // it('Get an input, type into it and verify that the value has been updated', () => {
  //   cy.get('.action-email')
  //   .type('mkhavari0120@gmail.com')
  //   .should('have.value', 'falseValue@gmail.com')
  // });

})