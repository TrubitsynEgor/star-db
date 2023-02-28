import React, { Component } from "react";

import './header.css';

export default class Header extends Component {

	render() {

		return (
			<header className="header">

				<h1 className="header__title"><a href="#" >Star DB</a></h1>
				<nav className="navbar navbar-expand-lg navbar-dark  ">
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<a className="nav-link" href="#">People
								<span className="visually-hidden">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="#">Planets
								<span className="visually-hidden">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="#">Starships
								<span className="visually-hidden">(current)</span>
							</a>
						</li>
					</ul>
				</nav>
			</header>

		)
	}
}