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

Event Delegation: Based on event bubbling Lets say we have list of cards, 
instead of attaching event handlers to each of them , we can attach a single event handler to its parent. 
so when a child is clicked the event is handled by its parent through event bubbling.
e.target gives you the element eg: redirecting based on card clicked, 
In a form where you want all the input fields to be filled with uppercase. 
Pros: Saves memory by reducing the number of event handlers Mitigates the risk of performance bottleneck less code DOM Manipulation becomes smooth Cons: 
Some event's do not bubble up We should keep an eye on stop Propagation, in case you need event bubble up

Debouncing (prevents extra activations or slow functions from triggering too often. ):
This concept is used for performance optimization. Optimising search intervals 
This can be achieved using setTimeout getData() will get you the search results ,
but call this function with a delay of certain intervals using setTimeOut. 
If a key stroke occurs between that time interval we should clear that timer.

Throttling(to hold something / somebody) Throttling will delay the fun call on click event for next x duration. 
This will return a function that throttles your function call on event. 
We will have a flag , only when the flag, Once the function is called flag= false 
,it will be true after some duration of time. Handle argumnets using: context = this, args=arguments

Debouncing vs Throttlling : In Debouncing, we are setting and clearing the timer on each key event; 
Restart timer on every event. In Throttling, function will be called only after the time interval,
between that interval no function call will happen;
function call and timer set will after after certain interval only;
This will just ignore all the events in between.

Built in functions for objects and function comes from prototype ,
 whcich has all those built in functions and methods
 Everything in js is an object 
 arr.__proto__

 Function.prototype.mybind = function (){

 }
 Now we will have access to mybind mehtod from all functions