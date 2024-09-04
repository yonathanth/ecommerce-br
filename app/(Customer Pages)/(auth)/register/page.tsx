// In your pages or routes file
import { RegistrationForm } from "./registerUserForm";

export default function RegisterPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <RegistrationForm />
    </div>
  );
}
