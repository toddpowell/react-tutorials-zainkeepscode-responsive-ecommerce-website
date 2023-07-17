import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from "@heroicons/react/outline"

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>amazon</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}></LocationMarkerIcon>
                        <span>111 North Avenue, Orlando, FL, 32801</span>
                    </span>
                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon}></PhoneIcon>
                        <span>tel: 555-123-4567</span>
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon}></InboxIcon>
                        <a href="mailto:support@amazon.com">support@amazon.com</a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon}></LoginIcon>
                        <span>Sign in</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon}></LinkIcon>
                        <span>Safety Privacy & Terms</span>
                    </span>
                </div>
            </div>

        </div>

        <div className={css.copyRight}>
            <span>Copyright 2022 by Amazon, Inc.</span>
            <span>All rights reserved</span>
        </div>

    </div>
  )
}

export default Footer