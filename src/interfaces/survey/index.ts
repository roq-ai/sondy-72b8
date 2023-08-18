import { QuestionInterface } from 'interfaces/question';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SurveyInterface {
  id?: string;
  title: string;
  description?: string;
  organization_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  question?: QuestionInterface[];
  organization?: OrganizationInterface;
  _count?: {
    question?: number;
  };
}

export interface SurveyGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  organization_id?: string;
  status?: string;
}
