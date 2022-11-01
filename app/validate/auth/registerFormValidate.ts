import * as yup from 'yup';

export let registerFormSchima = yup.object().shape({
    name: yup.string().required().min(5),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
    confirm_password: yup.string().required().min(8)
});