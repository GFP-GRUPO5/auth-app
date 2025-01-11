import Image from "next/image"
import login from "../../../../public/images/illustrations/login.svg"
import TextField from "@/components/Inputs/TextField"
import Button from "@/components/Button"

const FormLogin = () => {

    const fields = [
        { id: "E-mail", placeholder: "Digite o e-mail cadastrado" },
        { id: "Senha", placeholder: "Digite sua senha", type: "Senha" },
    ]

    return (
        <form className="flex flex-col w-3/4 gap-8">
            <Image
                src={login}
                alt="Ilustração de uma pessoa ao lado de um celular gigante"
                width={333}
                height={267}
                className="self-center"
            />
            <h4 className="text-xl font-bold self-center my-8">Login</h4>
            {fields.map((field) => (
                <TextField
                    key={field.id}
                    id={field.id}
                    placeholder={field.placeholder}
                />
            ))}
            <a className="text-green underline" href="#">Esqueci minha senha!</a>
            <Button text="Acessar" className="bg-green text-white w-36 self-center" onClick={() => {}} />
        </form>
    )
}

export default FormLogin