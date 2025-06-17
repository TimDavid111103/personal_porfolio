import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	link: string;
}

/**
 * Optimized Project card component for better performance
 * Simplified animations and reduced layer complexity
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, link }) => {
	return (
		<Link href={link} className="group relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer">
			{/* Simplified background without borders or glows */}
			<div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>

			{/* Image section - now full card with responsive heights */}
			<div className="relative overflow-hidden rounded-2xl">
				<div className="relative h-80 lg:h-96 w-full overflow-hidden">
					<Image src={image} alt={title} fill style={{ objectFit: "cover" }} className="transition-transform duration-300 group-hover:scale-105" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
