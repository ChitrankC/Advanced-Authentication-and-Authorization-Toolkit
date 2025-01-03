import { CardWrapper } from "@/app/auth/card-wrapper";

export const LoginForm = () => {
    return (
        <CardWrapper
            headerlabel="Welcome back"
            backButtonLabel="Don't have an Account"
            backButtonHref="/auth/register"
            showSocial
        
        >
            LoginForm
        </CardWrapper>
    )
}

export default LoginForm;