const componentFields: any = require('./select.form.json');

export class SelectComponentsController {

    public components: any;

    constructor() {
        this.components = { data: {}, fields: componentFields };
    }
}
