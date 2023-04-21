console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = []
function addItem (item) {
   item = basket.push('apple'); 
    console.log (basket[item]);
    if (basket.length > 0);
    return true;
  }


  function ListItems () {
    for (items of basket)
    console.log ('for of loop', items)
  }

  function Empty () {
    return basket[item] = basket[];
 
   }

   //------------Strech Goals-------------------//

   const maxItems = 5;
   function itsFull() {
    if (basket.length < maxItems) {
    return false;
    } else return false;
  }