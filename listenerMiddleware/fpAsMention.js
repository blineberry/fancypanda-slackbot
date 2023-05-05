module.exports = async ({message, context, next}) => {
    console.log('fpAsMention');
    message.text = message.text.replace(/\bfp\b/, `<@${context.botUserId}>`);

    await next();
};