import { Suspense } from "react";
import SignInForm from "./SignInForm";

export default function SignInPage() {
  return (
    <Suspense fallback={<p className="py-8 text-center">লোড হচ্ছে...</p>}>
      <SignInForm />
    </Suspense>
  );
}