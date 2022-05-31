import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Carousel from "../components/carousel";

function LoginPage() {
    const [isPasswordHidden, setPasswordHidden] = useState(true)
    const [isRememberChecked, setRememberChecked] = useState(false)

    return (
        <main className="w-full">
            <Head>
                <title>Sign in to Overpay</title>
            </Head>
            <div className="min-h-screen columns-2 flex p-6 gap-6 lg:p-0">
                {/* Form container */}
                <div className="w-full flex flex-col p-6">
                    <div className="header">
                        <img src="/logos/primary.svg" alt="Logo of overpay" />
                    </div>
                    <div className="flex-auto flex flex-col items-center justify-center md:py-6">
                        <div className="w-[428px] sm:w-full flex flex-col items-center justify-center">
                            <h3 className="text-900 text-[32px] font-extrabold mb-4">
                                Sign in to Overpay
                            </h3>
                            <p className="text-gray-600 font-regular mb-10">Send, spend and save smarter</p>

                            <button className="h-[56px] w-full border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 active:border-primary">
                                <img src="/icons/google.svg" alt="Google logo" />
                                <span className="ml-2">Sign in with Google</span>
                            </button>

                            <div className="w-full relative my-6">
                                <hr className="w-full border-gray-300" />
                                <span className="absolute text-gray-600 bg-[#fff] px-4 font-regular top-0 left-2/4 -translate-x-[50%] -translate-y-[50%]">Or with email</span>
                            </div>

                            <form className="w-full flex flex-col items-center justify-center gap-4">
                                <input
                                    className="h-[56px] w-full px-4 border border-gray-300 rounded-xl active:border-primary focus:outline-none focus:ring focus:ring-1 focus:ring-primary placeholder:text-gray-500"
                                    placeholder="Username or email"
                                    type="email"
                                    required
                                    regex="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                                />
                                <div className="w-full relative">
                                    <input
                                        className="h-[56px] w-full px-4 border border-gray-300 rounded-xl active:border-primary focus:outline-none focus:ring focus:ring-1 focus:ring-primary placeholder:text-gray-500"
                                        type={isPasswordHidden ? "password" : "text"}
                                        placeholder="Password"
                                        required
                                    />
                                    {isPasswordHidden ?
                                        <button type="button" onClick={() => setPasswordHidden(false)} className="bg-[#fff] absolute top-2/4 right-4 -translate-y-[50%] flex items-center justify-center">
                                            <img src="/icons/eye-off.svg" alt="Eye off icon" />
                                        </button>
                                        :
                                        <button type="button" onClick={() => setPasswordHidden(true)} className="bg-[#fff] absolute top-2/4 right-4 -translate-y-[50%] flex items-center justify-center">
                                            <img src="/icons/eye-on.svg" alt="Eye on icon" />
                                        </button>
                                    }
                                </div>
                                <div className="w-full flex justify-between my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="w-4 h-4 hidden" onChange={(e) => setRememberChecked(e.target.checked)} />
                                        {isRememberChecked ?
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#194BFB" />
                                                <path d="M6.59741 10L9.02797 12.4306L13.8891 7.56944" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            :
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="9.5" stroke="#E2E8F0" />
                                            </svg>
                                        }
                                        <span class="ml-4 text-gray-900 font-semibold">Remember me</span>
                                    </label>

                                    <Link href="/forgot-password">
                                        <a className="text-primary font-semibold">
                                            Forgot password?
                                        </a>
                                    </Link>
                                </div>

                                <button
                                    className="h-[56px] w-full bg-primary text-[#fff] font-extrabold border rounded-xl active:ring-primary focus:outline-none"
                                >
                                    Sign in
                                </button>
                            </form>
                            <div className="w-full text-gray-900 my-6 flex justify-center">
                                <p>
                                    Don't have an account?{" "}
                                    <Link href="/signup">
                                        <a className="font-extrabold">Sign up</a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-600 text-base">Privacy Policy</p>
                        <p className="text-gray-600 text-base">Copyright © 2022</p>
                    </div>
                </div>
                {/* Side container */}
                <div className="w-full bg-primary overflow-hidden lg:hidden relative">
                    <Carousel />
                </div>
            </div >
        </main >
    );
}

export default LoginPage;