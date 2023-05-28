import { Patent } from '../models/Patent.js';

const getAllPatents = async (req, res, next) => {
    try {
        let data = await Patent.findAll({ attributes: ["type_of_activity", "price"] });
        data = data.map((patent) => ({ type: patent.type_of_activity, price: patent.price }));
        res.send(data);
    } catch (err) {
        next(err);
    }
};

export { getAllPatents };