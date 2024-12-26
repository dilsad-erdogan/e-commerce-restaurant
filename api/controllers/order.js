const Order = require("../models/Order");

async function setOrder (req, res) {
    try{
        const { table_id, products, paymentStatus, totalPrice } = req.body;

        const order = new Order({
            table_id: table_id,
            products: products,
            paymentStatus: paymentStatus,
            totalPrice: totalPrice,
            date_time: Date.now(),
            is_active: true
        });

        const savedOrder = await order.save();
        if(savedOrder) {
            res.status(201).json({ success: true, data: savedOrder });
        } else {
            res.status(400).json({ success: false, message: 'Order error!' });
        }
    } catch(error){
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function getOrder (req, res) {
    try{
        const order = await Order.find({ is_active: true });

        if(order) {
            res.status(200).json({ success: true, data: order })
        } else {
            res.status(404).json({ success: false, message: 'Order not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getOrderById (req, res) {
    try{
        const id = req.params.id;
        const order = await Order.findById(id);

        if(order && order.is_active === true){
            res.status(200).json({ success: true, data: order });
        } else {
            res.status(404).json({ success: false, error: 'Order not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function updateTable (req, res) {
    try{
        const id = req.params.id;
        const { table_id } = req.body;

        const order = await Order.findById(id);
        if(!order) {
            return res.status(404).json({ success: false, message: 'Online order not found!' });
        }

        order.table_id = table_id;
        order.save();

        res.status(200).json({ success: true, message: 'Order table_id updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateStatus (req, res) {
    try{
        const id = req.params.id;
        const { products } = req.body;

        const order = await Order.findById(id);
        if(!order) {
            return res.status(404).json({ success: false, message: 'Online order not found!' });
        }

        order.products = products;
        order.save();

        res.status(200).json({ success: true, message: 'Order products updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateStatus (req, res) {
    try{
        const id = req.params.id;
        const { paymentStatus } = req.body;

        const order = await Order.findById(id);
        if(!order) {
            return res.status(404).json({ success: false, message: 'Online order not found!' });
        }

        order.paymentStatus = paymentStatus;
        order.save();

        res.status(200).json({ success: true, message: 'Order payment status updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updatePrice (req, res) {
    try{
        const id = req.params.id;
        const { totalPrice } = req.body;

        const order = await Order.findById(id);
        if(!order) {
            return res.status(404).json({ success: false, message: 'Online order not found!' });
        }

        order.totalPrice = totalPrice;
        order.save();

        res.status(200).json({ success: true, message: 'Order total price updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function deleteOrder (req, res) {
    try{
        const id = req.params.id;
        const order = await Order.findById(id);

        if(!order) {
            res.status(404).json({ success: false, message: 'Order not found!' });
        } else {
            await order.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'Order deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = { setOrder, getOrder, getOrderById, updateTable, updateStatus, updatePrice, deleteOrder }