import request from 'superagent'

const apiURL = 'https://corporatebs-generator.sameerkumar.website/'

export function getBuzzWord() {
    return request
      .get(apiURL)
      .then((resp) => resp.body.phrase)
      .catch((err) => {
        console.log('Err message: ' + err)
      })
  }