import { Industry } from '../models/Industry.js';

const getAllIndustries = async (req, res, next) => {
    try {
        let data = await Industry.findAll({ attributes: ["industries"] });
        data = data.map((industry) => industry.industries.replace('\n', ''));
        res.json(data);
    } catch (err) {
        next(err);
    }
};

export { getAllIndustries };