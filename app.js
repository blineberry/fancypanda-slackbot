const { App, directMention, subtype } = require('@slack/bolt');
const genericResponder = require('./responders/genericResponder');
const fpAsMention = require('./listenerMiddleware/fpAsMention');
const isMention = require('./listenerMiddleware/isMention');
const isDirectMention = require('./listenerMiddleware/isDirectMention');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true, // add this
    appToken: process.env.SLACK_APP_TOKEN // add this
});

//app.message([loggerListener], async () => {
//    console.log('message listener done');
//});

//app.message(directMention(), async ({ message, context, say }) => {  
//    try {
//        await say("```" + JSON.stringify(message) + "```");
//        await say("```" + JSON.stringify(context) + "```");
//    }  
//    catch (e) {
//        console.log({e});
//    }
//});

// Incoming logger
app.message(async({payload, context}) => {
    console.log({
        payload,
        context
    });
});

// Generic Responder
app.message(fpAsMention, isMention, isDirectMention, async({ context, message, say }) => {
    console.log('mention responder');
    console.log({context, message});

    // Only respond if mentioned
    if (!context.isMention) {
        return;
    }

    try {
        let response = genericResponder.getResponse();

        if (context.isDirectMention) {
            response = `<@${message.user}> ${response}`;
        }

        await say(response);
    } catch(e) {
        console.log(e);
    }
});
/*
app.event('app_mention', async({ say }) => {
    try {
        await say(genericResponder.getResponse());
    }
    catch(e) {
        console.log(e);
    }
});*/


// Listens to incoming messages that contain "hello"
//app.message('hello', async ({ message, say }) => {
//    // say() sends a message to the channel where the event was triggered
//    await say("```" + JSON.stringify(message) + "```");
//    //await say(`Hey there <@${message.user}>!`);
//});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();