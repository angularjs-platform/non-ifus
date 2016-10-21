export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('login', {
                template: require('./password.tpl'),
                controller: 'PasswordController',
                controllerAs: 'passwordCtrl',
                url: '/login'
            });
    }
}
