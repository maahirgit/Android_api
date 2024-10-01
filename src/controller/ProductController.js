const productSchema = require('../model/ProductModel')

const addProduct = async(req,res) => {
    try{
        const addproduct = await productSchema.create(req.body)
        res.status(201).json({
            message : "Product Added Successfully",
            saved : addproduct
        })
    }catch(error){
        res.status(500).json({
            status : "error",
            message : error.message
        })
    }
}

module.exports = {
    addProduct
}