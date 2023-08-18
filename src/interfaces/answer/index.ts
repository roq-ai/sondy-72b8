import { ResponseInterface } from 'interfaces/response';
import { QuestionInterface } from 'interfaces/question';
import { GetQueryInterface } from 'interfaces';

export interface AnswerInterface {
  id?: string;
  answer_text: string;
  question_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  response?: ResponseInterface[];
  question?: QuestionInterface;
  _count?: {
    response?: number;
  };
}

export interface AnswerGetQueryInterface extends GetQueryInterface {
  id?: string;
  answer_text?: string;
  question_id?: string;
  status?: string;
}
