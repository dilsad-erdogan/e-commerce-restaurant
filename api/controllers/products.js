const Product = require("../models/Products");

async function setProduct (req, res) {
    try{
        const { cat_id, name, description, image } = req.body;

        const product = new Product({
            cat_id: cat_id,
            name: name,
            description: description,
            image: image,
            date_time: Date.now(),
            is_active: true
        });

        const savedProduct = await product.save();
        if(savedProduct) {
            res.status(201).json({ success: true, data: savedProduct });
        } else {
            res.status(400).json({ success: false, message: 'Product error!' });
        }
    } catch(error){
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function getProduct (req, res) {
    try{
        const product = await Product.find({ is_active: true });

        if(product) {
            res.status(200).json({ success: true, data: product })
        } else {
            res.status(404).json({ success: false, message: 'Product not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getProductById (req, res) {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);

        if(product && product.is_active === true){
            res.status(200).json({ success: true, data: product });
        } else {
            res.status(404).json({ success: false, error: 'Product not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function updateCatId (req, res) {
    try{
        const id = req.params.id;
        const { cat_id } = req.body;

        const product = await Product.findById(id);
        if(!product) {
            return res.status(404).json({ success: false, message: 'Categorie not found!' });
        }

        product.cat_id = cat_id;
        product.save();

        res.status(200).json({ success: true, message: 'Product updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateName (req, res) {
    try{
        const id = req.params.id;
        const { name } = req.body;

        const categorie = await Product.findById(id);
        if(!categorie) {
            return res.status(404).json({ success: false, message: 'Categorie not found!' });
        }

        categorie.name = name;
        categorie.save();

        res.status(200).json({ success: true, message: 'Product updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateDescription (req, res) {
    try{
        const id = req.params.id;
        const { description } = req.body;

        const product = await Product.findById(id);
        if(!product) {
            return res.status(404).json({ success: false, message: 'Categorie not found!' });
        }

        product.description = description;
        product.save();

        res.status(200).json({ success: true, message: 'Product updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateImage (req, res) {
    try{
        const id = req.params.id;
        const { image } = req.body;

        const product = await Product.findById(id);
        if(!product) {
            return res.status(404).json({ success: false, message: 'Categorie not found!' });
        }

        product.image = image;
        product.save();

        res.status(200).json({ success: true, message: 'Product updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function deleteProduct (req, res) {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);

        if(!product) {
            res.status(404).json({ success: false, message: 'Product not found!' });
        } else {
            await product.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'Product deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = { setProduct, getProduct, getProductById, updateCatId, updateName, updateDescription, updateImage, deleteProduct }