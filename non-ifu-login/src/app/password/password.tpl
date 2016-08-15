<div layout="row" layout-align="center center" class="non-password-tpl" flex>
    <md-whiteframe class="md-whiteframe-6dp" flex="30"  flex-xs="90" flex-sm="60" layout-padding>
        <form name="vm.loginForm" ng-submit="vm.submit(vm.loginForm.$valid)" non-accessible-form novalidate>
            <formly-form model="vm.login.data" fields="vm.login.fields" form="vm.loginForm">
                <md-input-container>
                    <md-button class="md-raised md-primary" type="submit"><span translate>LOGIN</span></md-button>
                </md-input-container>
            </formly-form>
        </form>
    </md-whiteframe>
</div>
