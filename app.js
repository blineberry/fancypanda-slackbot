const { App, directMention } = require('@slack/bolt');
const loggerListener = require('./listeners/loggerListener');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message([loggerListener], async () => {
    console.log('message listener done');
});

app.message([directMention], async ({ message, context, say }) => {  
    try {
        await say("```" + JSON.stringify(message) + "```");
        await say("```" + JSON.stringify(context) + "```");
    }  
    catch (e) {
        console.log({e});
    }
});


// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say("```" + JSON.stringify(message) + "```");
    //await say(`Hey there <@${message.user}>!`);
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();