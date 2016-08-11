export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';
        $stateProvider
            .state('app.home', {
                url: '/home',
                views   : {
                    'content@app': {
                        template: require('./dashboard.tpl'),
                        controller: 'DashboardController',
                        controllerAs: 'vm'
                    }
                }
        });
    }
}
