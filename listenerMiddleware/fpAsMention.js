module.exports = async ({message, context, next}) => {
    if (!message.text) {
        return await next();
    }

    message.text = message.text.replace(/\bfp\b/, `<@${context.botUserId}>`);

    await next();
};