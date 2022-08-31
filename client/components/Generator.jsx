import React, { useEffect, useState } from 'react'
import { getBuzzWord } from '../apiClient'

export default function Generator() {
  const [phrase, setPhrase] = useState('')

  const handleClick = async () => {
    const newPhrase = await getBuzzWord()
    setPhrase(newPhrase)
  }

  useEffect(async () => {
    const newPhrase = await getBuzzWord()
    console.log(newPhrase)
    setPhrase(newPhrase)
  }, [])

  return (
    <div className="generator-container">
      <img src="/corporate.jpg" alt="busness man"></img>
      <button className="generate-btn" onClick={handleClick}>
        Generate
      </button>
      {phrase && <p className="phrase">{'"' + phrase + '"'}</p>}
      <p className="credit">Made with sameerkumar18's <a href="https://github.com/sameerkumar18/corporate-bs-generator-api">Corporate BS API</a></p>
    </div>
  )
}
