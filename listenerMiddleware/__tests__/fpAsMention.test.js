const fpAsMention = require('../fpAsMention');

test('fp in message text gets converted to a user id', async () => {
    request = {
        message: {
            text: 'fp'
        },
        context: {
            botUserId: 'botuserid'
        },
        next: jest.fn()
    };

    await fpAsMention(request);

    expect(request.message.text).toBe('<@botuserid>');
});

test('no fp in message text does not change the message text', async () => {
    request = {
        message: {
            text: 'test text'
        },
        context: {
            botUserId: 'botuserid'
        },
        next: jest.fn()
    };

    await fpAsMention(request);

    expect(request.message.text).toBe('test text');
});

test('no message text does not throw an error', async () => {
    request = {
        message: {

        },
        next: jest.fn()
    };

    await fpAsMention(request);

    expect(true).toBe(true);
});