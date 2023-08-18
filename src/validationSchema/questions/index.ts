import * as yup from 'yup';

export const questionValidationSchema = yup.object().shape({
  question_text: yup.string().required(),
  status: yup.string().required(),
  survey_id: yup.string().nullable(),
});
