<div layout="row" layout-xs="column" layout-padding flex>
    <div flex-gt-sm="70" flex>
        <h2>UI Showcase Form Components - Input</h2>
        <div>
            <form name="vm.componentsForm" ng-submit="vm.submit(vm.componentsForm.$valid)" non-accessible-form novalidate>
                <formly-form model="vm.components.data" fields="vm.components.fields" form="vm.componentsForm"></formly-form>
            </form>
        </div>
    </div>
    <div flex-gt-sm="30" flex>
        <h2>Form Model</h2>
        <div>{{vm.components.data | json}}</div>
    </div>
</div>
