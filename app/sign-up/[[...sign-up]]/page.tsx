import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create account",
  description: "Create your Sila Code account to access member tiers and courses.",
  alternates: {
    canonical: "/sign-up",
  },
};

export default function SignUpPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-12 sm:py-16">
      <div className="section-wrap flex justify-center">
        <SignUp />
      </div>
    </section>
  );
}
