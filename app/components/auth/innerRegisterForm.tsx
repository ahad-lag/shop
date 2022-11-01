import { FormikProps, Form } from "formik"
import InputFrom from "../../components/shared/form/input"
import SubmitButton from "../../components/shared/form/submitButton"
import { RegisterFormValuesInterface } from "../../contracts/auth"

const InnerRegisterForm = (props: FormikProps<RegisterFormValuesInterface>) => {
    return (
        <Form className="space-y-6" action="#" method="POST">

            <div>
                <InputFrom name="name" label="نام و نام خانوادگی" />
            </div>

            <div>
                <InputFrom name="email" label="ایمیل" type="email" />
            </div>

            <div>
                <InputFrom name="password" label="کلمه عبور" type="password" />
            </div>

            <div>
                <InputFrom name="confirm_password" label="تکرار کلمه عبور" type="password" />
            </div>

            <div>
                <SubmitButton label="عضویت" />
            </div>

        </Form>
    )
}

export default InnerRegisterForm;