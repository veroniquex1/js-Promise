//Button Function
let btn = document.getElementById('button')
//Promise
function addition (){
    let num1 = +document.getElementById('num1').value
    let num2 = +document.getElementById('num2').value
    let output = document.querySelector('#output')
    let newPromise = new Promise( (resolve, reject)=>{
        if( (typeof num1 == 'number') && (typeof num2 == 'number') ){
            let ans = num1 + num2
            resolve(`Sucess! The sum of ${num1} and ${num2} = ${ans}`)
        }else {
            reject(`Number 1 or Number 2 is not a Number`)
        }
        // switch (true) {
        //     case typeof (num1) == 'number' && typeof (num2) == 'number':
        //         let ans = num1 + num2
        //         resolve(`Success ${num1} and ${num2} = ${ans}`)

        //         break;
        //     case typeof(num1) != 'number':
        //         reject(`Number 1 is not a number`)
        //         break;
        //     case typeof(num2) != 'number':
        //         reject(`Number 2 is not a number`)
        //         break;
        //     default:
        //         break;
        // }
    })
    newPromise.then( 
        completed=> output.textContent= completed,
        rejected => output.textContent = rejected
    )
}

btn.addEventListener('click', addition)