console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = []
    function addItem (item) {
        basket.push(item); 
        if (basket.length > 0) {
        return true;
        }
    }  
    addItem('banana');
    addItem('orange');
    addItem('apple');
        console.log ('basket', basket);
  


    var basket = ['orange','banana', 'apple']
 
    function ListItems () {
      for (i = 0 ; i < basket.length; i++);
      return basket;
    }
        console.log(ListItems());

   
 
    function Empty () {
        if (basket.length > 0);
        return basket.length = 0;
 
    }
        console.log('current basket array:', Empty());
      

   //------------Strech Goals-------------------//

   