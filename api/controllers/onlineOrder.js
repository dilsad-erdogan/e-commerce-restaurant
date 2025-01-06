const OnlineOrder = require("../models/OnlineOrder");

async function setOnlineOrder (req, res) {
    try{
        const { user_id, products, address, totalPrice, deliveryStatus } = req.body;

        const order = new OnlineOrder({
            user_id: user_id,
            products: products,
            address: address,
            totalPrice: totalPrice,
            deliveryStatus: deliveryStatus,
            date_time: Date.now(),
            is_active: true
        });

        const savedOnlineOrder = await order.save();
        if(savedOnlineOrder) {
            res.status(201).json({ success: true, data: savedOnlineOrder });
        } else {
            res.status(400).json({ success: false, message: 'OnlineOrder error!' });
        }
    } catch(error){
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function getOnlineOrder (req, res) {
    try{
        const order = await OnlineOrder.find();

        if(order) {
            res.status(200).json({ success: true, data: order })
        } else {
            res.status(404).json({ success: false, message: 'OnlineOrder not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getActiveOnlineOrder (req, res) {
    try{
        const order = await OnlineOrder.find({ is_active: true });

        if(order) {
            res.status(200).json({ success: true, data: order })
        } else {
            res.status(404).json({ success: false, message: 'OnlineOrder not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getOnlineOrderById (req, res) {
    try{
        const id = req.params.id;
        const order = await OnlineOrder.findById(id);

        if(order && order.is_active === true){
            res.status(200).json({ success: true, data: order });
        } else {
            res.status(404).json({ success: false, error: 'OnlineOrder not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function updateStatus (req, res) {
    try{
        const id = req.params.id;
        const { deliveryStatus } = req.body;

        const order = await OnlineOrder.findById(id);
        if(!order) {
            return res.status(404).json({ success: false, message: 'Online order not found!' });
        }

        order.deliveryStatus = deliveryStatus;
        order.save();

        res.status(200).json({ success: true, message: 'OnlineOrder updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function deleteOnlineOrder (req, res) {
    try{
        const id = req.params.id;
        const order = await OnlineOrder.findById(id);

        if(!order) {
            res.status(404).json({ success: false, message: 'OnlineOrder not found!' });
        } else {
            await order.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'OnlineOrder deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = { setOnlineOrder, getOnlineOrder, getActiveOnlineOrder, getOnlineOrderById, updateStatus, deleteOnlineOrder }