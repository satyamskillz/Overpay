import { useState, useRef, useEffect } from "react";
import Pagelayout from "../layouts/page.layout";
import Router from "next/router";
import Head from "next/head";

function VerifyPage() {

    const digit1Ref = useRef(null);
    const digit2Ref = useRef(null);
    const digit3Ref = useRef(null);
    const digit4Ref = useRef(null);
    const digit5Ref = useRef(null);

    const [isSubmitDisabled, setSubmitDisabled] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [minCount, setMinCount] = useState(60)
    const [error, setError] = useState(null)
    const [code, setCode] = useState({
        digit1: "",
        digit2: "",
        digit3: "",
        digit4: "",
        digit5: "",
    })

    useEffect(() => {
        if (code.digit1 && code.digit2 && code.digit3 && code.digit4 && code.digit5) {
            setSubmitDisabled(false)
        } else {
            setSubmitDisabled(true)
        }
    }, [code])

    useEffect(() => {
        const interval = setInterval(() => {
            minCount > 0 ? setMinCount(minCount - 1) : clearInterval(interval)
        }, 1000)
        return () => clearInterval(interval)
    }, [minCount])

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null)
        setLoading(true)
        // delay for 5 seconds
        setTimeout(() => {
            localStorage.setItem("isLoggedIn", true)
            setLoading(false)
            Router.push("/welcome");
        }, 5000)
    }

    const handleOnInputChange = (e) => {
        if (e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength)
        }
    }

    return (
        <Pagelayout>
            <Head>
                <title>Verify your account</title>
            </Head>
            <div className="flex w-[510px] md:w-full p-10 bg-[#fff] gap-10 flex-col items-center justify-center md:p-5 md:gap-5 rounded-2xl shadow-[0px_16px_24px_rgba(93,106,131,0.02)]">
                <div className="text-center grid gap-4">
                    <h3 className="text-4xl font-extrabold">
                        Verify your email
                    </h3>
                    <p className="text-gray-600 text-base">
                        We have sent code to your email
                        <br />
                        <span className="text-gray-900 font-semibold">
                            alesiaka******@mail.com
                        </span>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10 md:gap-6">
                    <div className="flex gap-6 justify-center md:gap-0 md:justify-around">
                        <input className="one-digit-input h-14 w-14 pl-5 font-extrabold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                            onInput={handleOnInputChange}
                            type="number"
                            min={0}
                            max={9}
                            maxLength="1"
                            ref={digit1Ref}
                            onChange={(e) => {
                                setCode({
                                    ...code,
                                    digit1: e.target.value
                                })
                                if (e.target.value !== "") {
                                    digit2Ref.current.focus();
                                }
                            }}
                        />

                        <input className="one-digit-input h-14 w-14 pl-5 font-extrabold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                            onInput={handleOnInputChange}
                            type="number"
                            min={0}
                            max={9}
                            maxLength="1"
                            ref={digit2Ref}
                            onChange={(e) => {
                                setCode({
                                    ...code,
                                    digit2: e.target.value
                                })
                                if (e.target.value !== "") {
                                    digit3Ref.current.focus();
                                }
                            }}
                        />

                        <input className="one-digit-input h-14 w-14 pl-5 font-extrabold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                            onInput={handleOnInputChange}
                            type="number"
                            min={0}
                            max={9}
                            maxLength="1"
                            ref={digit3Ref}
                            onChange={(e) => {
                                setCode({
                                    ...code,
                                    digit3: e.target.value
                                })
                                if (e.target.value !== "") {
                                    digit4Ref.current.focus();
                                }
                            }}
                        />

                        <input className="one-digit-input h-14 w-14 pl-5 font-extrabold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                            onInput={handleOnInputChange}
                            type="number"
                            min={0}
                            max={9}
                            maxLength="1"
                            ref={digit4Ref}
                            onChange={(e) => {
                                setCode({
                                    ...code,
                                    digit4: e.target.value
                                })
                                if (e.target.value !== "") {
                                    digit5Ref.current.focus();
                                }
                            }}
                        />

                        <input className="one-digit-input h-14 w-14 pl-5 font-extrabold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                            onInput={handleOnInputChange}
                            type="number"
                            min={0}
                            max={9}
                            maxLength="1"
                            ref={digit5Ref}
                            onChange={(e) => {
                                setCode({
                                    ...code,
                                    digit5: e.target.value
                                })
                                if (e.target.value !== "") {
                                    setSubmitDisabled(false)
                                }
                            }}
                        />
                    </div>

                    {error && <ErrorBox error={error} />}

                    <div className="w-full grid gap-6">
                        <button type="submit" className="w-full h-[56px] rounded-xl text-[#fff] bg-primary font-semibold" disabled={isSubmitDisabled}>
                            {isLoading ? "Verifying..." : "Verify Account"}
                        </button>

                        <p className="text-center text-gray-600 text-base">
                            Resend code in <span className="text-gray-900 font-semibold">{minCount}:00</span>
                        </p>
                    </div>

                </form>
            </div>
        </Pagelayout>
    );
}

export default VerifyPage;


const ErrorBox = (props) => {
    return (
        <div className="w-full h-12 p-4 flex items-center border border-error rounded-xl">
            <p className="text-error text-sm text-sm font-semibold">
                {props.error}
            </p>
        </div>
    )
}