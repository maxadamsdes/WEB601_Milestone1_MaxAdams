import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

// Sets data for the navbar
export const SidebarData = [
    // First navbar item
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    // Second navbar item
    {
        title: 'Program',
        path: '/program',
        icon: <IoIcons.IoIosClipboard />,
        cName: 'nav-text'
    },
    // Third navbar item
    {
        title: 'Events',
        path: '/events',
        icon: <MdIcons.MdEventBusy />,
        cName: 'nav-text'
    },
    // Fourth navbar item
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiFillQuestionCircle />,
        cName: 'nav-text'
    },
    // Fifth navbar item
    {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosLogIn />,
        cName: 'nav-text'
    },
]