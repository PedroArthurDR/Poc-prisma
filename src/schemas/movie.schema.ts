import Joi from "joi"

export const movieSchema = Joi.object({
    name: Joi.string().required(),
    stream: Joi.string().required(),
    genderId: Joi.number().required(),
    status: Joi.string().required(),
    description: Joi.string()
})

export const updateMovieSchema = Joi.object({
    status:Joi.string().required(),
  description:Joi.string()
})