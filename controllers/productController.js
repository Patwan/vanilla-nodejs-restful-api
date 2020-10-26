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
        const product = await Product.findById(id)

        if(!product){
            res.writeHead(404, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify({ message : 'Product Not found'}))
        }
        else{
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify(product))
        }
    }
    catch(error){
        console.log(error)
    }
}


//@desc Create a Product
//@route POST /api/products
async function createProduct(req, res){
    try{

        const product = {
            title: 'Test product',
            description: 'This is my product',
            price: 100
        }

        const newProduct = Product.create(product)

        res.writeHead(201, { 'Content-type' : 'Application/json'})
        return res.end(JSON.stringify(newProduct))
    }
    catch(error){
        console.log(error)
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct
}