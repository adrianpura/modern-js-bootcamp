const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to fetch puzzle')
    }
}

const getCountryDetails = async (countryCode) => {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://restcountries.com/v2/all')
    if (response.status === 200) {
        let data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Error has taken place')
    }
}

const getLocation = async () => {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://ipinfo.io/json?token=7eaf207ba69c2c')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('unable to fetch data')
    }

}

const getCurrentCountry = async () => {
    const location = await getLocation() 
    return getCountryDetails(location.country)
}


