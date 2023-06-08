functionName.call(arg1,arg2) -> to call a function direclty
arg1 -> points to "this" keyword
arg2 -> same as function args

functionName.apply(arg1,[arg2,arg3]) -> same as call , but second arg is a list

functionName.bind(arg1) -> return a function and it does not direclty call the fun, the returned fun can be called later.


**Currying in Javascript**
- Write a function
- Bind it to some default arguments , this will return a new function 
- You can make use of the new function
- If we pass extra argument it will be ignored
- We make a copy of a method and we make more mehodsout of it , by pre setting arguments.
-we can do function Currying using closures also.

** async vs Defer **
 Loading a webpage : 
  1. html parsing
  2. Loading scripts 
      i. Fetching script from network
      ii. Executing it line by line
Lets see cases of using async and defer in script tag,
Browser parsing html sees a script tag , finds a script tag-> fetch from network and execute it then and there(completes this) -> again parsing 
Actually js blocking parsing of html
When you use a async in script tag -> The scripts are fetched from netwrk asynchornously (available)-> executed then and there -> html parsing continues
Here html parsing blocked when script execution.
When you use defer -> Script are fetched async but executed once html parsing is done
If your scripts are dependent on each other better to use defer bcse it preserves order of execution.

**Event Bubbling and Capturing aka Trickling**
- Onclick of a div event handler calling hierarching in caseof bubbling would be:
   OnclickChild -> OnclickParent -> OnclickGrandParent
   useCapture in addeventlistener should be false
- in caseof Capturing would be 
   OnclickGrandParent -> OnclickParent -> OnclickChild
   useCapture in addeventlistener should be true
We can use a mix of true/false accordingly events will be triggered
We can stop event propagation by using e.StopPropagation() , bcse event propagation is expensive