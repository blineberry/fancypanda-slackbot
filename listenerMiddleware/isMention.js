module.exports = async ({message, context, next}) => {
    context.isMention = false;

    if (message.text?.includes(`<@${context.botUserId}>`)) {
        context.isMention = true;
    }

    return await next();
};