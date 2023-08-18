import * as yup from 'yup';

export const answerValidationSchema = yup.object().shape({
  answer_text: yup.string().required(),
  status: yup.string().required(),
  question_id: yup.string().nullable(),
});
