import * as yup from 'yup';

let loginFormValidate = yup.object().shape({
    email : yup.string().required().email(),
    password : yup.string().required().min(8)
});

export default loginFormValidate