import Carousel from "../components/carousel";
import { useState } from "react";
import Router from 'next/router';
import Head from "next/head";
import Link from "next/link";


function SignupPage() {
    const [isPasswordHidden, setPasswordHidden] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
        Router.push("/otp");
    }

    return (
        <main className="w-full">
            <Head>
                <title>Sign up for an account</title>
            </Head>
            <div className="min-h-screen columns-2 flex p-6 gap-6 lg:p-0">
                {/* Side container */}
                <div className="w-full bg-primary overflow-hidden lg:hidden relative">
                    <div className="absolute top-6 left-6">
                        <img src="/logos/secondary.svg" alt="Logo of overpay" />
                    </div>
                    <Carousel />
                </div>
                {/* Form container */}
                <div className="w-full flex flex-col p-6">
                    <div className="hidden lg:block">
                        <img src="/logos/primary.svg" alt="Logo of overpay" />
                    </div>
                    <div className="flex-auto flex flex-col items-center justify-center md:py-6">
                        <div className="w-[428px] sm:w-full flex flex-col items-center justify-center">
                            <h3 className="text-900 text-center text-[32px] font-extrabold mb-4">
                                Sign up for an account
                            </h3>
                            <p className="text-gray-600 font-regular mb-10">Send, spend and save smarter</p>

                            <button className="h-[56px] w-full border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 active:border-primary">
                                <img src="/icons/google.svg" alt="Google logo" />
                                <span className="ml-2">Sign Up with Google</span>
                            </button>

                            <div className="w-full relative my-6">
                                <hr className="w-full border-gray-300" />
                                <span className="absolute text-gray-600 bg-[#fff] px-4 font-regular top-0 left-2/4 -translate-x-[50%] -translate-y-[50%]">Or with email</span>
                            </div>

                            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-4">

                                <div className="w-full flex gap-4">
                                    <input className="flex-auto pl-4 h-[56px] border border-gray-300 rounded-xl placeholder:text-gray-500 focus:outline-none focus:ring focus:ring-1 focus:ring-primary"
                                        required
                                        type="text"
                                        placeholder="First name" />
                                    <input className="flex-auto pl-4 h-[56px] border border-gray-300 rounded-xl placeholder:text-gray-500 focus:outline-none focus:ring focus:ring-1 focus:ring-primary"
                                        required
                                        type="text"
                                        placeholder="Last name" />
                                </div>

                                <input
                                    className="h-[56px] w-full px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-1 focus:ring-primary placeholder:text-gray-500"
                                    placeholder="Email"
                                    type="email"
                                    required
                                />
                                <div className="w-full relative">
                                    <input
                                        className="h-[56px] w-full px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-1 focus:ring-primary placeholder:text-gray-500"
                                        type={isPasswordHidden ? "password" : "text"}
                                        placeholder="Password"
                                        minLength={8}
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
                                    <p className="text-sm text-gray-600 font-medium">
                                        By creating an account, you agreeing to our <Link href="/link-1"><a className="text-gray-900 font-semibold">Privacy Policy</a></Link>, and <Link href="/link-2"><a className="text-gray-900 font-semibold">Electronics Communication Policy</a></Link>.
                                    </p>
                                </div>

                                <button
                                    className="h-[56px] w-full bg-primary text-[#fff] font-extrabold border rounded-xl active:ring-primary focus:outline-none"
                                >
                                    Sign Up
                                </button>
                            </form>
                            <div className="w-full text-gray-900 my-6 flex justify-center">
                                <p>
                                    Already have an account?{" "}
                                    <Link href="/">
                                        <a className="font-extrabold">Sign In</a>
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
            </div >
        </main >
    );
}

export default SignupPage;