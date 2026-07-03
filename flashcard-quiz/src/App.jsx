import { useState } from 'react'

const flashcards = [
  { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
  { id: 2, question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
  { id: 3, question: 'What is the chemical symbol for gold?', answer: 'Au' },
  { id: 4, question: 'Who wrote To Kill a Mockingbird?', answer: 'Harper Lee' },
  { id: 5, question: 'What is the square root of 64?', answer: '8' },
]

function App() {
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)

  const flashcard = flashcards[index]

  const nextCard = () => {
    setShowAnswer(false)
    setIndex((index + 1) % flashcards.length)
  }

  const gotIt = () => {
    setScore(score + 1)
    nextCard()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-2">Flashcard Quiz</h1>
        <p className="text-gray-600 mb-4">A simple beginner-friendly game.</p>

        <div className="mb-4 text-sm text-gray-500">
          Card {index + 1} of {flashcards.length} · Score {score}
        </div>

        <div className="border rounded-xl p-6 mb-4 bg-gray-50">
          <h2 className="text-lg font-semibold mb-3">{flashcard.question}</h2>
          {showAnswer ? (
            <p className="text-blue-600 font-bold">{flashcard.answer}</p>
          ) : (
            <p className="text-gray-500" onClick={() => setShowAnswer(true)}>
              Tap show answer to check.
            </p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white"
            onClick={() => setShowAnswer(true)}
          >
            Show Answer
          </button>
          <button
            className="px-4 py-2 rounded bg-gray-600 text-white"
            onClick={nextCard}
          >
            Next Card
          </button>
          <button
            className="px-4 py-2 rounded bg-green-600 text-white"
            onClick={gotIt}
          >
            I Got It
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
