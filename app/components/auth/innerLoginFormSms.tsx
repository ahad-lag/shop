import { Form, FormikProps } from "formik";
import { LoginFormSmsValuesInterface } from "../../contracts/auth";
import InputFrom from "../shared/form/input";
import SubmitButton from "../shared/form/submitButton";

const InnerLoginFormSms = (props : FormikProps<LoginFormSmsValuesInterface>) => {
    return (
        <Form className="space-y-6">

            <div>
                <InputFrom name="phone" label="شماره همراه" />
            </div>

            <div>
                <SubmitButton label="ورود" />
            </div>
        </Form>
    )
}

export default InnerLoginFormSms;