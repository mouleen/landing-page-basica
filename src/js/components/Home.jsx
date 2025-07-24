import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import CardIndex from "./CardIndex";
import Footer from "./Footer";



//create your first component
const Home = () => {
	return (
		<div>
			<NavBar/>
			<Header/>	
			<CardIndex/>
			<Footer/>	
		</div>
	);
};

export default Home;