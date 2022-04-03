const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const games = [
    {
        _id: 1,
        name: 'Apple',
        img: './assets/apple.svg',
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
                    'WillSlappySmith'
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
                    'Hov'
                ]
            },
            {
                _id: 2,
                partyName: 'Purple Backs',
                partyDesc: 'We fight',
                users: [
                    'MeekMilly',
                    'Nicki148',
                    'WayneLil10',
                    'BIGsean405',
                ]
            }
        ]
    },
    {
        _id: 3,
        name: 'Bomb Finder',
        img: './assets/bombFinder.svg',
        parties: [
            {
                _id: 1,
                partyName: 'Untamed Beasts',
                partyDesc: 'We killing it',
                users: [
                    'MJ23',
                    'KobeBean24',
                    'KDTrey7',
                    'ChefCurry30'
                ]
            },
            {
                _id: 2,
                partyName: 'Unstoppable Machine',
                partyDesc: 'We live over here',
                users: [
                    'Reggie3',
                    'Klay11',
                    'Beartron12',
                    'DonkeyDray23'
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
                    'GronkSmash'
                ]
            },
            {
                _id: 2,
                partyName: 'Ocean Kids',
                partyDesc: 'We just want to vibe',
                users: [
                    'JuliusOrange123',
                    'RJ3',
                    'GhostTY13',
                    'LuckyLuck12'
                ]
            }
        ]
    },
    {
        _id: 5,
        name: 'Battle Boats',
        img: './assets/battleBoats.jpg',
        parties: [
            {
                _id: 1,
                partyName: 'WildThings',
                partyDesc: 'We the best',
                users: [
                    'JAYT0',
                    'JayB7',
                    'TheHeartandSoul',
                    'BigAL'
                ]
            },
            {
                _id: 2,
                partyName: 'HurtinBros',
                partyDesc: 'We Better',
                users: [
                    'BennySim10',
                    'TrollEmbid21',
                    'JimmyBuckets22',
                    'Tyler14'
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
app.get('/contact', (req, res) => {
    res.render('./pages/contact');
});
app.get('/subscription', (req, res) => {
    res.render('./pages/subscription');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});