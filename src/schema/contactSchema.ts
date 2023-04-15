import * as yup from 'yup';

export const contactSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    message: yup.string().required('Message is required'),
});
