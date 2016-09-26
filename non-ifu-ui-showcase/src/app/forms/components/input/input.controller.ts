const componentFields: any = require('./input.form.json');

export class InputComponentsController {

    public components: any;

    constructor() {
        this.components = { data: {}, fields: componentFields };
    }
}
