import { withFormik } from "formik";
import InnerLoginFormSms from "../../components/auth/innerLoginFormSms";
import { LoginFormSmsValuesInterface } from "../../contracts/auth";
import CallApi from "../../helpers/callApi";
import { loginFormSmsValidate } from "../../validate/auth/loginFormSmsValidate";

interface LoginFormSmsProps {

}

const LoginFormSms = withFormik<LoginFormSmsProps,LoginFormSmsValuesInterface>({
    mapPropsToValues: Props => {
        return {
            phone : ''
        }
    },
    handleSubmit: async (value) => {
        let res = await CallApi().post('/auth/login',value);
        console.log(res)
    },
    validationSchema : loginFormSmsValidate
})(InnerLoginFormSms)

export default LoginFormSms;