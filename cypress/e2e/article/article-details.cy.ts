import { data } from "cypress/types/jquery"
let currentArticleId = ''
describe('Пользователь заходит на страницу  статьи', ()=>{
    beforeEach(()=>{
       cy.login().then((data)=>{
        cy.createArticle().then((article)=>{
            currentArticleId = article.id
            cy.visit(`articles/${article.id}`)  
        })
       })
       afterEach( ()=>{
        cy.removeArticle(currentArticleId)  
       })
       it('И видит содержимое ',()=>{
            cy.getByTestId('ArticleDetails').should('exist') 
       })
       it('И видит рекомендуемое ',()=>{
        cy.getByTestId('ArticleDetailsRecomendation').should('exist')  
   });;
   it('И оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
});
it('И оставляет оценку', () => {
    cy.getByTestId('ArticleDetails');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4 , 'feedback')  
    cy.get('[data-selected=true]').should('have.length', 4);
});
    })
})