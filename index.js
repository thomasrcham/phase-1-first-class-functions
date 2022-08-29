const receivesAFunction = cb => cb();

function returnsANamedFunction(){
    return nFunc()
}

function nFunc(){
    return apple;
}
    
function apple(){
    console.log('gogogog')
}

function returnsAnAnonymousFunction(){
    return function(){};
};