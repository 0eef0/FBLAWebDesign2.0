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
                partyName: 'Razzle Dazzle',
                partyDesc: 'We tryna win over here',
                users: [
                    'CarelessWhisper123',
                    'Bonfire03',
                    'Hypnotize2014',
                    'Poetry19'
                ]
            },
            {
                _id: 2,
                partyName: 'Rockin N Rollin',
                partyDesc: 'We Vibe',
                users: [
                    'ProfessinalGamer12',
                    'SnoopD0GG19',
                    'Cbreezy05',
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
                partyName: 'Hoopaloza',
                partyDesc: 'We fight',
                users: [
                    'KimmyK',
                    'Ye',
                    'Skete',
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
                partyName: 'Untamed Beasts',
                partyDesc: 'We killing it',
                users: [
                    'MJ23',
                    'KobeBean24',
                    'KDTrey7',
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
                partyName: 'Destiny Awaits',
                partyDesc: 'We the cool kids',
                users: [
                    'LBJ6',
                    'TB12',
                    'BuissnessIsBoomin',
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
                partyName: 'WildThings',
                partyDesc: 'We the best',
                users: [
                    'JAYT0',
                    'JayB7',
                    'TheHeartandSoul',
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