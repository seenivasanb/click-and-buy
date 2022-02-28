import { memo } from "react";
import Login from "./login-form";
import Register from "./register-form";

export const LoginForm = memo(Login);
export const RegisterForm = memo(Register);