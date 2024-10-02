const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/gofoodmern"; // Change to your local MongoDB database name

const mongodb = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB (Compass)");

        const fetchedFoodItems = await mongoose.connection.db.collection("food_items").find({}).toArray();
        global.food_items = fetchedFoodItems;

        const fetchedFoodCategories = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        global.foodCategory = fetchedFoodCategories;

        console.log(global.food_items);
        console.log(global.foodCategory);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongodb;
