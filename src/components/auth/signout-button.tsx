import { Button, ButtonProps } from "@/components/ui/button";
import { signOut } from "@/lib/auth";

export const SignOutButton = (props: ButtonProps) => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button {...props} />
    </form>
  );
};
