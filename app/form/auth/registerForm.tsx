import { withFormik } from "formik";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "../../contracts/auth";
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
    handleSubmit: (values) => {
        console.log(values);
    },
    validationSchema : registerFormSchima
})(InnerRegisterForm)

export default RegisterForm;