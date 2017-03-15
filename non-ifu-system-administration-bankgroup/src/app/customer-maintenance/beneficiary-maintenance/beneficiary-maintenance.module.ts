import * as angular from 'angular';

const moduleName: string = 'non.ifu.system-administration-bankgroup.app.customer-maintenance.beneficiary-maintenance';

// Config
import {UiRouterConfig} from './beneficiary-maintenance.routes';

// Controller
import {BGACustomerBeneficiaryFormController} from './beneficiary-form.controller';

angular.module(moduleName, [])
    .controller('BGACustomerBeneficiaryFormController', BGACustomerBeneficiaryFormController)
    .config(UiRouterConfig);

export default moduleName;
