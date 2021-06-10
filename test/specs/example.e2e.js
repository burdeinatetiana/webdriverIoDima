import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('My Login application', () => {
    let credentials = [
        {
            username: "fapecep930@ahhtee.com",
            password: "qwerty123"
        }
    ];

    beforeEach(() => {
        LoginPage.open();
    });


    for (const iteration of credentials) {
        it('should login with valid credentials', () => {
            LoginPage.login(iteration.username, iteration.password);
            expect(ProfilePage.userIcon).toBeExisting();
        });
    }

    it('submit button should be disabled if input fields are empty', () => {
        expect(LoginPage.btnSubmit).not.toBeClickable();
    });
});


