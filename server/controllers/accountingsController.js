import { Accounting } from '../models/Accounting.js';

const getAccountings = async (req, res, next) => {
    try {
        const form = req.params.form;

        let data = await Accounting.findAll({ where: { form } });
        res.send(data[0]);
    } catch (err) {
        next(err);
    }
};

export { getAccountings };