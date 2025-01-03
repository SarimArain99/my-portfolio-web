import Connect from "./Connect";
import Links from "./Links";

function Footer() {
    return (
        <div className="pt-10 sm:pt-12 md:pt-14 pb-5">
        <Connect/>
        <Links/>
        <div>
            <div className="h-[1px] sm:mt-5 mt-3 sm:mx-16 mx-6 bg-black text-black"></div>
            <p className="sm:mx-20 mx-10 text-[#757575] text-sm cursor-default">2024 - {new Date().getFullYear()} © M.SARIM. ALL RIGHTS RESERVED</p>
        </div>
        </div>
    );
}

export default Footer;