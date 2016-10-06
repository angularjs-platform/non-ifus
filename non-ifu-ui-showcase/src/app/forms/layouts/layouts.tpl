<div layout="row" layout-xs="column" layout-padding flex>
    <div flex>
        <h2>UI Showcase Form Components - Layout</h2>
        <h4>Name fields:
            <p>Stacked Horizontally for Tablets and Desktops. Stacked Vertically for Mobile.</p>
            <p>Desktop Widths: 70-30, Tablet Widths: 50-50, Mobile Widths: 100-100</p>
        </h4>
        <h4>Adress fields:
            <p>Stacked horizontally Desktops. Stacked Vertically for Mobile and Tablets.</p>
            <p>Desktop Widths: 40-40-20, Tablet Widths: 100-80-100, Mobile Widths: 100-100-100</p>
        </h4>
        <div>
            <form name="vm.componentsForm" ng-submit="vm.submit(vm.componentsForm.$valid)" non-accessible-form novalidate>
                <formly-form model="vm.components.data" fields="vm.components.fields" form="vm.componentsForm"></formly-form>
            </form>
        </div>
    </div>
</div>
