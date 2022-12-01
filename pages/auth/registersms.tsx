import type { NextPage } from 'next';
import RegisterFormSms from '../../app/form/auth/registerFormSms';

const RegisterSms: NextPage = () => {
    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">صفحه عضویت با پیامک</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <RegisterFormSms />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterSms;
