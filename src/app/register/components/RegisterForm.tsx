"use client";

import { useState, type MouseEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { type User, validateUser } from "~/app/Schema/userSchema";
import { createUser } from "~/app/utils/Authentication";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [nicOrPassport, setNicOrPassport] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputField =
    "text-black lg:text-white block w-full appearance-none bg-inherit border-b border-gray-700 lg:border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm";
  const label = "lg:text-white mb-1";

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    const user: User = {
      firstName,
      familyName,
      nicOrPassport,
      email,
      password,
      confirmPassword,
    };

    if (!validateUser(user)) {
      return;
    }

    await createUser(user);
    router.push("/dashboard");
  };

  const handleBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="absolute mb-8 mt-12 w-[95%] max-w-lg rounded border border-primary bg-white bg-opacity-50 p-8 shadow-md backdrop-blur-md backdrop-filter lg:mb-0 lg:mt-0 lg:border-none lg:bg-opacity-25">
      <h1 className="mb-8 text-center text-3xl font-bold lg:text-white">
        Register
      </h1>
      <form className="space-y-4" onSubmit={handleRegister}>
        <div className="flex flex-col">
          <label htmlFor="firstName" className={label}>
            First Name:
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className={inputField}
            />
          </label>
          <br />
          <label htmlFor="familyName" className={label}>
            Family Name:
            <input
              type="text"
              id="familyName"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              required
              className={inputField}
            />
          </label>
          <br />
          <label htmlFor="uniqueID" className={label}>
            NIC/Passport No:
            <input
              type="text"
              id="uniqueID"
              value={nicOrPassport}
              onChange={(e) => setNicOrPassport(e.target.value)}
              required
              className={inputField}
            />
          </label>
          <br />
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
          <label htmlFor="confirmPassword" className={label}>
            Confirm Password:
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={`${inputField} pr-10`}
              />
              <button
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 lg:text-white"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>
          <br />
          <div className="mt-4 space-x-4 text-center">
            <button
              type="submit"
              className="btn-primary cursor-pointer rounded px-2 py-2 lg:px-6"
            >
              Create Account
            </button>
            <button
              onClick={handleBack}
              className="btn-secondary cursor-pointer rounded px-2 py-2 lg:px-6"
            >
              Back to Home
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
