import { withFormik } from "formik";
import InnerLoginForm from "../../components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "../../contracts/auth";
import loginFormValidate from "../../validate/auth/loginFormValidate";

interface LoginFormPropsInterface {

}

const LoginForm = withFormik<LoginFormPropsInterface, LoginFormValuesInterface>({
    mapPropsToValues: props => {
        return {
            email: '',
            password: ''
        }
    },
    handleSubmit: (value) => {
        console.log(value);
    },
    validationSchema : loginFormValidate
})(InnerLoginForm)

export default LoginForm;