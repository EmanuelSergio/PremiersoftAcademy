export interface UserData {
  name: string;
  email: string;
  password: string;
  adress: string;
  confirmPassword: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  adress?: string;
  confirmPassword?: string;
}
