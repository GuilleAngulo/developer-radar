const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    
    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);

    },

    async update(req, res) {
        const { github_username, name, avatar_url, bio, techs, latitude, longitude } = req.body;
    
        const techsArray = parseStringAsArray(techs);
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        let dev = await Dev.findByIdAndUpdate(github_username, { 
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        });

        if (!dev) {
            return res.json({ error: 'Developer not found.'});
        }

        return res.json(dev);

    },


    async destroy(req, res) {
        const { github_username } = req.body;
        
        try {
            await Dev.findByIdAndRemove(github_username, { useFindAndModify: false });

            return res.json({ message: `Developer ${req.body.github_username} removed.`})

        } catch (err) {
            return res.json({ error: 'Error removing the developer.' });
        }
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const response = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, avatar_url, bio } = response.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }
    
        return res.json(dev);
    }
}