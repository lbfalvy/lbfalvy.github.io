import React from "react";
import { Project } from "../components/Project";
import styles from './Projects.module.scss';
import sstyles from '../helpers/shared.module.scss';
import projects from './projects';
import useTags from "../hooks/useTags";
import useSearchTerm from "../hooks/useSearchTerm";
import { classList } from "@lbfalvy/react-utils";
import useMetadata from "../hooks/useMetadata";
import { SsrReady } from "../components/SsrReady";

export default function ProjectsPage() {
	const [filtered, tags, filter, toggleFilter] = useTags(projects, ...useSearchTerm('filter'))
	useMetadata('website',
		`Projects`,
		'my humble portfolio',
		['portfolio']
	)
	return <div className={classList(styles.main, sstyles.sideBarContainer)}>
		<SsrReady />
		<h2>Projects</h2>
		<header className={classList(sstyles.sideBar, sstyles.filters)}>
			{tags.map(tag => 
				<a key={tag} href="#"
					onClick={() => toggleFilter(tag)}
					className={classList(
						filter.includes(tag) && sstyles.active,
						filtered.every(x => !x.tags.includes(tag)) && sstyles.empty
					)}
				>{tag}</a>
			)}
		</header>
		<main>
			{filtered.map(proj =>
				<Project name={proj.name} url={proj.url} key={proj.name}>
					{proj.description}
				</Project>
			)}
		</main>
	</div>
}