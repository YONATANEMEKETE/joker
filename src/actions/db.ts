"use server";

import { postSchema, PostState } from "@/lib/definition";
import { createClient } from "@/utils/supabase/server";

export async function createPost(state: PostState, formData: FormData) {
  const supabase = await createClient();

  const validatedFields = postSchema.safeParse({
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const user_id = user?.id;
  const content = validatedFields.data.content;

  const { data, error } = await supabase
    .from("posts")
    .insert({ user_id, content })
    .select("*");

  if (data) {
    console.log(data);
    return {
      message: "Post created successfully 😀",
    };
  }

  if (error) {
    console.log(error);
    return {
      message: "Error creating post",
    };
  }
}
