const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const games = [
    {
        _id: 1,
        name: 'Bomb Finder',
        img: './assets/bombFinder.svg',
        parties: [
            {
                _id: 1,
                partyName: 'Party1',
                partyDesc: 'We just wanna have funnnn',
                users: [
                    'user1',
                    'user2',
                    'user3',
                    'user4'
                ]
            },
            {
                _id: 2,
                partyName: 'Party2',
                partyDesc: 'We just wanna have funnnn',
                users: [
                    'user4',
                    'user5',
                    'user6',
                ]
            }
        ]
    },
    {
        _id: 2,
        name: 'Backpac Man',
        img: './assets/backPacMan.jpg',
        parties: [
            {
                _id: 1,
                partyName: 'Party1',
                partyDesc: 'We just wanna have funnnn',
                users: [
                    'user1',
                    'user2',
                    'user3',
                ]
            }
        ]
    },
    {
        _id: 3,
        name: 'Apple',
        img: './assets/apple.svg',
        parties: [
            {
                _id: 1,
                partyName: 'Party1',
                partyDesc: 'We just wanna have funnnn',
                users: [
                    'user1',
                    'user2',
                    'user3',
                ]
            }
        ]
    },
    {
        _id: 4,
        name: 'Blockade',
        img: './assets/blockade.svg',
        parties: [
            {
                _id: 1,
                partyName: 'Party1',
                partyDesc: 'We just wanna have funnnn',
                users: [
                    'user1',
                    'user2',
                    'user3',
                ]
            }
        ]
    },
    {
        _id: 5,
        name: 'Battle Boats',
        img: './assets/battleBoats.svg',
        parties: [
            {
                _id: 1,
                partyName: 'Party1',
                partyDesc: 'We just wanna have funnnn',
                users: [
                    'user1',
                    'user2',
                    'user3',
                ]
            }
        ]
    },
];

app.get('/', (req, res) => {
    res.render('./pages/index');
});
app.get('/about', (req, res) => {
    res.render('./pages/about');
});
app.get('/games', (req, res) => {
    res.render('./pages/games', {
        games
    });
});
app.get('/parties', (req, res) => {
    res.render('./pages/parties', {
        games,
        id: req.query.id
    });
});
app.get('/party', (req, res) => {
    res.render('./pages/party', {
        games,
        game: req.query.game,
        id: req.query.id
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});