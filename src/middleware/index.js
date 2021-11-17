const { validateToken, generateToken, generateResetToken } = require('../utils')

const verifyToken = (type) => async(req, res, next) => {
    try {
        let token
        if(type === 'logged-in') {
            token = req.headers['x-access-token']
        } else {
            token = req.query.token
        }

        if (!token)
            return res.status(403).json({
                status: 'fail',
                message: 'No token provided.'
            })
        
        const tokenValidated = await validateToken(token, type)
        if(tokenValidated.message) {
            return res.status(403).json({
                status: 'fail',
                message: tokenValidated.message
            })
        }        
        const { email, id } = tokenValidated
        const [user] = await getUser(email)

        if (!user) {
            return res.status(403).json({
                status: 'fail',
                message: 'Failed to authenticate token.'
            })
        }

        delete user.password;
        req.user = user
        return next()
    }
    catch (err) {
        next(err)
    }
}
const validateUser = (data, type) => async (req, res, next) => {
    try {
        const getType = {
            body: req.body,
            params: req.params,
            query: req.query,
            headers: req.headers
        };
        const options = {
        language: { key: '{{key}}'}
        }
        const result = getType[type]
        const isValid = await data.schema.validate(result, options);
        if(!isValid.error) {
            req[type] = isValid.value;
            return next()
        }
        const { message } = isValid.error.details[0];
        return res.status(400).json({
            status: 'fail',
            message: message.replace(/[\"]/gi,""),
            errors: data.message
        })
    } catch (error) {
        next(error)
    }
}
module.exports= {
    validateUser,
    verifyToken,
    generateResetToken
}