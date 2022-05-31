import Link from "next/link";
import PageHeader from "../components/header";

function Pagelayout(props) {
    return (
        <div className="w-full bg-gray-50">
            <PageHeader />
            <div className="w-full h-screen flex flex-col p-6">
                <div className="flex-auto flex flex-col items-center justify-center md:justify-start">
                    {props.children}
                </div>
                <div className="flex justify-between">
                    <Link href="/privacy-policy">
                        <p className="text-gray-600 text-base">Privacy Policy</p>
                    </Link>
                    <p className="text-gray-600 text-base">Copyright © 2022</p>
                </div>
            </div>
        </div>
    );
}

export default Pagelayout;