import { FormikProps , Form , withFormik } from "formik"
import InputFrom from "../../components/shared/form/input"
import SubmitButton from "../../components/shared/form/submitButton"

interface RegisterFormValues {
    name: string,
    email: string,
    password: string,
    confirm_password: string
}

const InnerRegisterForm = (props: FormikProps<RegisterFormValues>) => {
    return (
        <Form className="space-y-6" action="#" method="POST">

            <InputFrom name="name" label="نام و نام خانوادگی" />

            <InputFrom name="email" label="ایمیل" type="email"/>

            <InputFrom name="password" label="کلمه عبور" type="password" />

            <InputFrom name="confirm_password" label="تکرار کلمه عبور" type="password" />

            <SubmitButton label="عضویت" />
        </Form>
    )
}

interface RegisterFormProps {
    name? : string
}

const RegisterForm = withFormik<RegisterFormProps,RegisterFormValues>({
    mapPropsToValues : props => {
        return {
            name : props.name ?? '',
            email : '',
            password : '',
            confirm_password : ''
        }
    },
    handleSubmit : (values) => {
        console.log(values);
        
    }
})(InnerRegisterForm)

export default RegisterForm;



