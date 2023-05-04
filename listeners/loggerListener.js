export async function loggerListener({ payload, client, context, next }) {
    try {
        console.log({
            payload,
            client,
            context
        });    
        return await next();
    }
    catch (e) {
        console.log({e});
        return await next();
    }
};