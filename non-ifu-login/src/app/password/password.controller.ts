import {IAuthenticationService} from '@norn/non-framework';

const loginFields: any = require('./password.form.json');

export class PasswordController {

    public login: any;
    public showLoginBox: any;

    constructor(
        private AuthenticationService: IAuthenticationService,
        private $state: ng.ui.IStateService,
        private $mdToast:  ng.material.IToastService,
        private $translate: ng.translate.ITranslateService,
        private $timeout: ng.ITimeoutService) {
        'ngInject';

        this.login = { data: {}, fields: loginFields };
        this.$timeout(this.showLoginContent, 200);
    }

    public submit = (valid: boolean): void => {
        if (valid) {
            this.AuthenticationService.login(this.login.data.orgName, this.login.data.userName,
                        this.login.data.password).then(this.handleSuccessfulLogin, this.handleErrorLogin);
        }
        else {
            this.$mdToast.show(this.$mdToast.simple().textContent('Unable to login. Please correct your inputs!').position('top right'));
        }
    };

    private handleSuccessfulLogin = (response: any): void  => {
        // Example of a toaster with position
        // Remove this later on when not needed
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent('Successfully loged in!')
            .position('bottom left'));

        this.$state.go('app.home');
    };

    private handleErrorLogin = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to login. Please try again!'));
        this.login.data = {};
    };

    private showLoginContent = (): any => {
        this.showLoginBox = true;
    }
}
