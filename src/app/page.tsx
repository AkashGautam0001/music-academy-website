import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonialCards from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="min-h-5-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
			<HeroSection />
			<FeaturedCourses />
			<WhyChooseUs />
			<MusicSchoolTestimonialCards />
			<UpcomingWebinars />
			<Instructors />
			<Footer />
		</main>
	);
}
