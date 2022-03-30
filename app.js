const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const games = [
    {
        _id: 1,
        name: 'Lorem Ipsum 1',
        img: 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png',
        parties: [
            {
                partyName: 'Party1',
                users: [
                    'user1',
                    'user2',
                    'user3',
                ]
            }
        ]
    },
    {
        _id: 2,
        name: 'Lorem Ipsum 2',
        img: 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png',
        parties: [
            {
                partyName: 'Party1',
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
        name: 'Lorem Ipsum 3',
        img: 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png',
        parties: [
            {
                partyName: 'Party1',
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
        name: 'Lorem Ipsum 4',
        img: 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png',
        parties: [
            {
                partyName: 'Party1',
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
        name: 'Lorem Ipsum 5',
        img: 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png',
        parties: [
            {
                partyName: 'Party1',
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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});