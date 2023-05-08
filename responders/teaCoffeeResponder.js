const responses = [    
    "Yes, please!",
    "I'd love a cuppa!",
    "Be a good sport and grab one for me too."
];

const getResponse = (suffixEmoji) => {
    let response = responses[Math.floor(Math.random() * responses.length)];

    if (!!suffixEmoji) {
        response = `${ response } ${suffixEmoji}`;        
    }

    return response;
};

module.exports = {
    getResponse
};