const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('must be a string')
    }

}


try {
    const result = getTip(true)
    console.log(result)
} catch (error) {
    console.log(error.message)
}

