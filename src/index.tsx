import { createRoot, hydrateRoot } from 'react-dom/client'
import React from 'react'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/App'
import { Await } from '@lbfalvy/react-await'
import "tiny-track-tracker";

const obtainBlogPage = async () => import('./pages/Blog')
const obtainProjectsPage = async () => {
	try {
		return await import('./pages/Projects')
	} catch (e) {
		console.error(e);
		throw e;
	}
}
const obtainAboutPage = () => import('./pages/about')
const obtainArticlePage = () => import('./pages/Article')
const obtainFortunePage = () => import('./pages/Fortune')

const tree = () =>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<AppLayout />} >
				<Route index element={<Await f$Comp={obtainBlogPage} />} />
				<Route path="blog/:article" element={<Await f$Comp={obtainArticlePage} />} />
				<Route path="projects" element={<Await f$Comp={obtainProjectsPage} />} />
				<Route path="about" element={<Await f$Comp={obtainAboutPage} />} />
				<Route path="fortune" element={<Await f$Comp={obtainFortunePage} />} />
			</Route>
		</Routes>
	</BrowserRouter>

document.body.onload = () => {
	const old = document.getElementById('root')
	if (old) hydrateRoot(old, tree())
	else {
		const root = document.createElement('div')
		root.id = 'root'
		document.body.append(root)
		createRoot(root).render(tree());
	}
}