import React from "react";
import classes from './burgerMenu.module.css';
import {Anchor, Popover} from 'antd';
import Link from "antd/es/typography/Link";

export const BurgerMenu = () => {

    // const scrollToTarget = (link: string) => {
    //     console.log('Anchor:OnChange', link);
    //     if(link === '#part-5') {
    //         console.log('попали', link);
    //         const targetElement = document.getElementById("part-5");
    //
    //         if (targetElement) {
    //             console.log(targetElement.scrollIntoView, link);
    //             targetElement.scrollIntoView({behavior: 'smooth'});
    //         }
    //     }
    // };

    return (
        <div className={classes.wrap}>
                    <Anchor
                        // onChange={scrollToTarget}
                        items={[
                            {
                                key: 'part-1',
                                href: '#part-1',
                                title: 'Главная',
                            },
                            {
                                key: 'part-2',
                                href: '#part-2',
                                title: 'Обо мне',
                            },
                            {
                                key: 'part-3',
                                href: '#part-3',
                                title: 'Новстная лента',
                            },
                            {
                                key: 'part-4',
                                href: '#part-4',
                                title: 'Для родителей',
                            },
                            {
                                key: 'part-5',
                                href: '#part-5',
                                title: 'Творческая копилка',
                            },
                        ]}
                    />
        </div>
    )
}