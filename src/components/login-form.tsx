import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-title font-bold">Bem-vindo de volta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Coloque suas informações de acesso
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            className="bg-slate-200"
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Input
            placeholder="••••••••"
            id="password"
            type="password"
            required
            className="bg-slate-200"
          />
        </Field>
        <Field>
          <Button type="submit">Entrar</Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            Não tem uma conta?{" "}
            <a href="#" className="underline underline-offset-4">
              Entre em contato com o Projeto.
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
