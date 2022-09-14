import React, { useRef, useState } from 'react'

// material-tailwind is not officially supported by TS - hence the ignores
/* eslint-disable */
// @ts-ignore
import NavbarContainer from '@material-tailwind/react/NavbarContainer'
// @ts-ignore
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper'
// @ts-ignore
import NavbarToggler from '@material-tailwind/react/NavbarToggler'
// @ts-ignore
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse'
// @ts-ignore
import Nav from '@material-tailwind/react/Nav'
// @ts-ignore
import NavItem from '@material-tailwind/react/NavItem'
// @ts-ignore
import Icon from '@material-tailwind/react/Icon'
// @ts-ignore
import Button from '@material-tailwind/react/Button'
// @ts-ignore
import Popover from '@material-tailwind/react/Popover'
// @ts-ignore
import PopoverContainer from '@material-tailwind/react/PopoverContainer'
// @ts-ignore
import PopoverHeader from '@material-tailwind/react/PopoverHeader'
// @ts-ignore
import PopoverBody from '@material-tailwind/react/PopoverBody'
/* eslint-enable */

export default function NavBar() {
    const [openMenu, setOpenMenu] = useState(false)
    const profileRef = useRef()
    const settingsRef = useRef()

    const notImplemented = (
        <PopoverContainer>
            <PopoverHeader>Whops! That's embarrassing</PopoverHeader>
            <PopoverBody>This functionality has not yet been implemented.</PopoverBody>
        </PopoverContainer>
    )

    return (
        <>
            <nav
                className="flex justify-start items-start shadow-lg md:flex-shrink py-1"
                data-testid="nav"
            >
                <div className='container max-w-7xl px-4 mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between undefined'>
                    <NavbarWrapper>
                        <div className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap text-white">
                            <h1 className="text-red-600 text-2xl">JAMDb</h1>
                            <p className="opacity-25 m-0 p-0 text-white">
                                Just Another Movie Database
                            </p>
                        </div>
                        <button
                            id="navToggle"
                            className="cursor-pointer text-xl leading-none py-1 px-1.5 rounded-full border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                            type="button"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        </button>
                    </NavbarWrapper>
                    <NavbarCollapse open={openMenu}>
                        <div className="flex ml-auto flex-col lg:flex-row items-center md:justify-center">
                            <Button
                                ref={settingsRef}
                                color=""
                                className="px-5 py-4 flex gap-1 text-xs uppercase font-medium leading text-white rounded-lg justify-start bg-gray-700"
                                ripple="light"
                            >
                                <Icon name="language" size="xl" />
                                Discover
                            </Button>
                            <Button
                                ref={profileRef}
                                color=""
                                className="px-5 py-4 flex gap-1 text-xs uppercase font-medium leading text-white rounded-lg justify-start"
                                ripple="light"
                            >
                                <Icon name="account_circle" size="xl" />
                                Profile
                            </Button>
                            <Button
                                ref={settingsRef}
                                color=""
                                className="px-5 py-4 flex gap-1 text-xs uppercase font-medium leading text-white rounded-lg justify-start"
                                ripple="light"
                            >
                                <Icon name="settings" size="xl" />
                                Settings
                            </Button>
                            <Popover placement="bottom" ref={profileRef}>
                                {notImplemented}
                            </Popover>
                            <Popover placement="bottom" ref={settingsRef}>
                                {notImplemented}
                            </Popover>
                        </div>
                    </NavbarCollapse>
                </div>
            </nav>
        </>
    )
}
