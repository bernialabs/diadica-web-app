import React from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navigation Bar */}
			<nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<div className="flex items-center">
						<Image src="/logodiadica.png" alt="Diadica Logo" width={32} height={32} />
						<span className="ml-2 text-xl text-gray-800 font-['Century Gothic']">Diadica</span>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<Link href="#" className="text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition-colors duration-300">
							Experiencias
						</Link>
						<Button className="bg-[#6163FD] text-white hover:bg-[#4A4BFD]">
							Únete a la prueba
						</Button>
					</div>
					<Button className="md:hidden bg-[#6163FD] text-white hover:bg-[#4A4BFD]">
						Únete a la prueba
					</Button>
				</div>
			</nav>

			{/* Hero Section */}
			<div className="flex-grow bg-[#FFE4AF] pt-20">
				<div className="container mx-auto px-4 py-12 flex flex-col items-center">
					<div className="md:hidden mb-8">
						<Image src="/mockup2.jpeg" alt="Mobile App" width={531} height={442} />
					</div>
					<div className="flex items-center justify-center">
						<div className="hidden md:block">
							<Image src="/mockup1.jpeg" alt="Left App" width={596} height={688} />
						</div>
						<div className="text-center mx-4">
							<h1 className="text-3xl md:text-4xl text-gray-800 mb-4">Menos enredos.</h1>
							<h1 className="text-5xl md:text-6xl font-bold text-[#92C4FC] mb-8">Más conexión.</h1>
						</div>
						<div className="hidden md:block">
							<Image src="/mockup1.jpeg" alt="Right App" width={596} height={688} />
						</div>
					</div>
				</div>
			</div>

			{/* Wave Transition */}
			<div className="bg-[#FFE4AF]">
				<svg className="w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 53.3C840 47 960 33 1080 30C1200 27 1320 33 1380 36.7L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="white" />
				</svg>
			</div>

			{/* Call-to-action Section */}
			<div className="bg-white py-12">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-2xl md:text-3xl text-gray-800 mb-4">Sé amable con tu mente</h2>
					<p className="text-gray-600 max-w-2xl mx-auto mb-8">
						Las parejas que invierten tiempo en actividades compartidas regularmente disfrutan de mayor satisfacción, intimidad y conexión. Esto es clave en las relaciones modernas, donde el estrés y las responsabilidades diarias pueden afectar la disponibilidad, la motivación y la creatividad para planear momentos juntos.
					</p>
					<Button className="bg-[#6163FD] text-white hover:bg-[#4A4BFD] text-lg px-8 py-3">
						Únete a la prueba
					</Button>
				</div>
			</div>
		</div>
	)
}
