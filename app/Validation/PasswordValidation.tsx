export function PasswordValidation(password: string) {
    if (!password) return "Password can't be empty."
    if (password.length < 6) return "Password must be at least 5 characters long."
}