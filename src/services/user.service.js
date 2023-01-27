const Joi = require('joi');
const tokenJwt = require('jsonwebtoken');
const { User } = require('../models');

const userSchemas = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: false }).required(),
    password: Joi.string().min(6).required(),
});

const newUser = async (displayName, email, password, image) => {
    const validate = userSchemas.validate({ displayName, email, password });
    if (validate.error) {
        console.log(validate.error.message, 'aaaaah');
        return { status: 400,
            message: { message: validate.error.message } };
    }
    const findUser = await User.findOne({ where: { email } });
    if (findUser) {
        return { status: 409,
            message: { message: 'User already registered' },
        };
    }
    await User.create({ displayName, email, password, image });
    const payload = { data: { email, password } };
    const token = tokenJwt.sign(payload, process.env.JWT_SECRET);
    return { status: 200,
         message: { token },
    };
};

module.exports = {
    newUser,
};