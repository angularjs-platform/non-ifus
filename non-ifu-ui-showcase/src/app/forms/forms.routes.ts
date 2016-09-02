export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';
        $stateProvider
            .state('app.ui-showcase.forms', {
                url: '/ui-showcase/forms',
                views   : {
                    'content@app': {
                        template: require('./forms.tpl')
                    }
                }
            })
            .state('app.ui-showcase.forms-components', {
                url: '/ui-showcase/forms/components',
                views   : {
                    'content@app': {
                        template: require('./components/components.tpl'),
                        controller: 'ComponentsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.ui-showcase.forms-dynamic-validations', {
                url: '/ui-showcase/forms/validations',
                views   : {
                    'content@app': {
                        template: require('./dynamic-validations/dynamic-validations.tpl'),
                        controller: 'DynamicValidationsController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
}
