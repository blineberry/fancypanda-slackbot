const responses = [    
    "Ah, a tipple _would_ be nice, old bean.",
    "Yes, please!",
    "Cheers, old sport!",
    "Don't mind if I do, sir!",
    "Bottoms up, old sport!"
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