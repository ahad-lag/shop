import { FormikProps, Form } from "formik"
import InputFrom from "../shared/form/input"
import SubmitButton from "../shared/form/submitButton"
import { RegisterFormSmsValuesInterface } from "../../contracts/auth"

const InnerRegisterFormSms = (props: FormikProps<RegisterFormSmsValuesInterface>) => {
    return (
        <Form className="space-y-6" action="#" method="POST">

            <div>
                <InputFrom name="name" label="نام و نام خانوادگی" />
            </div>

            <div>
                <InputFrom name="phone" label="شماره همراه" />
            </div>

            <div>
                <SubmitButton label="عضویت" />
            </div>

        </Form>
    )
}

export default InnerRegisterFormSms;