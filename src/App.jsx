import { useState } from 'react'
import './App.css'
import languages from './languages.js'
import words from './words.js'
function App() {
  const [word, setWord] = useState(randomWords)
  const [guessedLetters, setguessedLetters] = useState([])
  let isDisabled = false
  const wrongCount = guessedLetters.filter(letter => !word.includes(letter)).length
  const isGameWon = 
        word.split("").every(letter => guessedLetters.includes(letter))
  console.log(languages)
  if(isGameWon) {
    isDisabled = !isDisabled
  }
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
      disabled={isDisabled}
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

  function startNewGame() {
    setWord(randomWords)
    setguessedLetters([])
  }
  
  function randomWords(){
    const randomWordChoice = words[Math.floor(Math.random() * words.length)].toUpperCase()
    return randomWordChoice
  }
  return (
    <>
      <main>
        <header>
          <h2>Assembly: Endgame</h2>
          <p>Guess the word under 8 attempts to keep the programming world safe from assembly</p>
        </header>
      </main>
      {wrongCount === CODING_LANGUAGES.length ? <div className='game-status' style={{"backgroundColor": "#EC5D49"}}> 
        <h2>You lost</h2>
        <p>Game over!</p>
      </div> 
      : null>
      <div className='game-status'> 
        <h2>You win!</h2>
        <p>Well done!</p>
      </div>}
      {isGameWon && <div className='game-status'> 
        <h2>You win!</h2>
        <p>Well done!</p>
      </div>
      }
      
      <div className='coding-languages'> 
        {CODING_LANGUAGES}
      </div>
      <div className='word-to-guess'>
        {wordMapped}
      </div>
      <div className='key-board'>
        {alphabetMapped}
      </div>
      {wrongCount === CODING_LANGUAGES.length && <button className='new-game' onClick={() => startNewGame()}>New Game</button>}
      {isGameWon && <button className='new-game' onClick={() => startNewGame()}>New Game</button>
      }
      
    </>
  )
}

export default App
