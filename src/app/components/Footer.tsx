import Connect from "./Connect";
import Links from "./Links";

function Footer() {
    return (
        <div className="pt-24 pb-5">
        <Connect/>
        <Links/>
        <div>
            <div className="h-[1px] my-5 sm:mx-16 mx-6 bg-black text-black"></div>
            <p className="sm:mx-20 mx-10 mb-10 text-[#757575] text-sm cursor-default">© M.SARIM. ALL RIGHTS RESERVED</p>
        </div>
        </div>
    );
}

export default Footer;