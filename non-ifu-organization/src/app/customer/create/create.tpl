<div layout="row" layout-align="center center" flex>

    <md-content flex layout-padding>
        <form name="form" ng-submit="createCtrl.save(createCtrl.customer)">
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Org Abbrivated Name</label>
                    <input ng-model="createCtrl.customer.orgName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Org Name</label>
                    <input ng-model="createCtrl.customer.name" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Address 1</label>
                    <input ng-model="createCtrl.customer.addressLine1" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Address 2</label>
                    <input ng-model="createCtrl.customer.addressLine2" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>DOM</label>
                    <input ng-model="createCtrl.customer.dom" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Base Currency</label>
                    <md-select ng-model="createCtrl.customer.baseCurCode" required>
                        <md-option ng-repeat="currency in createCtrl.currencyData" value="{{currency.currencyVO.currencyCode}}">
                                            {{currency.currencyVO.currencyCode}}
                        </md-option>
                    </md-select>

                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Contact Name</label>
                    <input ng-model="createCtrl.customer.contactName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Country</label>
                     <md-select ng-model="createCtrl.customer.country" required>
                        <md-option ng-repeat="country in createCtrl.countryData" value="{{country.countryVO.countryCode}}">
                                            {{country.countryVO.countryCode}}
                        </md-option>
                    </md-select>
                </md-input-container>

                <md-input-container class="md-block" flex-gt-xs>
                    <label>Email</label>
                    <input ng-model="createCtrl.customer.email" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Fax</label>
                    <input ng-model="createCtrl.customer.fax" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Language</label>
                    <input ng-model="createCtrl.customer.language" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Phone</label>
                    <input ng-model="createCtrl.customer.phone" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Reference</label>
                    <input ng-model="createCtrl.customer.reference" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Telex</label>
                    <input ng-model="createCtrl.customer.telex" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Web Address</label>
                    <input ng-model="createCtrl.customer.webAddress" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Street Name</label>
                    <input ng-model="createCtrl.customer.streetName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Post Code</label>
                    <input ng-model="createCtrl.customer.postCode" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Town Name</label>
                    <input ng-model="createCtrl.customer.townName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Country Sub Division</label>
                    <input ng-model="createCtrl.customer.countrySubDiv" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs required>
                    <label>Status</label>
                    <md-select ng-model="createCtrl.customer.status">
                        <md-option ng-repeat="status in createCtrl.statuses" value="{{status.value}}">
                                            {{status.name}}
                        </md-option>
                    </md-select>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>BEI</label>
                    <input type="text" ng-model="createCtrl.customer.customerVO.bei" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>CRM Email</label>
                    <input type="text" ng-model="createCtrl.customer.customerVO.crmEmail" required>
                </md-input-container>

                <md-input-container class="md-block" flex-gt-xs>
                    <label>Legal Id Type</label>
                    <input type="text" ng-model="createCtrl.customer.customerVO.legalIdType" required>
                </md-input-container>

                <md-input-container class="md-block" flex-gt-xs>
                    <label>Legal Id Number</label>
                    <input type="text" ng-model="createCtrl.customer.customerVO.legalIdNo" required>
                </md-input-container>

                <md-input-container class="md-block" flex-gt-xs>
                    <label>Legal Id Counrty</label>
                    <input type="text" ng-model="createCtrl.customer.customerVO.legalIdCountry" required>
                </md-input-container>
                 <md-input-container ng-hide="true" class="md-block" flex-gt-xs>
                <input type="text"  ng-model="createCtrl.customer.orgType">
                </md-input-container>
                <md-input-container layout-align="center center">
                    <md-button class="md-raised md-primary" type="submit">Save Customer</md-button>
                </md-input-container>
        </form>
    </md-content>
</div>
