import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register({ forAdmin }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: `${forAdmin ? "admin" : "student"}`,
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("register"));
  };

  return (
    <GuestLayout>
      <Head title={forAdmin ? "Administrator Registration" : "Register"} />

      {forAdmin && (
        <h1 className="mb-4 text-gray-700">Create an administrator account</h1>
      )}
      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="name" value="Name" />

          <TextInput
            id="name"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData("name", e.target.value)}
            required
          />

          <InputError message={errors.name} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={(e) => setData("email", e.target.value)}
            required
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData("password", e.target.value)}
            required
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel
            htmlFor="password_confirmation"
            value="Confirm Password"
          />

          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData("password_confirmation", e.target.value)}
            required
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        {!forAdmin && (
          <>
            <div className="mt-4 flex">
              <div className="mr-4 flex items-center">
                <input
                  type="radio"
                  name="role"
                  id="student"
                  value="student"
                  onChange={(e) => setData("role", e.target.value)}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  checked={data.role === "student"}
                />
                <label
                  htmlFor="student"
                  className="ml-2 text-sm font-medium text-gray-700"
                >
                  Student
                </label>
              </div>
              <div className="mr-4 flex items-center">
                <input
                  type="radio"
                  name="role"
                  id="teacher"
                  value="teacher"
                  onChange={(e) => setData("role", e.target.value)}
                  className="w4 h-4 border-gray-300 bg-gray-100 text-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  checked={data.role === "teacher"}
                />
                <label
                  htmlFor="teacher"
                  className="ml-2 text-sm font-medium text-gray-700"
                >
                  Teacher
                </label>
              </div>
            </div>
            <InputError message={errors.role} className="mt-2 block" />
          </>
        )}

        <div className="mt-4 flex items-center justify-end">
          {!forAdmin && (
            <Link
              href={route("login")}
              className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Already registered?
            </Link>
          )}

          <PrimaryButton className="ml-4" disabled={processing}>
            Register
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
