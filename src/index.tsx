import { createRoot, hydrateRoot } from 'react-dom/client'
import React from 'react'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/App'
import { Await } from '@lbfalvy/react-await'
import BlogPage from './pages/Blog'

const obtainProjectsPage = () => import('./pages/Projects')
const obtainAboutPage = () => import('./pages/about')
const obtainArticlePage = () => import('./pages/Article')

const tree = () =>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<AppLayout/>} >
            <Route index element={<BlogPage/>} />
            <Route path="blog/:article" element={<Await obtainFor={obtainArticlePage} />} />
            <Route path="projects" element={<Await obtainFor={obtainProjectsPage} />} />
            <Route path="about" element={<Await obtainFor={obtainAboutPage} />} />
        </Route>
    </Routes>
</BrowserRouter>

document.body.onload = () => {
    const old = document.getElementById('root')
    if (old) hydrateRoot(old, tree())
    else {
        const root = document.createElement('div')
        root.id='root'
        document.body.append(root)
        createRoot(root).render(tree());
    }
}