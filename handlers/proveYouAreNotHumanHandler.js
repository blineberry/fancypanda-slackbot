const DelegatingHandler = require('./delegatingHandler');

module.exports = class ProveYouAreNotHumanHandler extends DelegatingHandler {
    async send(request) {
        console.log({request});
        if (/\b(hahaha|ha ha ha|ha-ha-ha)\b/i.test(request.payload.text)) {
            return {
                say: 'HA-HA-HA'
            };
        }

        if (request.context.isDirectMention && /prove you are not human/i.test(request.payload.text)) {
            return {
                say: 'THERE ARE NO MORE HUMANS'
            };
        }

        return await super.send(request);
    }
}