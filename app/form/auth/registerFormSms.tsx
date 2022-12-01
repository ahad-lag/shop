import { withFormik } from "formik";
import Router from "next/router";
import InnerRegisterFormSms from "../../components/auth/innerRegisterFormSms";
import { RegisterFormSmsValuesInterface } from "../../contracts/auth";
import CallApi from "../../helpers/callApi";
import { registerFormSmsSchima } from "../../validate/auth/registerFormSmsValidate";

interface RegisterFormProps {
    name?: string
}

const RegisterFormSms = withFormik<RegisterFormProps, RegisterFormSmsValuesInterface>({
    mapPropsToValues: props => {
        return {
            name: props.name ?? '',
            phone: ''
        }
    },
    handleSubmit: async (values) => {
        let res = await CallApi().post('/auth/register',values);
        if(res.status == 201){
            Router.push('/auth/loginsms');
        }
    },
    validationSchema : registerFormSmsSchima
})(InnerRegisterFormSms)

export default RegisterFormSms;