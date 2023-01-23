const fetch = require('node-fetch');

// dependency injection of fetch
const getPeoplePromise = fetch => {
  return fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
  
      return {
        count: data.count,
        results: data.results
        }
        })
}

const getPeople = async fetch => {
  const response = await fetch('https://swapi.dev/api/people')
  const data = await response.json()
  
  return {
    count: data.count,
    results: data.results
  }
}

getPeople(fetch)

module.exports = {
  getPeople,
  getPeoplePromise
}
