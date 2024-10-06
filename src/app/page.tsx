import { SignInButton } from "@/components/auth/signin-button";
import { SignOutButton } from "@/components/auth/signout-button";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { ArrowRight, LogIn, LogOut } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="text-sm text-muted-foreground">Start modifying this page to get started.</p>
        <div className="flex gap-2">
          <Link
            prefetch={false}
            href="https://github.com/caru-ini/next-authjs-template"
            passHref
            target="_blank"
          >
            <Button variant="outline" className="gap-2">
              Check the repository
              <ArrowRight size={16} />
            </Button>
          </Link>
          {session ? (
            <SignOutButton className="gap-2">
              <LogOut size={16} />
              Sign Out
            </SignOutButton>
          ) : (
            <SignInButton className="gap-2">
              <LogIn size={16} />
              Sign In
            </SignInButton>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 max-w-xl">
        <p className="font-bold">Session:</p>
        <pre className="text-sm bg-secondary p-4 rounded-md overflow-x-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
