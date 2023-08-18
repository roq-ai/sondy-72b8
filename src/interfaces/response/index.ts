import { UserInterface } from 'interfaces/user';
import { AnswerInterface } from 'interfaces/answer';
import { GetQueryInterface } from 'interfaces';

export interface ResponseInterface {
  id?: string;
  user_id?: string;
  answer_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  answer?: AnswerInterface;
  _count?: {};
}

export interface ResponseGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  answer_id?: string;
  status?: string;
}
