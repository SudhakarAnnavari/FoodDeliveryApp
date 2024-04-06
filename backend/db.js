const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://annavarisudhakar:sudha93811@cluster0.kqhhvi1.mongodb.net/Foodie');
        console.log("mongo connected")
        const fetch_data = await mongoose.connection.db.collection("food_items");
        const data = await fetch_data.find({}).toArray();
        global.food_items = data;
        const food_category = await mongoose.connection.db.collection("food_categorys");
        const catData = await food_category.find({}).toArray();
        global.food_categorys = catData;
        
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectdb;
