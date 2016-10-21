<div layout="row" layout-align="center center" layout-fill>

    <md-content flex layout-padding>
        <form name="form" ng-submit="updateCtrl.update(updateCtrl.customer)">
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Org Abbrivated Name</label>
                    <input ng-model="updateCtrl.customer.orgName" required disabled>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Org Name</label>
                    <input ng-model="updateCtrl.customer.name" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Address 1</label>
                    <input ng-model="updateCtrl.customer.addressLine1" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Address 2</label>
                    <input ng-model="updateCtrl.customer.addressLine2" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>DOM</label>
                    <input ng-model="updateCtrl.customer.dom" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Base Currency</label>
                    <input ng-model="updateCtrl.customer.baseCurCode" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Contact Name</label>
                    <input ng-model="updateCtrl.customer.contactName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Country</label>
                     <md-select ng-model="createCtrl.customer.country" required>
                        <md-option ng-repeat="country in createCtrl.countryData" value="{{country.countryCode}}">
                                            {{country.countryCode}}
                        </md-option>
                    </md-select>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Email</label>
                    <input ng-model="updateCtrl.customer.email" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Fax</label>
                    <input ng-model="updateCtrl.customer.fax" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Language</label>
                    <input ng-model="updateCtrl.customer.language" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Phone</label>
                    <input ng-model="updateCtrl.customer.phone" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Reference</label>
                    <input ng-model="updateCtrl.customer.reference" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Telex</label>
                    <input ng-model="updateCtrl.customer.telex" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Web Address</label>
                    <input ng-model="updateCtrl.customer.webAddress" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Street Name</label>
                    <input ng-model="updateCtrl.customer.streetName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Post Code</label>
                    <input ng-model="updateCtrl.customer.postCode" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Town Name</label>
                    <input ng-model="updateCtrl.customer.townName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Country Sub Division</label>
                    <input ng-model="updateCtrl.customer.countrySubDiv" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs required>
                    <label>Status</label>
                    <md-select ng-model="updateCtrl.customer.status">
                        <md-option ng-repeat="status in updateCtrl.statuses" value="{{status.value}}">
                                            {{status.name}}
                        </md-option>
                    </md-select>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>BEI</label>
                    <input type="text" ng-model="updateCtrl.customer.customerVO.bei" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>CRM Email</label>
                    <input type="text" ng-model="updateCtrl.customer.customerVO.crmEmail" required>
                </md-input-container>

                <md-input-container class="md-block" flex-gt-xs>
                    <label>Legal Id Type</label>
                    <input type="text" ng-model="updateCtrl.customer.customerVO.legalIdType" required>
                </md-input-container>

                <md-input-container class="md-block" flex-gt-xs>
                    <label>Legal Id Number</label>
                    <input type="text" ng-model="updateCtrl.customer.customerVO.legalIdNo" required>
                </md-input-container>

                <md-input-container class="md-block" flex-gt-xs>
                    <label>Legal Id Counrty</label>
                    <input type="text" ng-model="updateCtrl.customer.customerVO.legalIdCountry" required>
                </md-input-container>
                 <md-input-container ng-hide="true" class="md-block" flex-gt-xs>
                <input type="text"  ng-model="updateCtrl.customer.orgType">
                </md-input-container>
                <md-input-container layout-align="center center">
                    <md-button class="md-raised md-primary" type="submit">Update Customer</md-button>
                </md-input-container>
        </form>
    </md-content>
</div>
