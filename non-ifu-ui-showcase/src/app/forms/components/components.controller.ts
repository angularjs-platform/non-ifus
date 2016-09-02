const componentFields: any = require('./components.form.json');

export class ComponentsController {

    public components: any;

    constructor() {
        this.components = { data: {}, fields: componentFields };
    }
}
