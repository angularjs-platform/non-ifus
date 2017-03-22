import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-customer.app.beneficiary-maintenance';

// Config
import {UiRouterConfig} from './beneficiary-maintenance.routes';

// Controller
import {CACustomerBeneficiaryFormController} from './beneficiary-form.controller';

angular.module(moduleName, [])
    .controller('CACustomerBeneficiaryFormController', CACustomerBeneficiaryFormController)
    .config(UiRouterConfig);

export default moduleName;
