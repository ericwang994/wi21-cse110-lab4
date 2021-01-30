What was the bug?

The bug was that function calculateSum(num1, num2) takes two argument as type of string, so it returns a string.

How would you fix it? 

I have changed the type of num1 and num2 as let result = parseInt(num1) + parseInt(num2), then it returns the sum of two numbers.

1. citylots.json

2. part2.js

3. 11.7MB

4. 8.07s

5. User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36

6. Server: Apache

7. Last-Modified: Tue, 26 Jan 2021 22:14:13 GMT

8. application/json

9. Request call stack: 

      fetchData @ part2.js:2
      onclick @ (index):21

  
