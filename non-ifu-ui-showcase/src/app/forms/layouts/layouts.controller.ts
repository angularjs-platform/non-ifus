const layoutingFields: any = require('./layouts.form.json');

export class LayoutsController {

    public components: any;

    constructor() {
        this.components = { data: {}, fields: layoutingFields };
    }
}
