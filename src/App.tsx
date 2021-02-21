import React, {useState} from 'react';
import { fetchQuizQuestions } from './API';
import { TailSpin } from '@agney/react-loading';
// Components
import QuestionCard from './components/QuestionCard';
//types
import { QuestionState } from './API';
//styles
import { GlobalStyle, Wrapper, DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

type onOptionClicked = {
  value: string
}

const TOTAL_QUESTIONS = 5;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [gameDifficulty, setGameDifficulty] = useState('easy');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = ["Easy", "Medium", "Hard"];

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setGameDifficulty(value);
    setIsOpen(false);
    // console.log(value);
  };

  // console.log(gameDifficulty);
  // console.log(selectedOption);
  console.log(questions);
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      gameDifficulty.toLowerCase(),
    )

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      //Users answer
      const answer = e.currentTarget.value
      //Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if(correct) setScore(prev => prev + 1);
      // Save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer, //if the name is equal the value will be atributed
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev ) => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
      setIsOpen(false);
    } else {
      setNumber(nextQuestion);
    }
  }
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <div className="startContainer">
            <button className="start" onClick={startTrivia}>Start</button>
            <p className="selectText">Select Difficulty: </p>
            {/* <select  className="difficultySelect" defaultValue="easy" onChange={(e) => setGameDifficulty(e.target.value)}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select> */}
            <DropDownContainer>
              <DropDownHeader onClick={toggling}>
                {selectedOption || "Easy"}
                </DropDownHeader>
              {isOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    {options.map(option => (
                      <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                          {option}
                      </ListItem>
                    ))}
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
          </div>
        ): null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading && <div className="loaderAnimation"><TailSpin/></div>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ?(
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null }
      </Wrapper>
    </>
  );
}

export default App;
