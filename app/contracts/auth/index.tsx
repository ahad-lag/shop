

export interface RegisterFormValuesInterface {
    name: string,
    email: string,
    password: string,
    confirm_password: string
}

export interface LoginFormValuesInterface {
    email: string,
    password: string,
}

////////////////////////////////////////////////// sms

export interface RegisterFormSmsValuesInterface {
    name: string,
    phone: string,
}

export interface LoginFormSmsValuesInterface {
    phone: string,
}

export interface LoginVerifyFormSmsValuesInterface {
    token: string,
    code: string,
}