import React from 'react'
import { Layout } from './app/components/Layout'
import Dashboard from './app/components/Dashboard'
import '@material-tailwind/react/tailwind.css'

export default function App() {
    return (
        <Layout>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                crossOrigin="anonymous"
            />
            <Dashboard />
        </Layout>
    )
}
