import { useState } from 'react'
import './App.css'
import languages from './languages.js'
function App() {
  const [word, setWord] = useState("CURRENTWORD")
  const [guessedLetters, setguessedLetters] = useState([])
  console.log(guessedLetters)
  const wordToGuess = [...word]
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  const alphabetMapped = alphabet.map((letter) => {
    const letterCleaned = letter.toLowerCase
    let backGroundColor = ""
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && word.includes(letter) ? backGroundColor = "#00FF00" : null
    const isWrong = isGuessed && !word.includes(letter)  ? backGroundColor = "#FF0000" : null

    return (
    <button 
      className='alphabet-Letter'
      style={{"backgroundColor": backGroundColor}}
      key={letter}
      onClick={ () => setguessedLetters((prev) => prev.includes(letter) ? prev :  [...prev, letter]) }
    > 
      {letter}
    </button>)
      
    }
  )

  const wordMapped = wordToGuess.map((letter, index) => (
    <p className='letter' key={index}>{ guessedLetters.includes(letter) ? letter : ""}</p>
  ))

  const CODING_LANGUAGES = languages.map((language) => (<div
    key={language.name}
    className='language_name' 
    style={{
    "background-color": language.backgroundColor,
    color: language.color
  }}>{language.name}</div>))

  console.log(languages)
  return (
    <>
      <main>
        <header>
          <h2>Assembly: Endgame</h2>
          <p>Guess the word under 8 attempts to keep the programming world safe from assembly</p>
        </header>
      </main>
      <div className='game-status'>
        <h2>You win!</h2>
        <p>Well done!</p>
      </div>
      <div className='coding-languages'> 
        {CODING_LANGUAGES}
      </div>
      <div className='word-to-guess'>
        {wordMapped}
      </div>
      <div className='key-board'>
        {alphabetMapped}
      </div>
      <button className='new-game'>New Game</button>
    </>
  )
}

export default App
