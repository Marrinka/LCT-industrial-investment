import express from 'express'

import { Industry } from './models/Industry.js';
import { AveragePriceMetre } from './models/AveragePriceMetre.js';
import { Equipment } from './models/Equipment.js';
const app = express();

app.get('/aaa', (req, res) => {
    (async () => {
        const newUser = await Industry.create({ name: 'chemistry1' });
        console.log('Новый пользователь был добавлен:', newUser.toJSON());
    })();
});

app.listen(3000, () => { console.log('Server is running on port 3000');
});
