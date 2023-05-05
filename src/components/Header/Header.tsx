import React, {useState} from "react";
import './header.module.css';

import header from './header.module.css'

function Header() {

    const [scroll, setScroll] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 5) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    // const fixedText = "I am fixed :)";
    // // const whenNotFixed = "I am not a fixed header :(";
    // const [headerText, setHeaderText] = useState("");
    // useEffect(() => {
    //     const myHeader = document.getElementById("headerWrap");
    //     const sticky = myHeader?.offsetTop || 0;
    //     const scrollCallBack = window.addEventListener("scroll", () => {
    //         if (window.pageYOffset > sticky) {
    //             myHeader?.classList.add(header.mySticky);
    //             if (headerText !== fixedText) {
    //                 setHeaderText(fixedText);
    //             }
    //         } else {
    //             myHeader?.classList.remove(header.mySticky);
    //             if (headerText !== "") {
    //                 setHeaderText("");
    //             }
    //         }
    //     });
    //     return () => {
    //         // @ts-ignore
    //         window.removeEventListener("scroll", scrollCallBack);
    //     };
    // }, []);

    return <div className={scroll ? `${header.wrap} ${header.mySticky}` : header.wrap}>
        <div className={header.container}>
            <div style={{backgroundColor: "#00fe9c", color: "white"}}>Иконка</div>
            <div style={{backgroundColor: "#00fe9c", color: "white"}}>телефон и меню</div>
        </div>
    </div>;
}

export default Header