import React from "react";
import { HyperLink } from "./Link/index";
import "./Navbar.css"
import { BandLogo } from "../Logo/index";
import logo_img from "../../assets/img/Redwoods_Logo_Yellow.png";
import { SocialIconBar } from "../Icon/index";
import hamburgerMenu from "../../assets/icons/hamburger-menu.png";
import { HamburgerMenu } from "../Hamburger-Menu/hamburgerMenu";

interface NavbarProps {
    linksRight: Array<{
        url: string;
        content: string;
    }>;
    linksLeft: Array<{
        url: string;
        content: string;
    }>;

    icons: Array<{ url: string; img: string }>;
}



export const Navbar: React.FC<NavbarProps> = ({ linksRight, linksLeft, icons }) => (
    <div id="navbar">
        <HamburgerMenu menuItems={{ img: hamburgerMenu }} />

        <div id="links-menu">
            {linksLeft.map((link, index) => (
                <HyperLink key={index} link={link} />
            ))}
            
           
            <BandLogo logo={{ img: logo_img }} />

            {linksRight.map((link, index) => (
                <HyperLink key={index} link={link} />
            ))}
        </div>

        <div id="socials">
            <SocialIconBar icons={icons} />
        </div>


    </div>
)
