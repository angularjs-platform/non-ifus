<div layout="row" layout-xs="column" layout-padding flex>
    <div flex-gt-sm="70" flex>
        <div>
            <non-form configuration="vm.formConfiguration"></non-form>
        </div>
    </div>
    <div flex-gt-sm="30" flex>
        <h2>Form Model</h2>
        <div>{{vm.formConfiguration.model | json}}</div>
    </div>
</div>
