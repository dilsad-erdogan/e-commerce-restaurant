const Order = require("../models/Order");
const Product = require("../models/Product");

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
        const order = await Order.find();
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

async function getActiveOrder (req, res) {
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

async function getActiveOrdersByTableId(req, res) {
    try {
      const id = req.params.id;
      const activeOrders = await Order.find({ table_id: id, paymentStatus: false });
  
      if (activeOrders.length > 0) {
        res.status(200).json({ success: true, data: activeOrders });
      } else {
        res.status(404).json({ success: false, message: "No active orders found for this table." });
      }
    } catch (error) {
      console.error("Error fetching active orders:", error);
      res.status(500).json({ error: "Internal server error." });
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

async function updateProducts(req, res) {
    try {
        const id = req.params.id;
        const { action, productId, quantity, newProduct } = req.body;

        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found!' });
        }

        switch (action) {
            case 'add':
                if (!newProduct || !newProduct.product || !newProduct.quantity) {
                    return res.status(400).json({ success: false, message: 'Invalid product data!' });
                }

                const productToAdd = await Product.findById(newProduct.product);
                if (!productToAdd) {
                    return res.status(404).json({ success: false, message: 'Product not found!' });
                }

                order.products.push(newProduct);
                order.totalPrice += productToAdd.price * newProduct.quantity;
                break;

            case 'update':
                const productToUpdate = order.products.find(
                    (item) => item.product.toString() === productId
                );
                if (!productToUpdate) {
                    return res.status(404).json({ success: false, message: 'Product not found in order!' });
                }

                const productInfo = await Product.findById(productId);
                if (!productInfo) {
                    return res.status(404).json({ success: false, message: 'Product not found!' });
                }

                const priceDifference = productInfo.price * (quantity - productToUpdate.quantity);
                order.totalPrice += priceDifference;

                productToUpdate.quantity = quantity;
                break;

            case 'delete':
                const productToDelete = order.products.find(
                    (item) => item.product.toString() === productId
                );
                if (!productToDelete) {
                    return res.status(404).json({ success: false, message: 'Product not found in order!' });
                }

                const productDetails = await Product.findById(productId);
                if (!productDetails) {
                    return res.status(404).json({ success: false, message: 'Product not found!' });
                }

                order.totalPrice -= productDetails.price * productToDelete.quantity;
                order.products = order.products.filter(
                    (item) => item.product.toString() !== productId
                );
                break;

            default:
                return res.status(400).json({ success: false, message: 'Invalid action!' });
        }

        await order.save();
        res.status(200).json({ success: true, message: 'Order products updated successfully', data: order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error!' });
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

module.exports = { setOrder, getOrder, getActiveOrder, getActiveOrdersByTableId, getOrderById, updateTable, updateProducts, updateStatus, updatePrice, deleteOrder }