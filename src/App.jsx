import { useState } from 'react'
import './App.css'
import languages from './languages.js'
function App() {
  const [word, setWord] = useState("CURRENTWORD")
  const [guessedLetters, setguessedLetters] = useState([])

  const wrongCount = guessedLetters.filter(letter => !word.includes(letter)).length
  console.log(wrongCount)

  console.log(guessedLetters)
  const wordToGuess = [...word]
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  const alphabetMapped = alphabet.map((letter) => {
    const letterCleaned = letter.toLowerCase
    let backGroundColor = ""
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && word.includes(letter) ? backGroundColor = "#10A95B" : null
    const isWrong = isGuessed && !word.includes(letter)  ? backGroundColor = "#EC5D49" : null

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

  const CODING_LANGUAGES = languages.map((language, index) => {
    const isLanguageLost = index < wrongCount;
    return (
    <div
      key={language.name}
      className={`language_name ${isLanguageLost ? 'lost': ""}`}
      style={{
      "background-color": language.backgroundColor,
      color: language.color
    }}>
      {language.name}
    </div>
    )}
   
  )

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
