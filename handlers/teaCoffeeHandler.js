const DelegatingHandler = require('./delegatingHandler');
const { getResponse } = require('../responders/teaCoffeeResponder');

module.exports = class TeaCoffeeHandler extends DelegatingHandler {
    async send(request) {
        // does the message contain a tea or coffee emoji?
        const isCoffeeMessage = /:coffee:/.test(request.payload.text) || /\bcoffee\b/i.test(request.payload.text);
        const isTeaMessage = /:tea:/.test(request.payload.text) || /\btea\b/i.test(request.payload.text);

        // if the message contains neither coffee nor tea emojis, pass on the
        // request.
        if (!isCoffeeMessage && !isTeaMessage) {
            return await super.send(request);
        }
        request.context.shouldRespondDirectly = true;

        return {
            say: getResponse(isCoffeeMessage ? ":coffee:" : ":tea:")
        };
    }
}