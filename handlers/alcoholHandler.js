const ResponderHandler = require("./responderHandler");
const alcoholResponder = require("../responders/alcoholResponder");

module.exports = class AlcoholHandler extends ResponderHandler {
    matchedEmoji = null;

    shouldRespond(request) {
        let matches = request.payload.text.match(/:(beer|beers|wine_glass|tumbler_glass|cocktail|tropical_drink|sake|cocktail|champagne|clinking_glasses):/i);

        if (!matches) {
            return false;
        }

        if (matches.length === 0) {
            return false;
        }

        this.matchedEmoji = matches[0];
        request.context.shouldRespondDirectly = true;

        return true;
    }

    getResponse(request) {
        return alcoholResponder.getResponse(this.matchedEmoji);
    }
}