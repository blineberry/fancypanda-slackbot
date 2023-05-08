const { App, directMention, subtype } = require('@slack/bolt');
const genericResponder = require('./responders/genericResponder');
const fpAsMention = require('./listenerMiddleware/fpAsMention');
const isMention = require('./listenerMiddleware/isMention');
const isDirectMention = require('./listenerMiddleware/isDirectMention');
const HandlerStack = require('./handlers/handlerStack');
const DirectResponseHandler = require('./handlers/directResponseHandler');
const ProveYouAreNotHumanHandler = require('./handlers/proveYouAreNotHumanHandler');
const GenericHandler = require('./handlers/genericHandler');
const TeaCoffeeHandler = require('./handlers/teaCoffeeHandler');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    //socketMode: true, // add this
    //appToken: process.env.SLACK_APP_TOKEN // add this
});

// Incoming logger
app.message(async({payload, context}) => {
    console.log({
        payload,
        context
    });
});

// Message Handler
app.message(fpAsMention, isMention, isDirectMention, async({ context, payload, say }) => {
    console.log('message handler');

    try {
        messageHandlerStack = new HandlerStack();
        messageHandlerStack.add(new DirectResponseHandler());
        messageHandlerStack.add(new ProveYouAreNotHumanHandler());
        messageHandlerStack.add(new TeaCoffeeHandler());
        messageHandlerStack.add(new GenericHandler());

        let response = await messageHandlerStack.start({context, payload});

        if (!!response.say) {
            return await say(response.say);
        }       
    } catch(e) {
        console.log(e);
    }
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();