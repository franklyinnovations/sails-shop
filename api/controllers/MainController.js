/**
 * MainController
 *
 * @description :: Server-side logic for managing main functions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
  /**
   * `MainController.index()`
   */
  index: function (req, res) { 
    Product.find({status:"active", featured: true}, function(err, products){
      res.view('homepage', {
        products: products
      });
    });
  }
  
}