import {IReferenceDataService} from '../shared/shared.model';

export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        $stateProvider
            .state('app.customerCreate', {
                url: '/customer/create',
                resolve: {
                    countryData: this.getCountries,
                    currencyData: this.getCurrencies
                },
                views   : {
                    'content@app': {
                        template: require('./create.tpl'),
                        controller: 'CreateCustomerController',
                        controllerAs: 'createCtrl'
                    }
                }
            });
    }

    private getCountries = (ReferenceDataService: IReferenceDataService): any => {
        'ngInject';
        return ReferenceDataService.getCountryData();
    };

    private getCurrencies = (ReferenceDataService: IReferenceDataService): any => {
        'ngInject';
        return ReferenceDataService.getCurrencyData();
    };
}
