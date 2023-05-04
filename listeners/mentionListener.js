const genericResponder = require('../responders/genericResponder');

async function mentionListener({ payload, client, context, next }) {
    // if a responder has already been assigned, continue
    if (!!context.responder) {
        return await next();
    }

    // if we don't know our botId, continue
    if (!!context.botId) {
        return await next();
    }

    context.responder = genericResponder;

    await next();
};