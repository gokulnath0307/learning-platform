import React, { useEffect, useState } from "react";
import axiosCall from "../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/user");
    }
  }, [navigate]);
  const [values, setValues] = useState({
    name: "",
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

    if (!values.name.trim()) errors.name = "name is required";
    else if (!/^[a-zA-Z0-9_]{3,20}$/.test(values.name)) errors.name = "name should be alphanumeric (3-20 characters)";

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
        const response = await axiosCall.post("/auth/register", values);
        toast.success(response.data.message);
        setError({});
        setValues({});
        setIsSaveClick(false);
        navigate("/");
      } catch (error) {
        toast.error(error.response?.data?.message || "Registration failed.");
      }
    }
  };

  return (
    <>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt="Language learning background"
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 h-screen">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Master a new language, <br className="hidden md:block" />
                  unlock endless opportunities <span className="text-teal-accent-400">today!</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Join thousands of learners worldwide in mastering new languages. Start speaking and understanding new cultures, whether you're
                  a beginner or looking to improve your skills.
                </p>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">Sign up for language tips & updates</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={values.name || ""}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="name"
                      />
                      {isSaveClick && error.name && <p className="text-red-500 text-sm">{error.name}</p>}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={values.email || ""}
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
                          value={values.password || ""}
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

                    <button type="submit" className="w-full py-2  bg-teal-400 text-white rounded-md hover:bg-teal-700">
                      Create my account
                    </button>
                  </form>

                  <p className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">
                      Login here
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
