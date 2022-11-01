import { Form, FormikProps } from "formik";
import { LoginFormValuesInterface } from "../../contracts/auth";
import InputFrom from "../shared/form/input";
import SubmitButton from "../shared/form/submitButton";

const InnerLoginForm = (props : FormikProps<LoginFormValuesInterface>) => {
    return (
        <Form className="space-y-6">
            <div>
                <InputFrom name="email" label="ایمیل" type="email"/>
            </div>

            <div>
            <InputFrom name="password" label="کلمه عبور" type="password"/>
            </div>

            <div>
                <SubmitButton label="ورود" />
            </div>
        </Form>
    )
}

export default InnerLoginForm;