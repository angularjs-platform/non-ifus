export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('login', {
                url: '/login',
                resolve: {
                    loadLocalization: this.loadLocalization
                },
                views   : {
                    'main@': {
                        template: require('./password.tpl'),
                        controller: 'PasswordController',
                        controllerAs: 'passwordCtrl'
                    }
                }
            });
    }

    private loadLocalization = ($translatePartialLoader: ng.translate.ITranslatePartialLoaderService, $translate: ng.translate.ITranslateService): any => {
        'ngInject';

        $translatePartialLoader.addPart('login');
        $translate.refresh();
    };
}
