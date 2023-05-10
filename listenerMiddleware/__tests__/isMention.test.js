const isMention = require('../isMention');

test('message contains mention adds isMention=true to context', async () => {
    request = {
        message: {
            text: '<@botuserid>'
        },
        context: {
            botUserId: 'botuserid'
        },
        next: jest.fn()
    };

    await isMention(request);

    expect(request.context.isMention).toBe(true);
});

test('message does not contain mention adds isMention=false to context', async () => {
    request = {
        message: {
            text: 'test text'
        },
        context: {
            botUserId: 'botuserid'
        },
        next: jest.fn()
    };

    await isMention(request);

    expect(request.context.isMention).toBe(false);
});

test('no message text does not throw an error', async () => {
    request = {
        message: {

        },
        context: {},
        next: jest.fn()
    };

    await isMention(request);

    expect(true).toBe(true);
});