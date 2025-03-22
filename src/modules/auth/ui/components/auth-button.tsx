import { Button } from "@/components/ui/button";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <>
    <SignedIn>
        <UserButton/>
    </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="px-4 py-2 font-medium text-blue-600
        hover:text-blue-500 border-blue-500 rounded-full shadow-none"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
