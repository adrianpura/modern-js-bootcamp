//callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('this is the callback error', undefined)
        callback('this is the callback error', undefined)
    }, 2000);
}


getDataCallback((err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

//promise 

const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`this is the promise data ${data}`)
        // reject('this is the promise error')
        // reject('this is the promise error')
    }, 2000);
})

const myPromise = getDataPromise(123)

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})


myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

