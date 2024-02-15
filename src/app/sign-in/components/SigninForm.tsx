"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  signin,
  authenticated,
  type SigninUser,
} from "~/app/utils/Authentication";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SigninForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputField =
    "text-black lg:text-white block w-full appearance-none bg-inherit border-b border-gray-700 lg:border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm";
  const label = "lg:text-white mb-1";

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const user: SigninUser = {
      email,
      password,
    };

    try {
      await signin(user).then(() => {
        if (authenticated()) {
          router.push("/dashboard");
        }
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
    } finally {
      await signin(user);
      // Re-enable the button regardless of success or failure
      setIsSubmitting(false);
    }
  };

  return (
    <div className="absolute mb-8 mt-12 w-[95%] max-w-lg rounded border border-primary bg-white bg-opacity-50 p-8 shadow-md backdrop-blur-md backdrop-filter lg:mb-0 lg:mt-0 lg:border-none lg:bg-opacity-25">
      <h1 className="mb-8 text-center text-3xl font-bold lg:text-white">
        Sign in
      </h1>
      <form className="space-y-4" onSubmit={handleRegister}>
        <div className="flex flex-col">
          <label htmlFor="email" className={label}>
            Email:
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputField}
            />
          </label>
          <br />
          <label htmlFor="password" className={label}>
            Password:
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`${inputField} pr-10`}
              />
              <button
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 lg:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>
          <br />
          <div className="mt-4 space-x-4 text-center">
            <button
              type="submit"
              className="btn-primary cursor-pointer rounded px-6 py-2 lg:px-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
