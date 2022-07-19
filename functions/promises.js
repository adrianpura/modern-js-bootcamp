//callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('number must be provided')
        }
    }, 2000);
}


getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err: ', err);
            } else {
                console.log('data: ', data);
            }
        })
    }
})

//promise 

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('number must be provided')
    }, 2000);
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log('promise data: ', data);
    }, (err) => {
        console.log('err: ', err);
    })
}, (err) => {
    console.log('err: ', err);
})

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return 'this is some test data'
}).then((data) => {
    console.log('data: ', data);
}).catch((err) => {
    console.log('err: ', err);
})
