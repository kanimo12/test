function printNumber(num) {

    console.log(num);
  
  }
  
  
  console.log(1);
  
  
  setTimeout(printNumber, 0, 2);
  
  
  setTimeout(printNumber, 100, 3);
  
  
  console.log(4);
  /*explain the code 
  1. first console.log(1) print the 1
  2.The second setTimeout(printNumber, 0, 2) schedules
   the printNumber function to be executed with the argument 2.
  3.The third setTimeout(printNumber, 100, 3) schedules 
   the printNumber function to be executed with the argument
    3 after a delay of 100 milliseconds. 
  4.The console.log(4) will print 4 to the console.
  */
  
  