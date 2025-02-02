import React, { useEffect, useState } from "react";
import axiosCall from "../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/user");
    }
  }, [navigate]);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [isSaveClick, setIsSaveClick] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let errors = {};

    if (!values.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Invalid email format";

    if (!values.password.trim()) errors.password = "Password is required";
    else if (values.password.length < 6) errors.password = "Password must be at least 6 characters";

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSaveClick(true);

    if (validate()) {
      try {
        const response = await axiosCall.post("/auth/login", values);
        toast.success(response.data.message);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        navigate("/user");
      } catch (error) {
        toast.error(error.response?.data?.message || "Login failed.");
      }
    }
  };

  return (
    <>
      <div className="relative ">
        <img
          src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt="Language learning background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
          <svg className="absolute inset-x-0 bottom-0 text-white" viewBox="0 0 1160 163" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5 76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 h-screen">
            <div className="flex flex-col items-center xl:flex-row justify-between">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Master a New Language <br className="hidden md:block" />
                  and Open Doors to the World
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Whether you're looking to travel, connect with others, or boost your career, learning a new language can change your life.
                </p>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h2 className="text-2xl font-semibold text-center mb-6">Log In to Your Language Learning Account</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Email"
                      />
                      {isSaveClick && error.email && <p className="text-red-500 text-sm">{error.email}</p>}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          type={showPass ? "text" : "password"}
                          name="password"
                          value={values.password}
                          onChange={handleInputChange}
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                          placeholder="Password"
                        />
                        <button type="button" className="absolute right-3 top-2 text-gray-500" onClick={() => setShowPass(!showPass)}>
                          {showPass ? "Hide" : "Show"}
                        </button>
                      </div>
                      {isSaveClick && error.password && <p className="text-red-500 text-sm">{error.password}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-deep-purple-accent-400 text-white rounded-md hover:bg-deep-purple-accent-400"
                    >
                      Login
                    </button>
                  </form>

                  <p className="mt-4 text-center text-sm">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-indigo-600 hover:underline">
                      Sign up now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
