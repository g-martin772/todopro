import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className={"flex items-center justify-center flex-col text-yellow-500"}>
      <h1 className={"text-yellow-500 bg-blue-800 font-bold p-2 rounded-2xl px-3 mb-2 shadow-sm"}>
        ToDoPro
      </h1>
      <h2 className={"text-teal-500 font-semibold p-2"}>
        Task management for the modern age.
      </h2>
      <h3 className={"text-amber-600"}>
        Get started by creating an account or logging in.
      </h3>
      <Button className={"mt-4"}>
        <Link href={"/sign-up"}>
          Sign up for free
        </Link>
      </Button>
    </div>
  );
}
