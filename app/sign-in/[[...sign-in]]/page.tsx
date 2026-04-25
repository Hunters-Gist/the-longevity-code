import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to The Sila Code member area.",
  alternates: {
    canonical: "/sign-in",
  },
};

export default function SignInPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-12 sm:py-16">
      <div className="section-wrap flex justify-center">
        <SignIn />
      </div>
    </section>
  );
}
