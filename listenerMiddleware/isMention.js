module.exports = async ({message, context, next}) => {
    console.log('isMention');
    context.isMention = false;

    if (message.text.includes(`<@${context.botUserId}>`)) {
        context.isMention = true;
    }

    return await next();
};