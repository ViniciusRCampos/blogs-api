const validateLogin = (req, res, Next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json(
            { 
                message: 'Some required fields are missing',
            },
        );
    }
    Next();
};

module.exports = {
    validateLogin,
};