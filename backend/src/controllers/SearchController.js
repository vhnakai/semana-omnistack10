const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
    async index(req, res){
        console.log(req.query)

        const { latitude, longetude, techs} = req.query
        //Buscar todos devs num raio de 10 km
        //filtrar por tech

        const techArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in:techArray
            },
            location: {
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [ logitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        })
        return  res.json({devs})

    }
}