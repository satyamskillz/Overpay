import { useState, useRef, useEffect } from "react";
import Pagelayout from "../layouts/page.layout";

function ForgotPasswordPage() {
    return (
        <Pagelayout>
            <div className="flex w-[510px] md:w-full p-10 bg-[#fff] gap-10 flex-col items-center justify-center md:p-5 md:gap-5 rounded-2xl shadow-[0px_16px_24px_rgba(93,106,131,0.02)]">
                <div className="text-center grid gap-4">
                    <h3 className="text-4xl font-extrabold">
                        Need help with your account?
                    </h3>
                    <p className="text-gray-600 text-base">
                        Enter the email address associated with your account and we will send you a link to reset your password.
                    </p>
                </div>
                <form className="w-full flex flex-col gap-10 md:gap-6">
                    <input
                        className="h-[56px] w-full px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-1 focus:ring-primary placeholder:text-gray-500"
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <div className="w-full grid gap-6">
                        <button type="submit" className="w-full h-[56px] rounded-xl text-[#fff] bg-primary font-semibold">
                            Send Link
                        </button>

                        <p className="text-center text-gray-900 font-extrabold">
                            Forgot your email?
                        </p>
                    </div>
                </form>
            </div>
        </Pagelayout>
    );
}

export default ForgotPasswordPage;