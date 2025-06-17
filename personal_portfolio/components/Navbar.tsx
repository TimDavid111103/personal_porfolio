"use client";

import React, { useState } from "react";
import Link from "next/link";

/**
 * Navigation bar component that appears at the top of all pages
 * Will contain logo, navigation links, and possibly a mobile menu
 */
const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	// Smooth scroll function with casual animation
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const navbarHeight = -100;
			const extraOffset = sectionId === "all-projects" ? 100 : 0; // Extra offset for better visibility
			const elementPosition = element.offsetTop - navbarHeight - extraOffset;

			window.scrollTo({
				top: elementPosition,
				behavior: "smooth",
			});
		}
		// Close mobile menu if open
		setMobileMenuOpen(false);
	};

	return (
		<nav className="absolute top-0 left-0 right-0 z-50 py-6">
			{/* Silvery to dark gradient for navbar area - reverse of footer */}
			<div className="absolute inset-0 bg-gradient-to-b from-gray-500/10 via-gray-800/15 to-black/20"></div>

			{/* Subtle metallic highlight at the top */}
			<div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/5 to-transparent"></div>

			<div className="container mx-auto flex justify-between items-center px-4 max-w-7xl relative z-10">
				{/* Clean 3D Silver Logo */}
				<div className="relative group">
					<Link href="/" className="block">
						<div className="relative text-5xl font-black tracking-tight transform transition-all duration-500 hover:scale-105">
							{/* Deep Shadow Layer for 3D Effect */}
							<div className="absolute inset-0 transform translate-x-2 translate-y-2 text-5xl font-black tracking-tight">
								<span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent opacity-40">TD</span>
							</div>

							{/* Mid Shadow Layer */}
							<div className="absolute inset-0 transform translate-x-1 translate-y-1 text-5xl font-black tracking-tight">
								<span className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent opacity-60">TD</span>
							</div>

							{/* Main Silver Body */}
							<div className="relative text-5xl font-black tracking-tight">
								<span className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">TD</span>
							</div>
						</div>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-10 items-center">
					<button onClick={() => scrollToSection("hero")}>
						<span className="font-body bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 transition-all duration-300 font-medium cursor-pointer">
							About
						</span>
					</button>
					<button onClick={() => scrollToSection("featured")}>
						<span className="font-body bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 transition-all duration-300 font-medium cursor-pointer">
							Featured
						</span>
					</button>
					<button onClick={() => scrollToSection("all-projects")}>
						<span className="font-body bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 transition-all duration-300 font-medium cursor-pointer">
							All Projects
						</span>
					</button>
					<button onClick={() => scrollToSection("footer")}>
						<div className="relative overflow-hidden group px-6 py-2 rounded-xl bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border-2 border-gray-500/50 shadow-inner transition-all duration-300 hover:shadow-lg cursor-pointer">
							<span className="font-body font-medium text-gray-800 relative z-10 tracking-wide drop-shadow-sm">Connect</span>
							{/* Silver shine overlay */}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 ease-out"></div>
							{/* Engraved shadow effect */}
							<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none"></div>
						</div>
					</button>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-800/30 hover:to-gray-700/30 transition-all duration-300 border border-gray-700/20">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{mobileMenuOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden relative">
					{/* Subtle overlay for mobile menu without breaking flow */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10 backdrop-blur-sm"></div>

					<div className="container mx-auto flex flex-col space-y-6 px-4 py-8 relative z-10">
						<button onClick={() => scrollToSection("hero")} className="group text-left">
							<span className="font-body block text-gray-300 hover:text-gray-100 transition-all duration-300 font-medium py-3 border-b border-gray-800/20 group-hover:border-gray-600/40">
								About
							</span>
						</button>
						<button onClick={() => scrollToSection("featured")} className="group text-left">
							<span className="font-body block text-gray-300 hover:text-gray-100 transition-all duration-300 font-medium py-3 border-b border-gray-800/20 group-hover:border-gray-600/40">
								Featured
							</span>
						</button>
						<button onClick={() => scrollToSection("all-projects")} className="group text-left">
							<span className="font-body block text-gray-300 hover:text-gray-100 transition-all duration-300 font-medium py-3 border-b border-gray-800/20 group-hover:border-gray-600/40">
								All Projects
							</span>
						</button>
						<button onClick={() => scrollToSection("footer")} className="mt-4">
							<div className="relative overflow-hidden group px-6 py-3 rounded-xl bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border-2 border-gray-500/50 shadow-inner transition-all duration-300 hover:shadow-lg inline-block">
								<span className="font-body font-medium text-gray-800 relative z-10 tracking-wide drop-shadow-sm">Connect</span>
								{/* Silver shine overlay */}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 ease-out"></div>
								{/* Engraved shadow effect */}
								<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none"></div>
							</div>
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
