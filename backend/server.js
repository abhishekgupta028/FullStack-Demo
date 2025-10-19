import express from 'express';

const app = express()

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('Hello from Express server!')
// });

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A Joke",
            content: "The first joke"
        },
        {
            id: 2,
            title: "Another Joke",
            content: "The second joke"
        },
        {
            id: 3,
            title: "Yet Another Joke",
            content: "The third joke"
        },
        {
            id: 4,
            title: "Funny Joke",
            content: "The fourth joke"
        },
        {
            id: 5,
            title: "Last Joke",
            content: "The fifth joke"
        }
    ]
    res.send(jokes);
});


const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});