import React, { Component } from "react";
import { Link } from "react-router-dom";

import './header.css';

export default class Header extends Component {

	render() {

		return (
			<header className="header">

				<h1 className="header__title"><Link to='/' >Star DB</Link></h1>
				<nav className="navbar navbar-expand-lg navbar-dark  ">
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<Link to='/people' className="nav-link" >People
								<span className="visually-hidden">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to='/planets' className="nav-link ">Planets
								<span className="visually-hidden">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to='/starships' className="nav-link " >Starships
								<span className="visually-hidden">(current)</span>
							</Link>
						</li>
					</ul>
				</nav>
			</header>

		)
	}
}