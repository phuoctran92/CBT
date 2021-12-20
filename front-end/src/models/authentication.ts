export interface FormLogin {
  input: string,
  password: string
}

export interface FormForgotPass {
  email: string,
}

export interface FormResetPassword {
  newPassword: string,
  confirmPassword: string,
  token: string
}

export interface FormResetPasswordUser {
  password: string,
  confirm_password: string,
  token: string
}

export interface FormLoginSocial {
  socialNetworkName: string,
  accessToken: string
}