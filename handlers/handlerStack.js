class HandlerStack {
    handlers = [];

    add(handler) {
        if (this.handlers.length > 0) {
            this.handlers[this.handlers.length-1].innerHandler = handler;
        }
        
        this.handlers.push(handler);
    }

    async start(request) {
        return await this.handlers[0].send(request);
    }
}

module.exports = HandlerStack;