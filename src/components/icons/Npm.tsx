import React from "react";
import styles from './Npm.module.scss'

export default function Npm(): React.ReactElement {
	return <svg className={styles.main} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
		<path fill="#C12127" d="M0 256V0h256v256z"/>
		<path fill="#FFF" d="M48 48h160v160h-32V80h-48v128H48z"/>
	</svg>
}