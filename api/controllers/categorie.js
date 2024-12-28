const Categorie = require("../models/Categorie");

async function setCategorie (req, res) {
    try{
        const { name, description, image } = req.body;

        const categorie = new Categorie({
            name: name,
            description: description,
            image: image,
            date_time: Date.now(),
            is_active: true
        });

        const savedCategorie = await categorie.save();
        if(savedCategorie) {
            res.status(201).json({ success: true, data: savedCategorie });
        } else {
            res.status(400).json({ success: false, message: 'Categorie error!' });
        }
    } catch(error){
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function getCategorie (req, res) {
    try{
        const categorie = await Categorie.find({ is_active: true });

        if(categorie) {
            res.status(200).json({ success: true, data: categorie })
        } else {
            res.status(404).json({ success: false, message: 'Categorie not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getCategorieById (req, res) {
    try{
        const id = req.params.id;
        const categorie = await Categorie.findById(id);

        if(categorie && categorie.is_active === true){
            res.status(200).json({ success: true, data: categorie });
        } else {
            res.status(404).json({ success: false, error: 'Categorie not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function updateName (req, res) {
    try{
        const id = req.params.id;
        const { name } = req.body;

        const categorie = await Categorie.findById(id);
        if(!categorie) {
            return res.status(404).json({ success: false, message: 'Categorie not found!' });
        }

        categorie.name = name;
        categorie.save();

        res.status(200).json({ success: true, message: 'Categorie updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateDescription (req, res) {
    try{
        const id = req.params.id;
        const { description } = req.body;

        const categorie = await Categorie.findById(id);
        if(!categorie) {
            return res.status(404).json({ success: false, message: 'Categorie not found!' });
        }

        categorie.description = description;
        categorie.save();

        res.status(200).json({ success: true, message: 'Categorie updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateImage (req, res) {
    try{
        const id = req.params.id;
        const { image } = req.body;

        const categorie = await Categorie.findById(id);
        if(!categorie) {
            return res.status(404).json({ success: false, message: 'Categorie not found!' });
        }

        categorie.image = image;
        categorie.save();

        res.status(200).json({ success: true, message: 'Categorie updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function deleteCategorie (req, res) {
    try{
        const id = req.params.id;
        const categorie = await Categorie.findById(id);

        if(!categorie) {
            res.status(404).json({ success: false, message: 'Categorie not found!' });
        } else {
            await categorie.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'Categorie deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = { setCategorie, getCategorie, getCategorieById, updateName, updateDescription, updateImage, deleteCategorie }