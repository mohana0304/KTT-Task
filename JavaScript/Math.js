
//module = a separate JS file with its own scope
//type of module -->import/export , require/module.exports(old,Node.js)

//Export = make available outside

export function add(a,b){//named exports
    return a+b;
}

export function sub(a,b){
    return a-b;
}

export function mul(a,b){
    return a*b;
}

// in one module we can have only one default export
export default function div(a,b){
    return a/b;
}

