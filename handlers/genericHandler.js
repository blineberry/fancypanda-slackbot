const DelegatingHandler = require('./delegatingHandler');
const { getResponse } = require('../responders/genericResponder');

module.exports = class GenericHandler extends DelegatingHandler {
    async send(request) {
        // only respond if the app is mentioned
        if (request.context.isMention) {
            return {
                say: getResponse()
            }            
        }

        return await super.send(request);
    }
}