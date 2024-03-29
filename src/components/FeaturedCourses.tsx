"use client"; // use always client when working with Ui or designing
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface Course {
	id: number;
	title: string;
	slug: string;
	description: string;
	price: number;
	instructor: string;
	isFeatured: boolean;
	image: string;
}

function FeaturedCourses() {
	const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
	return (
		<div className="py-12 bg-gray-900">
			<div>
				<div className="text-center">
					<h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
				</div>
			</div>
			<div className="mt-10 mx-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
					{featuredCourses.map((course: Course) => (
						<div key={course.id} className="flex justify-center">
							<BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
								<div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
									<p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
									<p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
									<Link href={`/courses/${course.slug}`}>Learn More</Link>
								</div>
							</BackgroundGradient>
						</div>
					))}
				</div>
			</div>

			<div className="mt-20 flex justify-center text-center">
				<HoverBorderGradient containerClassName="rounded-full" as="button" className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
					<Link href={"/courses"}>View All courses</Link>
				</HoverBorderGradient>
			</div>
		</div>
	);
}

export default FeaturedCourses;
