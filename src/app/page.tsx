import { SignInButton } from "@/components/auth/signin-button";
import { SignOutButton } from "@/components/auth/signout-button";
import { UserMenu } from "@/components/auth/user-menu";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { ArrowRight, LogIn, LogOut } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-2">
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
        <div className="flex max-w-xl flex-col gap-2">
          <p className="font-bold">Session:</p>
          <pre className="overflow-x-auto rounded-md bg-secondary p-4 text-sm">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-secondary/50 p-4">
          <p className="font-bold">User Menu</p>
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
