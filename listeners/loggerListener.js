async function loggerListener({ payload, client, context, next }) {
    console.log(payload);
    console.log(client);
    console.log(context);

    return await next();
};