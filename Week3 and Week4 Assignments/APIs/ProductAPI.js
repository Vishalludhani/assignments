import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
export const productApp = exp.Router()

productApp.post('/products',async (req,res)=>{
    let newProduct=req.body
    let newProdDoc=new ProductModel(newProduct)
    await newProdDoc.save()
    res.status(201).json({message:"New product saved"})
})

productApp.get('/products',async(req,res)=>{
    let productList=await ProductModel.find()
    res.status(200).json({message:"Products: ",payload:productList})
})

productApp.get('/products/:id',async(req,res)=>{
    let productid=req.params.id
    let productobj=await ProductModel.findById(productid)
    res.status(200).json({message:"Product: ",payload:productobj})
})

productApp.put('/products/:id',async(req,res)=>{
    let productid=req.params.id
    let modifiedproduct=req.body
    let newproduct=await ProductModel.findByIdAndUpdate(productid,{$set:{...modifiedproduct}},{new:true,runValidators:true}) //Because of the runValidators function, the validators run during updation also
    res.status(201).json({message:"Updated Details: ",payload:newproduct})
})