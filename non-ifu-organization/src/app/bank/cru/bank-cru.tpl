<div layout="row" class="non-bank-cru-tpl" flex id="scrollTop">
    <div flex="100" layout-padding>
        <h2 translate>Bank Maintenance</h2>
        <form name="vm.bankForm" ng-submit="vm.submit(vm.bankForm.$valid)" non-accessible-form novalidate>
            <formly-form model="vm.bank.data" fields="vm.bank.fields" form="vm.bankForm">
                <md-input-container>
                    <md-button class="md-raised md-primary" type="submit"><span translate>SAVE</span></md-button>
                </md-input-container>
            </formly-form>
        </form>
    </div>
</div>
