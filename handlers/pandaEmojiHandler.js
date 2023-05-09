const DelegatingHandler = require('./delegatingHandler');
const genericResponder = require('../responders/genericResponder');

module.exports = class PandaEmojiHandler extends DelegatingHandler {
    async send(request) {
        if (/:panda_face:/i.test(request.payload.text)) {
            return {
                say: genericResponder.getResponse()
            };
        }        

        return await super.send(request);
    }
}