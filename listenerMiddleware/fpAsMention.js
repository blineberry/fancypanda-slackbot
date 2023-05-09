module.exports = async ({message, context, next}) => {
    message.text = message.text.replace(/\bfp\b/, `<@${context.botUserId}>`);

    await next();
};