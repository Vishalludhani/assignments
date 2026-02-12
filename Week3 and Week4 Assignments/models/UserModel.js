import { Schema, model } from 'mongoose'

//Create User Schema
//This schema validation works only during the creation of user, not while updating
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minLength: [8, "Min Length should be 8"],
        maxLength: [22, "Maximum Length Exceeded"]
    },
    password: {
        type: String,
        required: [true, "Password is Compulsory"],
        minLength: [6, "Min Length should be 6"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, 'Age should be above 18']
    }
},{
    strict:"throw",//throws an error when new fields are added outside the schema
    timestamp:true,//gives timestamps as to when the user was created and updated
    versionKey: false
});



//Create User Model with the Schema
export const UserModel = model("user", userSchema)
//mongoose will take the name "user" and pluralizes it and then creates a collection of that name