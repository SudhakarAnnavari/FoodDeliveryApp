const DisplayData = async (req, res) => {
  try {
    
    res.send([global.food_items,global.food_categorys]);
  } catch (err) {
    console.log(err);
    res.send("server err");
  }
};

module.exports = {DisplayData}
