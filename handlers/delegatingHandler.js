module.exports = class DelegatingHandler {
    innerHandler;

    async send(request) {
        if (!this.innerHandler) {
            return {
                type: 'response'
            };
        }

        return await this.innerHandler.send(request)
    }
}