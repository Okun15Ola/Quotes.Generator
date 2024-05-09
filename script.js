


const myQuotes = [
    {
        id: 1,
        quotes : 'Love is good when it is properly expressed',
        author: 'Nelson James'
    },
    {
        id: 2,
        quotes : 'God is a spirit, yes! You can only be connected with him when you are in the spirit',
        author: 'Okuns Dev'
    },
    {
        id: 3,
        quotes : 'An idle hand is a devils workshop',
        author: 'Adams Kelvin'
    },
    {
        id: 4,
        quotes : 'One of thee thing that must not be found wanting in a man life is love',
        author: 'Shake Spear'
    },
    {
        id: 6,
        quotes : 'It is better to have self acceptance than to feel let people cast pity on us',
        author: 'David SOn'
    },
    {
        id: 7,
        quotes : 'A big man is an influencer',
        author: 'Jacob Nut'
    },
    {
        id: 9,
        quotes : 'Life is a test, trust and a temporary Asssignment',
        author: 'Rick Warren'
    },
    {
        id: 10,
        quotes : 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
        author: ' Helen Keller'
    },
    {
        id: 11,
        quotes : 'The only person you are destined to become is the person you decide to be.',
        author: ' Ralph Waldo Emerson'
    },
    {
        id: 12,
        quotes : 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that',
        author: 'Martin Luther King Jr'
    },
    {
        id: 13,
        quotes : 'Two roads diverged in a yellow wood, And I - I took the one less traveled by, And that has made all the difference',
        author: 'Robert Frost'
    },
    {
        id: 14,
        quotes : 'The mind is everything. What you think you become',
        author: 'Buddha'
    },
    {
        id: 15,
        quotes : 'The difference between ordinary and extraordinary is that little extra',
        author: 'Jimmy Johnson'
    },
    {
        id: 16,
        quotes : "Whether you think you can or you think you can't, you're",
        author: 'Henry Ford'
    },
    {
        id: 17,
        quotes : "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle",
        author: 'Steve Jobs'
    },
    {
        id: 18,
        quotes : 'Curiosity about life in all its aspects, I think, is still the secret of great creative people',
        author: 'Leo burnett'
    },
    {
        id: 19,
        quotes : 'The important thing is not to stop questioning. Curiosity has its own reason for existing',
        author: ' Albert Einstein'
    },
    {
        id: 20,
        quotes : 'The only true wisdom is in knowing you know nothing',
        author: 'Socrates'
    },
];



const myButton = document.querySelector('.btn');



const handleClick = () => {
   
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    const blue = Math.floor(Math.random() * 256);

    const color = `rgb(${red}, ${green}, ${blue})`

    document.body.style.backgroundColor = color;

    const randomQuote = Math.floor(Math.random() * myQuotes.length)

    const newQuotes = myQuotes[randomQuote].quotes;

    const newAuthor = myQuotes[randomQuote].author;

    const myDiv = document.querySelector('.card');

    myDiv.innerHTML = ` <h3>"${newQuotes}"</h3>
    <p>${newAuthor}</p>`;
    
    
}
myButton.addEventListener('click', handleClick);



