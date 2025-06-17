"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

/**
 * ProjectShowcaser component to display all projects in a carousel format
 */
const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextProject = () => {
		setCurrentIndex((prev) => (prev + 1) % projects.length);
	};

	const prevProject = () => {
		setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
	};

	return (
		<section id="all-projects" className="py-32 relative overflow-hidden">
			{/* Subtle section overlay for depth without breaking seamless flow */}
			<div className="absolute inset-0 section-subtle-overlay opacity-50"></div>

			<div className="container mx-auto px-4 relative z-10 max-w-7xl">
				{/* Section Header */}
				<div className="text-center mb-20">
					<h2 className="font-lobster text-5xl md:text-7xl font-normal leading-[0.9] tracking-tight relative">
						{/* Deep Shadow Layer for 3D Effect */}
						<div className="absolute inset-0 transform translate-x-2 translate-y-2 opacity-70">
							<span className="block bg-gradient-to-b from-gray-900 via-black to-gray-950 bg-clip-text text-transparent">All Projects</span>
						</div>

						{/* Mid Shadow Layer */}
						<div className="absolute inset-0 transform translate-x-1 translate-y-1 opacity-85">
							<span className="block bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent">All Projects</span>
						</div>

						{/* Main Metallic Text Layer */}
						<span className="block bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent relative z-10 drop-shadow-sm">
							All Projects
						</span>
					</h2>
				</div>

				{/* Project Carousel */}
				<div className="relative flex items-center justify-center w-full max-w-7xl mx-auto">
					{/* Left Navigation Button */}
					<button
						onClick={prevProject}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 
							w-12 h-12 rounded-full
							bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600
							shadow-[0_0_20px_rgba(203,213,225,0.3),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)]
							border border-gray-400/30
							hover:shadow-[0_0_30px_rgba(203,213,225,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]
							hover:scale-110 transition-all duration-300
							flex items-center justify-center group"
						aria-label="Previous project">
						<svg
							className="w-6 h-6 text-gray-800 group-hover:text-gray-700 transition-colors duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					{/* Right Navigation Button */}
					<button
						onClick={nextProject}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 
							w-12 h-12 rounded-full
							bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600
							shadow-[0_0_20px_rgba(203,213,225,0.3),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)]
							border border-gray-400/30
							hover:shadow-[0_0_30px_rgba(203,213,225,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]
							hover:scale-110 transition-all duration-300
							flex items-center justify-center group"
						aria-label="Next project">
						<svg
							className="w-6 h-6 text-gray-800 group-hover:text-gray-700 transition-colors duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>
					{/* Previous Project - Same size as main card but fading into background */}
					<div className="absolute left-0 w-full max-w-2xl h-96 scale-90 transform -translate-x-12 z-0 transition-all duration-500 hover:scale-95 cursor-pointer">
						<div className="relative h-full">
							<div className="pointer-events-none">
								<ProjectCard
									title={projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1].title}
									description={projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1].description}
									image={projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1].image}
									link={projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1].link}
								/>
							</div>
							{/* Subtle fade gradient from left edge - more visible */}
							<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none"></div>
							<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none"></div>
							<div className="absolute inset-0 backdrop-blur-[2px] opacity-40 pointer-events-none"></div>
						</div>
					</div>

					{/* Current Project Card - More Vibrant and 3D */}
					<div className="w-full max-w-2xl h-96 z-10 relative transition-all duration-700 transform hover:scale-105">
						<div className="relative h-full">
							{/* 3D Light Shadow Effects (using light colors for dark background) */}
							<div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-gray-600/30 rounded-2xl transform translate-x-2 translate-y-2 blur-sm"></div>
							<div className="absolute inset-0 bg-gradient-to-tl from-gray-300/15 to-gray-500/25 rounded-2xl transform translate-x-1 translate-y-1 blur-[2px]"></div>

							{/* Enhanced contrast and vibrancy */}
							<div className="relative transform scale-105 brightness-125 contrast-125 saturate-125 hue-rotate-15">
								<ProjectCard
									title={projects[currentIndex].title}
									description={projects[currentIndex].description}
									image={projects[currentIndex].image}
									link={projects[currentIndex].link}
								/>
							</div>
						</div>
					</div>

					{/* Next Project - Same size as main card but fading into background */}
					<div className="absolute right-0 w-full max-w-2xl h-96 scale-90 transform translate-x-12 z-0 transition-all duration-500 hover:scale-95 cursor-pointer">
						<div className="relative h-full">
							<div className="pointer-events-none">
								<ProjectCard
									title={projects[(currentIndex + 1) % projects.length].title}
									description={projects[(currentIndex + 1) % projects.length].description}
									image={projects[(currentIndex + 1) % projects.length].image}
									link={projects[(currentIndex + 1) % projects.length].link}
								/>
							</div>
							{/* Subtle fade gradient from right edge - more visible */}
							<div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent pointer-events-none"></div>
							<div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent pointer-events-none"></div>
							<div className="absolute inset-0 backdrop-blur-[2px] opacity-40 pointer-events-none"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Carousel;
