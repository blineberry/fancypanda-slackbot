const DelegatingHandler = require("./delegatingHandler");

module.exports = class ResponderHandler extends DelegatingHandler {
    shouldRespond(request) {
        return false;
    }

    getResponse(request) {
        return '';
    }

    async send(request) {
        if (this.shouldRespond(request)) {
            return {
                say: this.getResponse(request)
            };
        }

        return await super.send(request);
    }
}