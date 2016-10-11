<div layout="row" layout-xs="column" layout-padding flex>
    <div flex>
        <div>
            <form name="vm.componentsForm" ng-submit="vm.submit(vm.componentsForm.$valid)" non-accessible-form novalidate>
                <formly-form model="vm.components.data" fields="vm.components.fields" form="vm.componentsForm"></formly-form>
            </form>
        </div>
    </div>
</div>
