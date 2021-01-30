1. it will print out the length of prices array in line 11. because console.log (i) will print out the value of i, and after the loop, i is equal to the prices.length.

2. it will print out the discounted price of last element in prices array( discountedPrices = last element in prices array * ( 1 - discounted)) in line 12.

3. it will print out the finalP price of last element in prices array in line 13.

4. the function will return [50, 100, 150] which is the original prices take 50% discount.

5. it print out an error message: Uncaught ReferenceError: i is not defined on line 11. Because we define "let i" in for loop scope, it it undefined outside the for loop.

6. it print out an error message: Uncaught ReferenceError: discounted is not defined on line 12. Because we define discounted in for loop scope, it it undefined outside the for loop.

7. it will print out the finalP price of last element in prices array in line 13. because it's defined outside of the for loop and used in outside of the for loop. 

8. the function will return [50, 100, 150] which is the original prices take 50% discount.

9. it print out an error message: Uncaught ReferenceError: i is not defined on line 11. Because we define "let i" in for loop scope, it it undefined outside the for loop.

10. it print out an error message: Uncaught TypeError: Assignment to constant variable. Because discountedPrice is declared with const, thus it cannot be changed.

11. this will cause an error because discountedPrice is declared with const, thus we cannot use it to change the finalPrice.

12. same error as question 11, because variables are declared with const.

13A. student.name
  B. student['Grad Year']
  C. student.greeting()
  D. student['Favorite Teacher'].name
  E. student.courseLoad[0]
  
14. A. '32', because '3' is type of string so 2 is converted to string '2' . 

    B. 1, because string doesn't have substraction, so '3' is converted to number 3.
    
    C. 3, 3 + null = 3 + 0 = 3.
    
    D. '3null', '3' + null = '3null' because null is converted to the type of string
    
    E. 4, true + 3 = 1 + 3 = 4.
    
    F. 0, false + null = 0 + 0 = 0.
    
    G. '3undefined', undefined is converted to string.
    
    H. NaN, NaN is same as undefined in JS.
    
    
15. A. true, JS converted '2' as number 2, and 2 > 1.

    B. false, '2' is greater than '1' in string comparison.
    
    C. true, JS converted '2' as number 2, and 2 == 2.
    
    D. false, === chech both variables type, and they are different.
    
    E. false, true == 1 != 2.
    
    F. true, because Boolean(2) will return true.
    
    
16. == in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values.

17. it will print out "how are you?". because in the first comparison, true is converted to 1, and 2 is not equal 1. Next comparison 2 is same as ture in Boolean, so it will print out the message: how are you?


 19.  it will print out [6, 8, 10].
      array = [1, 2, 3].
      for array[0] = 1: 
        it changes to 3 when we do the function(array[0]) = function(1) = 1 + 2 = 3
        and when push it to the newArr, it will be 3 * 2 = 6.

      for array[1] = 2: 
        it changes to 4 when we do the function(array[0]) = function(1) = 2 + 2 = 4
        and when push it to the newArr, it will be 4 * 2 = 8.

      for array[2] = 3: 
        it changes to 5 when we do the function(array[0]) = function(1) = 3 + 2 = 5
        and when push it to the newArr, it will be 5 * 2 = 10.
      
      
 21. it will print out 1 4 3 2.
