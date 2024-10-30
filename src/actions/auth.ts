"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import {
  FormState,
  signinFormSchema,
  SignInState,
  SignupFormSchema,
} from "@/lib/definition";

export async function login(state: SignInState, formData: FormData) {
  const supabase = await createClient();

  const validatedFields = signinFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase.auth.signInWithPassword(
    validatedFields.data,
  );

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "page");
  redirect("/");
}

export async function signup(state: FormState, formData: FormData) {
  const supabase = await createClient();

  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { error, data } = await supabase.auth.signUp({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    options: {
      data: {
        name: validatedFields.data.name,
      },
    },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  if (data) {
    revalidatePath("/", "page");
    return {
      message: "Check your email for a verification link",
    };
  }
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "page");
  redirect("/");
}

export async function signinWithGoogle() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}

export async function signinWithGithub() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}
