import { string, object } from 'yup';

const signInSchema = object().shape({
  email: string().required('Email is required'),
  password: string().required('Password is required'),
});

export const NewsSchema = object().shape({
  title: string().required('Title is required'),
  content: string().required('Content is required'),
});

export default signInSchema;
