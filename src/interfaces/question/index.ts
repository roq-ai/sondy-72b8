import { AnswerInterface } from 'interfaces/answer';
import { SurveyInterface } from 'interfaces/survey';
import { GetQueryInterface } from 'interfaces';

export interface QuestionInterface {
  id?: string;
  question_text: string;
  survey_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  answer?: AnswerInterface[];
  survey?: SurveyInterface;
  _count?: {
    answer?: number;
  };
}

export interface QuestionGetQueryInterface extends GetQueryInterface {
  id?: string;
  question_text?: string;
  survey_id?: string;
  status?: string;
}
