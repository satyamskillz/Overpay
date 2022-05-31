import Router from "next/router"
import Link from "next/link";
import { useEffect, useState } from "react";


function PageHeader() {

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
    );
}

export default PageHeader;