"use client";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeaturedWork from "../../components/FeaturedWork";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen text-white relative overflow-hidden">
			<div className="relative z-10">
					<Navbar />
					<Hero />
					<FeaturedWork />
					<Carousel />
					<Footer />
			</div>
		</main>
	);
}
