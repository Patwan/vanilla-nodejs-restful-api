const Product = require('../models/productModel')


//@desc Fetch ALL PRODUCTS
//@route GET /api/products
async function getProducts(req, res){
    try{
        const products = await Product.findAll()

        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.end(JSON.stringify(products))
    }
    catch(error){
        console.log(error)
    }
}

//@desc Fetch single product
//@route GET /api/product/:id
async function getProduct(req, res, id){
    try{
        const products = await Product.findAll()

        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.end(JSON.stringify(products))
    }
    catch(error){
        console.log(error)
    }
}


module.exports = {
    getProducts,
    getProduct
}