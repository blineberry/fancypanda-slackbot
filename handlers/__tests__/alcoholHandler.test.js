const AlcoholHandler = require('../alcoholHandler');
const alcoholResponder = require('../../responders/alcoholResponder');

afterEach((() => {
    jest.restoreAllMocks();
}));

[":beer:", 
":beers:", 
":wine_glass:", 
":tumbler_glass:", 
":cocktail:", 
":tropical_drink:",
":sake:",
":cocktail:",
":champagne:",
":clinking_glasses:"].forEach((v,i,a) => {
    test(`message contains ${ v } emoji responds with the alcoholResponder`, async () => {
        let handler = new AlcoholHandler();
        const responderSpy = jest.spyOn(alcoholResponder, 'getResponse');

        let request = {
            payload: {
                text: v
            }
        };

        let response = await handler.send(request);

        expect(responderSpy).toHaveBeenCalled();
    });
});

test('message without an alcohol-related emoji passes to inner handler', async () => {
    let handler = new AlcoholHandler();

    handler.innerHandler = {
        send: jest.fn()
    };

    let response = await handler.send({
        payload: {
            text: "no alcohol emoji"
        }
    });

    expect(handler.innerHandler.send).toHaveBeenCalled();
});
