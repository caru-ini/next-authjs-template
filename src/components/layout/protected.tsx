import { SignInButton } from "@/components/auth/signin-button";
import { auth } from "@/lib/auth";

type ProtectedProps = {
  children: React.ReactNode;
};

export const Protected: React.FC<ProtectedProps> = async ({ children }) => {
  const session = await auth();
  return session ? (
    <>{children}</>
  ) : (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Authentication required</h2>
        <p className="text-sm text-gray-500">You need to sign in to access this page.</p>
        <SignInButton className="mt-2">Sign in</SignInButton>
      </div>
    </div>
  );
};
