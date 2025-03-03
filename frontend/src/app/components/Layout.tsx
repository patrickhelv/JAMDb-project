import React, { ReactNode } from 'react'
import NavBar from './Navbar'
import { Footer } from './Footer'

/**
 * Layout wrapper
 */

export function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                crossOrigin="anonymous"
            />

            <div className="min-h-screen relative">
                <NavBar />
                <div className="flex flex-col max-w-screen-xl my-0 mx-auto px-10">
                    <div className="flex-grow">{children}</div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
