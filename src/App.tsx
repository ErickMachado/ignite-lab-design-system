import "./styles/global.css";
import { EnvelopeSimple, Lock } from "phosphor-react";
import ReactLogo from "./assets/react-logo.svg";
import { Button, Checkbox, Heading, Text, TextInput } from "./components";

export function App() {
  return (
    <div className="flex items-center justify-center bg-gray-900 h-screen w-screen">
      <div className="w-full max-w-[400px]">
        <header className="flex flex-col items-center">
          <img src={ReactLogo} alt="logo do React" />
          <Heading size="2xl" className="mt-4">
            Ignite Lab
          </Heading>
          <Text size="lg" className="mt-2 text-gray-400">
            Faça login e comece a usar
          </Text>
        </header>
        <main className="flex-1">
          <form className="flex flex-col gap-4 mt-10">
            <div>
              <Text className="font-semibold mb-3 inline-block">
                Endereço de e-mail
              </Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <EnvelopeSimple size={24} className="text-gray-400" />
                </TextInput.Icon>
                <TextInput.Field placeholder="johndoe@gmail.com" type="email" />
              </TextInput.Root>
            </div>
            <div>
              <Text className="font-semibold mb-3 inline-block">Senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock size={24} className="text-gray-400" />
                </TextInput.Icon>
                <TextInput.Field placeholder="************" type="password" />
              </TextInput.Root>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-gray-100 text-xs flex items-center gap-2"
              >
                <Checkbox />
                Lembrar de mim por 30 dias
              </label>
            </div>
            <Button className="mt-4" type="submit">
              Entrar na plataforma
            </Button>
          </form>
        </main>
        <footer className="mt-6 flex flex-col gap-4 items-center">
          <Text className="text-gray-400 underline" asChild>
            <a href="">Esqueceu sua senha?</a>
          </Text>
          <Text className="text-gray-400 underline" asChild>
            <a href="">Não possui conta? Crie uma</a>
          </Text>
        </footer>
      </div>
    </div>
  );
}
