import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

/**
 * Featured work section to highlight select projects
 * Will display a curated selection of your best work
 */
const FeaturedWork = () => {
	// Filter only featured projects
	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<section id="featured" className="pt-64 pb-32 relative overflow-hidden">
			{/* Subtle section overlay for depth without breaking seamless flow */}
			<div className="absolute inset-0 section-subtle-overlay opacity-60"></div>

			<div className="container mx-auto px-4 relative z-10 max-w-7xl">
				{/* Section Header - Back at the top */}
				<div className="text-center mb-20">
					<h2 className="font-lobster text-5xl md:text-7xl font-normal leading-[0.9] tracking-tight relative">
						{/* Deep Shadow Layer for 3D Effect */}
						<div className="absolute inset-0 transform translate-x-2 translate-y-2 opacity-70">
							<span className="block bg-gradient-to-b from-gray-900 via-black to-gray-950 bg-clip-text text-transparent">Featured Work</span>
						</div>

						{/* Mid Shadow Layer */}
						<div className="absolute inset-0 transform translate-x-1 translate-y-1 opacity-85">
							<span className="block bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent">Featured Work</span>
						</div>

						{/* Main Metallic Text Layer */}
						<span className="block bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent relative z-10 drop-shadow-sm">
							Featured Work
						</span>
					</h2>
				</div>

				{/* Slight U-Shape Layout Container for Projects */}
				<div className="relative">
					{/* Left Project - Slightly raised */}
					<div className="absolute left-0 top-0 w-full md:w-1/3 transform md:-translate-y-8 px-4">
						{featuredProjects[0] && (
							<ProjectCard
								title={featuredProjects[0].title}
								description={featuredProjects[0].description}
								image={featuredProjects[0].image}
								link={featuredProjects[0].link}
							/>
						)}
					</div>

					{/* Right Project - Slightly raised */}
					<div className="absolute right-0 top-0 w-full md:w-1/3 transform md:-translate-y-8 px-4">
						{featuredProjects[2] && (
							<ProjectCard
								title={featuredProjects[2].title}
								description={featuredProjects[2].description}
								image={featuredProjects[2].image}
								link={featuredProjects[2].link}
							/>
						)}
					</div>

					{/* Center Project - At normal level (bottom of the U) */}
					<div className="flex justify-center">
						<div className="w-full md:w-1/3 px-4">
							{featuredProjects[1] && (
								<ProjectCard
									title={featuredProjects[1].title}
									description={featuredProjects[1].description}
									image={featuredProjects[1].image}
									link={featuredProjects[1].link}
								/>
							)}
						</div>
					</div>

					{/* Spacer for mobile layout */}
					<div className="md:hidden space-y-12 mt-8">
						{featuredProjects.slice(0, 3).map((project, index) => (
							<div key={index} className={index === 0 ? "block" : "hidden"}>
								{/* Mobile layout handled by absolute positioning above */}
							</div>
						))}
					</div>
				</div>

				{/* Add bottom padding to accommodate the layout */}
				<div className="h-32 md:h-48"></div>
			</div>
		</section>
	);
};

export default FeaturedWork;
