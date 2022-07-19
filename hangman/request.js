const getPuzzle = (wordCount) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('unable to fetch puzzle')
            }
        }).then((data) => {
            return data.puzzle
        })
}

const getCountryDetails = (countryCode) => {
    return fetch('https://cors-anywhere.herokuapp.com/https://restcountries.com/v2/all')
        .then((response) => {
            if (response.status === 200) {

                return response.json()
            } else {
                throw new Error('Error has taken place')
            }
        }).then((data) => data.find((country) => country.alpha2Code === countryCode))

}



// const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {

//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {

//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('Error has taken place')
//         }
//     })

//     countryRequest.open('GET', 'https://cors-anywhere.herokuapp.com/http://restcountries.com/v2/all', true)
//     countryRequest.send()
// })

