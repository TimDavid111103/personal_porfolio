import React from "react";
import Link from "next/link";

/**
 * Footer component that appears at the bottom of all pages
 * Will contain contact information, social links, and copyright
 */
const Footer = () => {
	// Smooth scroll function mirroring the Navbar implementation
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
	};

	return (
		<footer id="footer" className="relative overflow-hidden">
			{/* Dark to silver vertical gradient background - softer version */}
			<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-80"></div>

			{/* Subtle metallic gradient overlay for depth */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-500/5 opacity-40"></div>

			{/* Additional silvery accent at the bottom - more subtle */}
			<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-500/15 to-transparent"></div>

			<div className="relative z-10 pt-64 pb-16">
				<div className="container mx-auto px-4 max-w-7xl">
					{/* Main Contact Section */}
					<div className="text-center mb-20">
						<div className="w-32 h-1 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-500 mx-auto rounded-full"></div>
					</div>

					{/* Footer Content */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16">
						{/* Brand Section */}
						<div className="text-center md:text-left">
							<Link href="/" className="block">
								<div className="relative inline-block text-4xl font-black tracking-tight transform transition-all duration-500 hover:scale-105">
									{/* Deep Shadow Layer for 3D Effect */}
									<div className="absolute inset-0 transform translate-x-1.5 translate-y-1.5 text-4xl font-black tracking-tight">
										<span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent opacity-40">TD</span>
									</div>

									{/* Mid Shadow Layer */}
									<div className="absolute inset-0 transform translate-x-1 translate-y-1 text-4xl font-black tracking-tight">
										<span className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent opacity-60">TD</span>
									</div>

									{/* Main Layer - Metallic Silver */}
									<span className="relative z-10 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent">TD</span>
								</div>
							</Link>
							<p className="font-body text-gray-400 mt-3 text-lg">Software Engineer & AI Developer</p>
							<p className="font-body text-gray-500 mt-1">Building the future, one line at a time</p>
						</div>

						{/* Navigation Links */}
						<div className="flex flex-wrap justify-center gap-8">
							<button onClick={() => scrollToSection("hero")} className="group">
								<span className="font-body text-gray-300 hover:text-gray-100 transition-all duration-300 font-medium relative">
									About
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-200 group-hover:w-full transition-all duration-300"></span>
								</span>
							</button>
							<button onClick={() => scrollToSection("featured")} className="group">
								<span className="font-body text-gray-300 hover:text-gray-100 transition-all duration-300 font-medium relative">
									Featured
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-200 group-hover:w-full transition-all duration-300"></span>
								</span>
							</button>
							<button onClick={() => scrollToSection("all-projects")} className="group">
								<span className="font-body text-gray-300 hover:text-gray-100 transition-all duration-300 font-medium relative">
									Projects
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-200 group-hover:w-full transition-all duration-300"></span>
								</span>
							</button>
							<button onClick={() => scrollToSection("footer")} className="group">
								<span className="font-body text-gray-300 hover:text-gray-100 transition-all duration-300 font-medium relative">
									Contact
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-200 group-hover:w-full transition-all duration-300"></span>
								</span>
							</button>
						</div>

						{/* Social Links */}
						<div className="flex justify-center md:justify-end space-x-8">
							{/* GitHub */}
							<a
								href="https://github.com/TimDavid111103"
								target="_blank"
								rel="noopener noreferrer"
								className="social-button-premium premium-glow pulse-on-hover p-4 rounded-2xl group backdrop-blur-sm"
								aria-label="GitHub Profile">
								<div className="relative w-7 h-7 transform transition-all duration-300 group-hover:rotate-[-5deg]">
									{/* Deep shadow layer for 3D effect */}
									<svg
										className="w-7 h-7 absolute inset-0 transform translate-x-[2px] translate-y-[2px] opacity-40"
										viewBox="0 0 24 24"
										fill="#333"
										aria-hidden="true">
										<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
									</svg>

									{/* Main icon with enhanced metallic gradient */}
									<svg className="social-icon-3d w-7 h-7 absolute inset-0" viewBox="0 0 24 24" fill="url(#githubGradient)" aria-hidden="true">
										<defs>
											<linearGradient id="githubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
												<stop offset="0%" stopColor="#c8c8c8" />
												<stop offset="25%" stopColor="#e8e8e8" />
												<stop offset="50%" stopColor="#f5f5f5" />
												<stop offset="75%" stopColor="#e8e8e8" />
												<stop offset="100%" stopColor="#c0c0c0" />
											</linearGradient>
										</defs>
										<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
									</svg>

									{/* Highlight overlay */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-80 w-7 h-7 rounded-full transition-opacity duration-300"></div>

									{/* Metallic shine effect */}
									<div className="absolute -inset-1 bg-gradient-to-r from-gray-200/0 via-gray-200/30 to-gray-200/0 opacity-0 group-hover:opacity-100 blur-sm group-hover:animate-shine"></div>
								</div>
							</a>

							{/* LinkedIn */}
							<a
								href="https://www.linkedin.com/in/tim-david-86897b207/"
								target="_blank"
								rel="noopener noreferrer"
								className="social-button-premium premium-glow pulse-on-hover p-4 rounded-2xl group backdrop-blur-sm"
								aria-label="LinkedIn Profile">
								<div className="relative w-7 h-7 transform transition-all duration-300 group-hover:rotate-[-5deg]">
									{/* Deep shadow layer for 3D effect */}
									<svg
										className="w-7 h-7 absolute inset-0 transform translate-x-[2px] translate-y-[2px] opacity-40"
										viewBox="0 0 24 24"
										fill="#333"
										aria-hidden="true">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>

									{/* Main icon with enhanced metallic gradient */}
									<svg className="social-icon-3d w-7 h-7 absolute inset-0" viewBox="0 0 24 24" fill="url(#linkedinGradient)" aria-hidden="true">
										<defs>
											<linearGradient id="linkedinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
												<stop offset="0%" stopColor="#d0d0d0" />
												<stop offset="25%" stopColor="#e8e8e8" />
												<stop offset="50%" stopColor="#ffffff" />
												<stop offset="75%" stopColor="#e8e8e8" />
												<stop offset="100%" stopColor="#c0c0c0" />
											</linearGradient>
										</defs>
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>

									{/* Highlight overlay */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-80 w-7 h-7 rounded-full transition-opacity duration-300"></div>

									{/* Metallic shine effect */}
									<div className="absolute -inset-1 bg-gradient-to-r from-gray-200/0 via-gray-200/30 to-gray-200/0 opacity-0 group-hover:opacity-100 blur-sm group-hover:animate-shine"></div>
								</div>
							</a>

							{/* Instagram */}
							<a
								href="https://www.instagram.com/tim_david1111/"
								target="_blank"
								rel="noopener noreferrer"
								className="social-button-premium premium-glow pulse-on-hover p-4 rounded-2xl group backdrop-blur-sm"
								aria-label="Instagram Profile">
								<div className="relative w-7 h-7 transform transition-all duration-300 group-hover:rotate-[-5deg]">
									{/* Deep shadow layer for 3D effect */}
									<svg
										className="w-7 h-7 absolute inset-0 transform translate-x-[2px] translate-y-[2px] opacity-40"
										viewBox="0 0 24 24"
										fill="#333"
										aria-hidden="true">
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
									</svg>

									{/* Main icon with enhanced metallic gradient */}
									<svg className="social-icon-3d w-7 h-7 absolute inset-0" viewBox="0 0 24 24" fill="url(#instagramGradient)" aria-hidden="true">
										<defs>
											<linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
												<stop offset="0%" stopColor="#d8d8d8" />
												<stop offset="25%" stopColor="#f0f0f0" />
												<stop offset="50%" stopColor="#ffffff" />
												<stop offset="75%" stopColor="#f0f0f0" />
												<stop offset="100%" stopColor="#d0d0d0" />
											</linearGradient>
										</defs>
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
									</svg>

									{/* Highlight overlay */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-80 w-7 h-7 rounded-full transition-opacity duration-300"></div>

									{/* Metallic shine effect */}
									<div className="absolute -inset-1 bg-gradient-to-r from-gray-200/0 via-gray-200/30 to-gray-200/0 opacity-0 group-hover:opacity-100 blur-sm group-hover:animate-shine"></div>
								</div>
							</a>
						</div>
					</div>

					{/* Copyright Section */}
					<div className="text-center pt-12 border-t border-gray-700/20">
						<div className="relative">
							{/* Subtle accent line above copyright */}
							<div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-600/40 to-transparent mx-auto mb-8"></div>

							<p className="font-body text-gray-400 text-lg font-medium mb-3">&copy; {new Date().getFullYear()} Tim David. All rights reserved.</p>
							<p className="font-body text-gray-500 text-base">
								Crafted with <span className="text-gray-300 animate-pulse">♡</span> and cutting-edge technology
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
