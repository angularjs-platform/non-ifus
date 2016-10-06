const componentFields: any = require('./checkbox.form.json');

export class CheckboxComponentsController {

    public components: any;

    constructor() {
        this.components = { data: {}, fields: componentFields };
    }
}
