export default function Navbar(props){
	return(
			<div className="Menu">
				<div className="Menu-child"></div>
				<div className="Menu-child"><h3>{props.title}</h3> </div>
				<div className="Menu-child">
					<nav>
						{/* <ul className="nav">
							<li>Home</li>
							<li>Contact</li>
							<li>Help</li>
						</ul> */}
					</nav>
				</div>
			</div>
		)
}