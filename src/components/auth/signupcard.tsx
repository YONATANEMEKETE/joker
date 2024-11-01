"use client";

import { useActionState, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import google from "../../../public/google.svg";
import Google from "./google";
import Github from "./github";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { signinWithGithub, signinWithGoogle, signup } from "@/actions/auth";
import { useFormState, useFormStatus } from "react-dom";

const SignUpCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, action] = useFormState(signup, undefined);

  return (
    <Card className="w-[400px] min-w-[300px]">
      <CardHeader>
        <CardTitle className="text-center font-heading2 text-2xl font-bold text-mytext">
          Sign Up
        </CardTitle>
        <CardDescription className="text-center font-body text-base font-semibold text-mytextlight">
          Create Your Account to get Started
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <form action={signinWithGoogle} className="basis-[48%]">
            <Button
              variant="outline"
              size={"lg"}
              className="w-full bg-mybg1 hover:bg-myaccent1 dark:bg-myaccent1"
            >
              <Google />
            </Button>
          </form>
          <form action={signinWithGithub} className="basis-[48%]">
            <Button
              variant="outline"
              size={"lg"}
              className="w-full bg-mybg1 hover:bg-myaccent1 dark:bg-myaccent1"
            >
              <Github />
            </Button>
          </form>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <form action={action} className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              name="name"
              required
            />
            {state?.errors?.name && (
              <p className="ml-2 font-body text-sm font-semibold text-red-600">
                {state.errors.name}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              name="email"
              required
            />
            {state?.errors?.email && (
              <p className="ml-2 font-body text-sm font-semibold text-red-600">
                {state.errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </Button>
            </div>
            {state?.errors?.password && (
              <p className="ml-2 font-body text-sm font-semibold text-red-600">
                {state.errors.password}
              </p>
            )}
          </div>
          <FormButton />
          {state?.message && (
            <p className="text-center font-body text-sm font-semibold text-green-600">
              {state.message}
            </p>
          )}
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-center gap-2">
          <p className="font-body text-sm font-semibold text-mytextlight">
            Already have an account?
          </p>
          <Link
            href="/signin"
            className="font-body text-sm font-semibold text-mytext hover:underline"
          >
            Sign In
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUpCard;

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="mt-4 w-full bg-gradient-to-br from-myaccent5 to-myaccent7 font-heading2 text-base font-medium text-white transition-colors duration-300 hover:from-myaccent5 hover:to-myaccent6"
      type="submit"
    >
      {pending ? "Loading..." : "Sign Up"}
    </Button>
  );
};
