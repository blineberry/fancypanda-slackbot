module.exports = async ({message, context, next}) => {
    console.log('isDirectMention');
    context.isDirectMention = false;

    if (message.text.startsWith(`<@${context.botUserId}>`)) {
        context.isDirectMention = true;
    }
    
    return await next();
};