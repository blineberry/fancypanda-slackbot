module.exports = async ({message, context, next}) => {
    context.isDirectMention = false;

    if (message.text.startsWith(`<@${context.botUserId}>`)) {
        context.isDirectMention = true;
    }
    
    return await next();
};