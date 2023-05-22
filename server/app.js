import express from 'express'

import { Industry } from './models/Industry.js';
const app = express();

app.get('/b', (req, res) => {
    (async () => {
        const newUser = await Industry.create({ name: 'chemistry1' });
        console.log('Новый пользователь был добавлен:', newUser.toJSON());
    })();
});

app.get('/c', (req, res) => {
    Industry.destroy({
        where: {},
    })
    .then(() => {
        console.log('Таблица успешно очищена.');
    })
    .catch((error) => {
        console.error('Ошибка при очистке таблицы:', error);
    });
});

app.listen(3000, () => { console.log('Server is running on port 3000');
});
