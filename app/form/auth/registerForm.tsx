import { withFormik } from "formik";
import Router from "next/router";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "../../contracts/auth";
import CallApi from "../../helpers/callApi";
import { registerFormSchima } from "../../validate/auth/registerFormValidate";

interface RegisterFormProps {
    name?: string
}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: props => {
        return {
            name: props.name ?? '',
            email: '',
            password: '',
            confirm_password: ''
        }
    },
    handleSubmit: async (values) => {
        let res = await CallApi().post('/auth/register',values);
        if(res.status == 201){
            console.log(res);
            Router.push('/auth/login');
        }
    },
    validationSchema : registerFormSchima
})(InnerRegisterForm)

export default RegisterForm;