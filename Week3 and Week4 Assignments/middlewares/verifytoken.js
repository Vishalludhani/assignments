import jwt from 'jsonwebtoken'
export function verifyToken(req, res, next) {
    //Get token from req
    let signedtoken = req.cookies.token;
    if (!signedtoken) {
        return res.status(401).json({ message: "Please login first" })
    }
    //Verify the token
    let decodedToken = jwt.verify(signedtoken, 'abcdef')
    next();
}