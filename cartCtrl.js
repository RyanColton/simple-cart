exports.get = function(req, res){
    res.status(200).json(req.session.cart)
  }

exports.addProduct = function(req, res){
  /**
  * Take in a product from req.body
  * add it to the user cart session
  **/
    if (Array.isArray(req.session.cart)){
      req.session.cart.push(req.body)
    } else{
      req.session.cart = [req.body]
    }
    res.status(200).send('ok')
 }
