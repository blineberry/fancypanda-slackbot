const DelegatingHandler = require('./delegatingHandler');

module.exports = class DirectMentionHandler extends DelegatingHandler {
    async send(request) {
        let response = await super.send(request);

        if (!request.context.isDirectMention) {
            return response;
        }

        if (!response.say) {
            return response;
        }

        response.say = `<@${ request.payload.user }> ${ response.say }`;
        return response;
    }
}