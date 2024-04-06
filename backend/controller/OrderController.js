const Order = require('../models/OrderModel')



const OrderData = async (req, res) => {
    try {
        let data = req.body.order_data;
        data.unshift({ Order_date: req.body.order_date });

        let eId = await Order.findOne({ 'username': req.body.username });
        console.log("Existing User:", eId);

        if (eId === null) {
            // If user does not exist, create a new order
            await Order.create({
                username: req.body.username,
                order_data: [data]
            });
        } else {
            // If user exists, update their existing order data
            await Order.findOneAndUpdate(
                { username: req.body.username },
                { $push: { order_data: data } }
            );
        }

        res.json({ success: true });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};



const myOrderData = async (req, res) => {
    try {
        console.log(req.body.username)
        let data = await Order.findOne({ 'username': req.body.username })
        res.json({orderData:data})
    } catch (error) {
        res.send("Error",error.message)
    }
    
}



module.exports = {OrderData,myOrderData}