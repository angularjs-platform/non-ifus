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
            .state('app.ui-showcase.forms-components-input', {
                url: '/ui-showcase/forms/components/input',
                views   : {
                    'content@app': {
                        template: require('./components/input/input.tpl'),
                        controller: 'InputComponentsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.ui-showcase.forms-components-checkbox', {
                url: '/ui-showcase/forms/components/checkbox',
                views   : {
                    'content@app': {
                        template: require('./components/checkbox/checkbox.tpl'),
                        controller: 'CheckboxComponentsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.ui-showcase.forms-components-radiobutton', {
                url: '/ui-showcase/forms/components/radiobutton',
                views   : {
                    'content@app': {
                        template: require('./components/radiobutton/radiobutton.tpl'),
                        controller: 'RadiobuttonComponentsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.ui-showcase.forms-components-select', {
                url: '/ui-showcase/forms/components/select',
                views   : {
                    'content@app': {
                        template: require('./components/select/select.tpl'),
                        controller: 'SelectComponentsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.ui-showcase.forms-components-datepicker', {
                url: '/ui-showcase/forms/components/datepicker',
                views   : {
                    'content@app': {
                        template: require('./components/datepicker/datepicker.tpl'),
                        controller: 'DatepickerComponentsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.ui-showcase.forms-components-switch', {
                url: '/ui-showcase/forms/components/switch',
                views   : {
                    'content@app': {
                        template: require('./components/switch/switch.tpl'),
                        controller: 'SwitchComponentsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.ui-showcase.forms-components-textarea', {
                url: '/ui-showcase/forms/components/textarea',
                views   : {
                    'content@app': {
                        template: require('./components/textarea/textarea.tpl'),
                        controller: 'TextareaComponentsController',
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
            })
            .state('app.ui-showcase.forms-layouts', {
                url: '/ui-showcase/forms/layouts',
                views   : {
                    'content@app': {
                        template: require('./layouts/layouts.tpl'),
                        controller: 'LayoutsController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
}
