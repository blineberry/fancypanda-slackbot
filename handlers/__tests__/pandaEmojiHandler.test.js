const PandaEmojiHandler = require('../pandaEmojiHandler');
const genericResponder = require('../../responders/genericResponder');

afterEach((() => {
    jest.restoreAllMocks();
}));

test('panda emoji message calls getResponse', async () => {
    let handler = new PandaEmojiHandler();
    const responderSpy = jest.spyOn(genericResponder, 'getResponse');

    let response = await handler.send({
        payload: {
            text: ":panda_face:"
        }
    });

    expect(responderSpy).toHaveBeenCalled();
});

test('no panda emoji message passes to inner handler', async () => {
    let handler = new PandaEmojiHandler();

    handler.innerHandler = {
        send: jest.fn()
    };

    let response = await handler.send({
        payload: {
            text: "no panda face"
        }
    });

    expect(handler.innerHandler.send).toHaveBeenCalled();
});