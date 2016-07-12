import {IAuthenticationService} from '@norn/non-framework/src/framework.model';

export interface IPasswordController {
    orgName: string;
    userName: string;
    password: string;
    login(orgName: string, userName: string, password: string): void;
}

export class PasswordController implements IPasswordController {

    public orgName: string;
    public userName: string;
    public password: string;

    constructor(
        private AuthenticationService: IAuthenticationService,
        private $mdToast:  angular.material.IToastService) {
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
    };

    private handleErrorLogin = (): void => {
        this.$mdToast.show(this.$mdToast.simple().textContent('Unable to login. Please try again!'));
        this.orgName = null;
        this.userName = null;
        this.password = null;
    };
}
