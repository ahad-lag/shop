import * as yup from 'yup';

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

export let loginFormSmsValidate = yup.object().shape({
    phone : yup.string().required().min(8).matches(phoneRegExp, 'the phone format is not correct')
});