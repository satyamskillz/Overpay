import { useState, useRef, useEffect } from "react";
import Pagelayout from "../layouts/page.layout";
import Router from "next/router";
import Head from "next/head";

function ForgotPasswordPage() {
    const handleSignOut = () => {
        // remove the token from local storage and clear all the cookies
        localStorage.removeItem("isLoggedIn")
        Router.push("/")
    }
    // Check if user is signed in or not
    // If user is not signed in, redirect to sign in page 
    useEffect(() => {
        if (!localStorage.getItem("isLoggedIn")) {
            Router.push("/");
        }
    }, []);

    return (
        <Pagelayout>

            <Head>
                <title>Welcome, John Doe!</title>
            </Head>

            <div className="flex w-[510px] md:w-full p-10 bg-[#fff] gap-10 flex-col items-center justify-center md:p-5 md:gap-5 rounded-2xl shadow-[0px_16px_24px_rgba(93,106,131,0.02)]">
                <div className="text-center grid gap-4">
                    <h3 className="text-4xl font-extrabold">
                        Hi, Johne Doe!
                    </h3>
                    <p className="text-gray-600 text-base">
                        You’re logged in. Well done!
                    </p>
                </div>
                <div className="w-full grid gap-6">
                    <button onClick={handleSignOut} className="w-full h-[56px] rounded-xl text-[#fff] bg-primary font-semibold">
                        Log out
                    </button>
                </div>
            </div>
        </Pagelayout>
    );
}

export default ForgotPasswordPage;