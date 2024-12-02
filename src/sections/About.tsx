"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
	{
		title: "JavaScript",
		iconType: JavascriptIcon,
	},
	{
		title: "HTML5",
		iconType: HTMLIcon,
	},
	{
		title: "CSS3",
		iconType: CssIcon,
	},
	{
		title: "React",
		iconType: ReactIcon,
	},
	{
		title: "Chrome",
		iconType: ChromeIcon,
	},
	{
		title: "Github",
		iconType: GithubIcon,
	},
];

const hobbies = [
	{
		title: "Painting",
		emoji: "🎨",
		left: "5%",
		top: "5%",
	},
	{
		title: "Photography",
		emoji: "📸",
		left: "50%",
		top: "5",
	},
	{
		title: "Hiking",
		emoji: "🥾",
		left: "35%",
		top: "40%",
	},
	{
		title: "Gaming",
		emoji: "🎮",
		left: "10%",
		top: "35%",
	},
	{
		title: "Music",
		emoji: "🎵",
		left: "70%",
		top: "45%",
	},
	{
		title: "Fitness",
		emoji: "🏋️",
		left: "5%",
		top: "65%",
	},
	{
		title: "Reading",
		emoji: "📖",
		left: "45%",
		top: "70%",
	},
];

export const AboutSection = () => {
	const constraintRef = useRef(null);
	return (
		<div className="py-20 lg:py-28" id="about">
			<div className="container">
				<SectionHeader
					eyebrow="About Me"
					title="A Glimpse Into My World"
					description="Learn more About Who I am, What I do, and What Inspires Me."
				/>
				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px] md:col-span-2 lg:col-span-1">
							<CardHeader
								title="My Reads"
								description="Explore the Books Shaping My Perspectives."
							/>
							<div className="w-40 mx-auto mt-2 md:mt-0">
								<Image src={bookImage} alt="Book Cover" />
							</div>
						</Card>

						<Card className="h-[320px] md:col-span-3 lg:col-span-2">
							<CardHeader
								title="My Toolbox"
								description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
								className=""
							/>
							<ToolboxItems
								items={toolboxItems}
								className=""
								itemsWrapperClassName="animate-move-left [animation-duration:30s]"
							/>
							<ToolboxItems
								items={toolboxItems}
								className="mt-6"
								itemsWrapperClassName="animate-move-right [animation-duration:15s]"
							/>
						</Card>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 ">
						<Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
							<CardHeader
								title="Beyond The Code"
								description="Explore my interests and hobbies beyond the digital realm."
								className="px-6 py-6"
							/>
							<div
								className="relative flex-1"
								ref={constraintRef}
							>
								{hobbies.map((hobby) => (
									<motion.div
										key={hobby.title}
										className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
										style={{
											left: hobby.left,
											top: hobby.top,
										}}
										drag
										dragConstraints={constraintRef}
									>
										<span className="font-medium text-gray-950">
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</motion.div>
								))}
							</div>
						</Card>
						<Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
							<Image
								src={mapImage}
								alt="Map Image"
								className="h-full w-full object-cover object-left-top"
							/>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
