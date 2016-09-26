const componentFields: any = require('./switch.form.json');

export class SwitchComponentsController {

    public components: any;

    constructor() {
        this.components = { data: {}, fields: componentFields };
    }
}
