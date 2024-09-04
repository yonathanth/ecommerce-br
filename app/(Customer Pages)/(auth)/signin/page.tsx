import SignInForm from "./SignInForm";

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-5 border rounded shadow">
      <h1 className="text-xl font-semibold">Sign In</h1>
      <SignInForm />
    </div>
  );
}
