import { logout } from "@/actions/auth";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const metadata = user?.user_metadata;
  // console.log(metadata);

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="grid min-h-[90vh] place-content-center bg-mybg2">
        <p>{user?.user_metadata.name}</p>
        <form action={logout}>
          <Button type="submit">Log Out</Button>
        </form>
      </main>
    </div>
  );
}
