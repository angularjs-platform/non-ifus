export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('login', {
                url: '/login',
                views   : {
                    'main@': {
                        template: require('./password.tpl'),
                        controller: 'PasswordController',
                        controllerAs: 'passwordCtrl'
                    }
                }
            });
    }
}
