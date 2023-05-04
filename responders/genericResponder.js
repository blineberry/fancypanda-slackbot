const genericResponses = [
    'Blimey.',
    'I say!',
    'ello!',
    'Ta!',
    'Right ho!',
    'Quite quite!',
    'Smashing!',
    'Now then!',
    'Chocks away!',
    'Pip pip!',
    'Tish tosh my good chap!',
    'A good day to you, old chap!',
    'Cheerio!',
    'That was unexpected.',
    'Top o\' the mornin\' to ya!',
    'Tally-ho!',
    'Poppycock!',
    'How \'bout a cuppa? :tea:',
];

const getResponse = () => {
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
};

module.exports = {
    getResponse
};