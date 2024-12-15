"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { LogIn, LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const UserMenu = () => {
  const { data: session, status } = useSession();

  const user = session?.user;

  if (status === "loading") {
    return <Skeleton className="size-10 animate-pulse rounded-full bg-muted" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="select-none">
          <AvatarImage draggable={false} src={user?.image ?? undefined} />
          <AvatarFallback>{user?.name?.charAt(0) ?? ""}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="#" className="flex items-center gap-2">
            <Avatar className="select-none">
              <AvatarImage draggable={false} src={user?.image ?? ""} />
              <AvatarFallback>{user?.name?.charAt(0) ?? ""}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-bold">{user?.name ?? "Not Signed In"}</p>
              <p className="text-xs text-muted-foreground">
                {user?.email ?? "Sign in to see more Info"}
              </p>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {user ? (
          <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
            <LogOut className="mr-2 size-4" />
            Sign Out
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem className="cursor-pointer" onClick={() => signIn()}>
            <LogIn className="mr-2 size-4" />
            Sign In
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
