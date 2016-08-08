import {IAuthenticationService} from '@norn/non-framework';

export class PasswordController {

    public orgName: string;
    public userName: string;
    public password: string;

    constructor(
        private AuthenticationService: IAuthenticationService,
        private $state: ng.ui.IStateService,
        private $mdToast:  ng.material.IToastService) {
        'ngInject';

        this.orgName = null;
        this.userName = null;
        this.password = null;
    }

    public login = (orgName: string, userName: string, password: string): void => {
        this.AuthenticationService.login(orgName, userName, password).then(this.handleSuccessfulLogin, this.handleErrorLogin);
    };

    private handleSuccessfulLogin = (response: any): void  => {
        // Example of a toaster with position
        // Remove this later on when not needed
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent('Successfully loged in!')
            .position('top right'));

        this.$state.go('app.home');
    };

    private handleErrorLogin = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to login. Please try again!'));
        this.orgName = null;
        this.userName = null;
        this.password = null;
    };
}
