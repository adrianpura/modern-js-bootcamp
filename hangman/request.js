const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('Error has taken place')
        }
    })
    request.open('GET', `https://cors-anywhere.herokuapp.com/http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})


const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {

    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {

        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('Error has taken place')
        }
    })

    countryRequest.open('GET', 'https://cors-anywhere.herokuapp.com/http://restcountries.com/v2/all', true)
    countryRequest.send()
})

