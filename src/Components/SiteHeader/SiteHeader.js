import React from 'react'
import { Link } from 'react-router-dom'
import './SiteHeader.css'


export const Logo = ({ variant = 'black' }) => (
	<h1 style={{
		color: variant === 'black' ? '#121212' : '#efefef',
		letterSpacing: '-0.5px',
		fontSize: '16px',
		lineHeight: 1,
		margin: 0,
		display: 'inline-block'
	}}>StartingStrength</h1>
)

export const MenuToggler = () => (
	<div>
		II
	</div>
)


const SiteHeader = () => (
	<header className="SiteHeader">
		<Link to="/">
			<Logo variant={'black'} />
		</Link>
		<MenuToggler />
	</header>
)

export default SiteHeader