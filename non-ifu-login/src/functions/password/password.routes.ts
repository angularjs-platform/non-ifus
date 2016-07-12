export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.login', {
                template: require('./password.tpl'),
                controller: 'PasswordController',
                controllerAs: 'passwordCtrl',
                url: '/login'
            });
    }
}
