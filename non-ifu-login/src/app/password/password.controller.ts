import {IAuthenticationService} from '@norn/non-shared-authentication-management';
import { FormConfiguration } from '@norn/non-framework';

const loginFields: any = require('./password.form.json');

export class PasswordController {

    public showLoginBox: boolean;
    public formConfiguration: FormConfiguration;

    constructor(
        private AuthenticationService: IAuthenticationService,
        private $state: ng.ui.IStateService,
        private $mdToast:  ng.material.IToastService,
        private $translate: ng.translate.ITranslateService,
        private $timeout: ng.ITimeoutService) {
        'ngInject';

        this.formConfiguration = {
            model: {},
            fields: loginFields,
            options: {
                formState: {
                    viewManager: {
                        submit: this.submit
                    }
                }
            }
        };
        this.$timeout(this.showLoginContent, 200);
    }

    public submit = (form: any): void => {
        this.AuthenticationService.login(this.formConfiguration.model['orgName'], this.formConfiguration.model['userName'],
            this.formConfiguration.model['password']).then(this.handleSuccessfulLogin, this.handleErrorLogin);
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
        this.formConfiguration.model = {};
    };

    private showLoginContent = (): any => {
        this.showLoginBox = true;
    }
}
