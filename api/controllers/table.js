const Table = require("../models/Tables");

async function setTable (req, res) {
    try{
        const { name, numberOfPeople, occupancyRate } = req.body;

        const table = new Table({
            name: name,
            numberOfPeople: numberOfPeople,
            occupancyRate: occupancyRate,
            date_time: Date.now(),
            is_active: true
        });

        const savedTable = await table.save();
        if(savedTable) {
            res.status(201).json({ success: true, data: savedTable });
        } else {
            res.status(400).json({ success: false, message: 'Table error!' });
        }
    } catch(error){
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function getTable (req, res) {
    try{
        const table = await Table.find({ is_active: true });

        if(table) {
            res.status(200).json({ success: true, data: table })
        } else {
            res.status(404).json({ success: false, message: 'Table not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getTableById (req, res) {
    try{
        const id = req.params.id;
        const table = await Table.findById(id);

        if(table && table.is_active === true){
            res.status(200).json({ success: true, data: table });
        } else {
            res.status(404).json({ success: false, error: 'Table not found!' });
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

        const table = await Table.findById(id);
        if(!table) {
            return res.status(404).json({ success: false, message: 'Categorie not found!' });
        }

        table.name = name;
        table.save();

        res.status(200).json({ success: true, message: 'Table updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateNumber (req, res) {
    try{
        const id = req.params.id;
        const { numberOfPeople } = req.body;

        const table = await Table.findById(id);
        if(!table) {
            return res.status(404).json({ success: false, message: 'Categorie not found!' });
        }

        table.numberOfPeople = numberOfPeople;
        table.save();

        res.status(200).json({ success: true, message: 'Table updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateRate (req, res) {
    try{
        const id = req.params.id;
        const { occupancyRate } = req.body;

        const table = await Table.findById(id);
        if(!table) {
            return res.status(404).json({ success: false, message: 'Categorie not found!' });
        }

        table.occupancyRate = occupancyRate;
        table.save();

        res.status(200).json({ success: true, message: 'Table updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function deleteTable (req, res) {
    try{
        const id = req.params.id;
        const table = await Table.findById(id);

        if(!table) {
            res.status(404).json({ success: false, message: 'Table not found!' });
        } else {
            await table.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'Table deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = { setTable, getTable, getTableById, updateName, updateNumber, updateRate, deleteTable }