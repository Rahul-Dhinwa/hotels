const jwt = require('jsonwebtoken');
const { updateSearchIndex } = require('./models/person');
const jwtAuthMiddleware = (req, res, next) => {
    //Extract jwt token from request header
    const token = req.header.authhorization.split(' ')[1];

    if(!token) return res.status(401).json({ error: 'Unauthorized' });

    try{
        //verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Attach user information to the request object
        req.user = decoded
        next();

    }catch(err){
        console.error(err);
        res.status(401).json({error: 'Invalid token ' });

    }


    //Function to generate JWT token
    const generateToken = (userData) => {
        // Generate a new token using user Data
        return jwt.sign(userData, process.env.JWT_SECRET)
    }


}

module.exports = {jwtAuthMiddleware,generateToken}
