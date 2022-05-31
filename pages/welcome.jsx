import { useState, useRef, useEffect } from "react";
import Pagelayout from "../layouts/page.layout";

function ForgotPasswordPage() {
    return (
        <Pagelayout>
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
                    <button type="submit" className="w-full h-[56px] rounded-xl text-[#fff] bg-primary font-semibold">
                        Log out
                    </button>
                </div>
            </div>
        </Pagelayout>
    );
}

export default ForgotPasswordPage;