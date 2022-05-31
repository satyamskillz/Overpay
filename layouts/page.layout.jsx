import Router from "next/router"
import Link from "next/link";
import { useEffect, useState } from "react";

function Pagelayout(props) {
    const [isSigned, setSigned] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === "true") {
            setSigned(true)
        }
    }, []);

    const handleSignOut = () => {
        // remove the token from local storage
        localStorage.removeItem("isLoggedIn")
        setSigned(false)
        Router.push("/")
    }

    return (
        <div className="w-full bg-gray-50">
            <div className="w-full h-[100px] px-8 md:px-6 bg-gray-900 flex items-center justify-between">
                <div>
                    <img src="/logos/third.svg" alt="Logo of overpay" />
                </div>

                {isSigned ?
                    <button onClick={handleSignOut} className="h-14 w-[150px] md:h-12 md:w-[100px] rounded-xl text-[#fff] bg-primary font-semibold">
                        Log out
                    </button>
                    :
                    <Link href="/signin">
                        <button className="h-14 w-[150px] md:h-12 md:w-[100px] rounded-xl text-[#fff] bg-primary font-semibold">
                            Sign In
                        </button>
                    </Link>
                }
            </div>
            <div className="w-full h-screen flex flex-col p-6">
                <div className="flex-auto flex flex-col items-center justify-center md:justify-start">
                    {props.children}
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600 text-base">Privacy Policy</p>
                    <p className="text-gray-600 text-base">Copyright © 2022</p>
                </div>
            </div>
        </div>
    );
}

export default Pagelayout;