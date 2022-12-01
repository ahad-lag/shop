import { withFormik } from "formik";
import { LoginFormSmsValuesInterface } from "../../contracts/auth";

interface LoginFormSmsProps {

}

const LoginFormSms = withFormik<LoginFormSmsProps,LoginFormSmsValuesInterface>({
    mapPropsToValues: Props => {
        return {
            phone : ''
        }
    },
    handleSubmit: (value) => {
        console.log(value)
    }
    
})

export default LoginFormSms;