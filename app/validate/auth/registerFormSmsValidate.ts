import * as yup from 'yup';

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

export let registerFormSmsSchima = yup.object().shape({
    name : yup.string().required().min(4),
    phone : yup.string().required().min(8).matches(phoneRegExp, 'the phone format is not correct')
});