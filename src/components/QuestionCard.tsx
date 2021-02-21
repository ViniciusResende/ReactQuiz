import React from 'react';
//styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

import { AnswerObject } from '../App';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
  userAnswer: AnswerObject | undefined;//check later
  questionNr: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question, 
  answers, 
  callback, 
  userAnswer, 
  questionNr, 
  totalQuestions
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}/>
    <div>
      {answers.map(answer => (
        <ButtonWrapper 
          key={answer}
          correct={userAnswer?.correctAnswer === answer} //check logic (optional chaning)
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={!!userAnswer /*userAnswer ? true : false*/} onClick={callback} value={answer}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;