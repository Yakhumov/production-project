import {LOCALSTORAGE_USER_KEY} from '../../../src/shared/consts/LocalStorageUser' 

export const login = (username: string = 'testuser', password: string = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(body));
    });
};
