import { useRouter } from "next/navigation";
import { useState } from "react";

const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (email === "admin@example.com" && password === "123") {
            setError("");
            router.push("http://localhost:3010");
        } else {
            setError("E-mail ou senha inválidos.");
        }
    };

    return { email, password, error, setEmail, setPassword, handleLogin };
};

export default useLogin;
