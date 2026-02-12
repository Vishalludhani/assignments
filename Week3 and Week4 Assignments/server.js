import exp, { response } from 'express'
import { userApp } from './APIs/UserAPI.js'
import { connect } from 'mongoose';
import { productApp } from './APIs/ProductAPI.js';
import cookieParser from 'cookie-parser';

const app = exp()

app.use(exp.json())

async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/anuragdb2') //return promise
        console.log("DB connection success")
        //Assigning port
        const port = 4000;
        app.listen(port/*,()=>console.log("server listening on 4000....")*/)
    }
    catch (err) {
        console.log("Error in DB connection", err)
    }
    /*.then(()=>console.log("Connected"))
    .catch((err)=>console.log("Not connected",err))
    it is the old method*/
}
app.use(cookieParser())
connectDB()


//if path starts with /user-api, forward req to userApp
app.use('/user-api', userApp);
app.use('/product-api', productApp);


//Cutomisizing the behaviour of the error handling
//using middleware
//always keep this at the end of the main file
function errorHandler(err, req, res, next) {
    res.json({ message: "error", response: err.message })
}

app.use(errorHandler)