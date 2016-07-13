<div layout="row" layout-align="center center" layout-fill>

    <md-content flex layout-padding>
        <form name="form" ng-submit="createCtrl.save(createCtrl.bank)">
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Org Abbrivated Name</label>
                    <input ng-model="createCtrl.bank.orgName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Org Name</label>
                    <input ng-model="createCtrl.bank.name" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Address 1</label>
                    <input ng-model="createCtrl.bank.addressLine1" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Address 2</label>
                    <input ng-model="createCtrl.bank.addressLine2" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>DOM</label>
                    <input ng-model="createCtrl.bank.dom" required>
                </md-input-container>
                 <md-input-container class="md-block" flex-gt-xs>
                    <label>Base Currency</label>
                    <md-select ng-model="createCtrl.bank.baseCurCode" required>
                        <md-option ng-repeat="currency in createCtrl.currencyData" value="{{currency.currencyVO.currencyCode}}">
                                            {{currency.currencyVO.currencyCode}}
                        </md-option>
                    </md-select>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Contact Name</label>
                    <input ng-model="createCtrl.bank.contactName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Country</label>
                     <md-select ng-model="createCtrl.bank.country" required>
                        <md-option ng-repeat="country in createCtrl.countryData" value="{{country.countryVO.countryCode}}">
                                            {{country.countryVO.countryCode}}
                        </md-option>
                    </md-select>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Email</label>
                    <input ng-model="createCtrl.bank.email" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Fax</label>
                    <input ng-model="createCtrl.bank.fax" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Language</label>
                    <input ng-model="createCtrl.bank.language" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Phone</label>
                    <input ng-model="createCtrl.bank.phone" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Reference</label>
                    <input ng-model="createCtrl.bank.reference" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Telex</label>
                    <input ng-model="createCtrl.bank.telex" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Web Address</label>
                    <input ng-model="createCtrl.bank.webAddress" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Street Name</label>
                    <input ng-model="createCtrl.bank.streetName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Post Code</label>
                    <input ng-model="createCtrl.bank.postCode" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Town Name</label>
                    <input ng-model="createCtrl.bank.townName" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>Country Sub Division</label>
                    <input ng-model="createCtrl.bank.countrySubDiv" required>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs required>
                    <label>Status</label>
                    <md-select ng-model="updateCtrl.bank.status">
                        <md-option ng-repeat="status in createCtrl.statuses" value="{{status.value}}">
                                            {{status.name}}
                        </md-option>
                    </md-select>
                </md-input-container>
                <md-input-container class="md-block" flex-gt-xs>
                    <label>ISO Code</label>
                    <input type="text" ng-model="createCtrl.bank.bankVO.isoCode" required>
                </md-input-container>
                 <md-input-container ng-hide="true" class="md-block" flex-gt-xs>
                <input type="text"  ng-model="createCtrl.bank.orgType">
                </md-input-container>
                <md-input-container layout-align="center center">
                    <md-button class="md-raised md-primary" type="submit">Save Bank</md-button>
                </md-input-container>
        </form>
    </md-content>
</div>


