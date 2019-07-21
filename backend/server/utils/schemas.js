import * as yup from 'yup';

const email = yup
  .string()
  .email()
  .required();
const password = yup
  .string()
  .min(6)
  .required();
const requiredString = yup.string().required();

export const loginSchema = yup.object().shape({ email, password });

export const registerSchema = yup.object().shape({ email, password, name: requiredString });

export const createArticleSchema = yup
  .object()
  .shape({ title: requiredString, content: requiredString, authorId: yup.ref('$authorId') });

export const updateArticleSchema = yup.object().shape({
  title: yup.string().min(1),
  content: yup.string().min(1),
});

export const createCommentSchema = yup
  .object()
  .shape({ content: requiredString, authorId: yup.ref('$authorId') });

export const updateCommentSchema = yup.object().shape({
  content: requiredString,
});
