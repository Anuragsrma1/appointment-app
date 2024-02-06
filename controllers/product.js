const Product = require('../models/user');

exports.postProduct = async (req, res, next) => {
  // console.log(req.body);
  try {
    const name = req.body.Name;
    const phone = req.body.Phone;
    const email = req.body.Email;
    const data = await Product.create({
      name: name,
      phone: phone,
      email: email
    });
    res.status(201).json({ newUser: data });
    console.log("data---------",data)
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}


exports.DeletePost = async(req, res, next )=>{
  try{
  ProdId = req.params.id;
  // console.log(ProdId);
 let DeleteItem = await Product.findByPk(ProdId)
//  console.log(DeleteItem);
   Product.destroy({where : {id: ProdId}})
  res.status(200).json({deletedOrder: DeleteItem});
} catch {
  console.log("Delete Error");
}
}


exports.GetAllData = async (req, res, next) => {
  try{
 let product =   await Product.findAll()
 res.status(200).json({product: product})
  } catch(err){
    res.status(500).json({Error : err});
  }
}