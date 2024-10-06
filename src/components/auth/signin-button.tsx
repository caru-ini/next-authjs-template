import { Button, ButtonProps } from "@/components/ui/button";
import { signIn } from "@/lib/auth";

export const SignInButton = (props: ButtonProps) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button {...props} />
    </form>
  );
};
