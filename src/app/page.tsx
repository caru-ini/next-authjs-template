import { SignInButton } from "@/components/auth/signin-button";
import { SignOutButton } from "@/components/auth/signout-button";
import { UserMenu } from "@/components/auth/user-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { ArrowRight, LayoutGrid, LogIn, LogOut, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Ready-to-use Auth",
    description: "Plug-and-play authentication with secure defaults. No setup hassle.",
    icon: ShieldCheck,
  },
  {
    title: "Components",
    description: "Prebuilt, customizable UI components for fast integration.",
    icon: LayoutGrid,
  },
  {
    title: "Best Practice",
    description: "Formatter and linter makes your code clean and readable.",
    icon: Sparkles,
  },
];

export default async function Home() {
  const session = await auth();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-3">
      <div className="absolute right-4 top-4 z-10">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <h1 className="text-center text-4xl font-extrabold tracking-tight">next-authjs-template</h1>
        <p className="max-w-xl text-center text-lg text-muted-foreground">
          Effortless authentication for Next.js. <br />
          <span className="font-semibold">Plug, play, and scale your app securely.</span>
        </p>
        <div className="flex gap-2">
          {session ? (
            <SignOutButton className="gap-2 px-6 py-2 text-base">
              <LogOut size={18} />
              Sign Out
            </SignOutButton>
          ) : (
            <SignInButton className="gap-2 px-6 py-2 text-base">
              <LogIn size={18} />
              Sign In
            </SignInButton>
          )}
        </div>
        <Link
          prefetch={false}
          href="https://github.com/caru-ini/next-authjs-template"
          passHref
          target="_blank"
        >
          <Button variant="default" className="gap-2 px-6 py-2 text-base shadow-md">
            <ArrowRight size={18} />
            Check the repository
          </Button>
        </Link>
      </div>
      {/* Features Section */}
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="min-w-[220px] flex-1 shadow-lg transition-shadow hover:shadow-xl"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="relative flex items-center justify-center rounded-md bg-primary/10 p-3">
                <div className="absolute inset-0 bg-primary/20 blur-md" />
                <feature.icon size={28} className="text-primary" />
              </div>
              <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Session & UserMenu Section */}
      <div className="flex w-full max-w-3xl flex-col items-start justify-center gap-4 md:flex-row">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="text-base">Session</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-auto rounded bg-secondary p-2 text-xs">
              {session ? JSON.stringify(session, null, 2) : "No session"}
            </pre>
          </CardContent>
        </Card>
        <Card className="flex flex-1 flex-col items-center">
          <CardHeader>
            <CardTitle className="text-base">User Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <UserMenu />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
