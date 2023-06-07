functionName.call(arg1,arg2) -> to call a function direclty
arg1 -> points to "this" keyword
arg2 -> same as function args

functionName.apply(arg1,[arg2,arg3]) -> same as call , but second arg is a list

functionName.bind(arg1) -> return a function and it does not direclty call the fun, the returned fun can be called later.