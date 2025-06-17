import React from "react";
import Image from "next/image";

/**
 * Hero section component that appears at the top of the home page
 * Will contain headline, subheading, and call-to-action
 */
const Hero = () => {
	return (
		<section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
			{/* Subtle section overlay for depth without breaking seamless flow */}
			<div className="absolute inset-0 section-subtle-overlay"></div>

			<div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 relative z-10 max-w-7xl">
				{/* Enhanced Profile Image with Static Depth */}
				<div className="mb-16 md:mb-0 md:w-2/5 flex justify-center">
					<div className="relative group">
						{/* Natural gradient background blend */}
						<div className="absolute -inset-16 rounded-full bg-gradient-radial from-gray-900/20 via-gray-800/10 to-transparent"></div>
						<div className="absolute -inset-8 rounded-full bg-gradient-radial from-gray-800/15 via-gray-700/8 to-transparent"></div>

						<div className="relative w-96 h-96 md:w-[30rem] md:h-[30rem] lg:w-[36rem] lg:h-[36rem] xl:w-[40rem] xl:h-[40rem] rounded-full overflow-hidden">
							<Image
								src="/images/headshot.png"
								alt="Profile"
								fill
								style={{
									objectFit: "cover",
									objectPosition: "top",
									opacity: 0.75,
								}}
								className="rounded-full transition-transform duration-300 group-hover:scale-105"
								priority
							/>
							{/* Natural edge gradient fade */}
							<div
								className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-transparent to-transparent"
								style={{
									background: `radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0.6) 100%)`,
								}}></div>
						</div>
					</div>
				</div>

				{/* Sophisticated Hero Text with Premium Typography */}
				<div className="md:w-3/5 md:pl-20 text-center space-y-12">
					<div className="space-y-8">
						<h1 className="font-lobster text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[0.9] tracking-tight relative">
							{/* Deep Shadow Layer for 3D Effect */}
							<div className="absolute inset-0 transform translate-x-1.5 translate-y-1.5 opacity-70">
								<span className="block bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">Young Artificial</span>
								<span className="block bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">Intelligence</span>
								<span className="block bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">Developer and</span>
								<span className="block bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">Entrepreneur</span>
							</div>

							{/* Mid Shadow Layer */}
							<div className="absolute inset-0 transform translate-x-0.8 translate-y-0.8 opacity-85">
								<span className="block bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent">Young Artificial</span>
								<span className="block bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent">Intelligence</span>
								<span className="block bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent">Developer and</span>
								<span className="block bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent">Entrepreneur</span>
							</div>

							{/* Main Metallic Text Layer */}
							<div className="relative z-10 drop-shadow-sm">
								<span className="block bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">Young Artificial</span>
								<span className="block bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">Intelligence</span>
								<span className="block bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">Developer and</span>
								<span className="block bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">Entrepreneur</span>
							</div>
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
