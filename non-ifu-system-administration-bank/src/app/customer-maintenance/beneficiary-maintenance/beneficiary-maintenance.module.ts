import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bank.app.customer-maintenance.beneficiary-maintenance';

// Config
import {UiRouterConfig} from './beneficiary-maintenance.routes';

// Controller
import {BACustomerBeneficiaryFormController} from './beneficiary-form.controller';

angular.module(moduleName, [])
    .controller('BACustomerBeneficiaryFormController', BACustomerBeneficiaryFormController)
    .config(UiRouterConfig);

export default moduleName;
