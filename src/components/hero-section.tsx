import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logodiadica.png" alt="Diadica Logo" width={42} height={32} />
            <span className="text-xl font-normal text-[#333333]">Diadica</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-[#666666] hover:text-[#6163FD] transition-colors duration-200 border-b-2 border-transparent hover:border-[#6163FD]"
            >
              Experiencias
            </Link>
            <Button className="bg-[#6163FD] text-white hover:bg-[#6163FD]/90">Únete a la prueba</Button>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-[#F5F5F5] pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="relative w-1/4">
                <Image src="/placeholder.svg" alt="App Screenshot 1" width={250} height={500} className="absolute top-0 left-0 rounded-lg shadow-lg transform -rotate-6" />
                <Image src="/placeholder.svg" alt="App Screenshot 2" width={250} height={500} className="absolute top-10 left-20 rounded-lg shadow-lg transform rotate-6" />
              </div>
              <div className="text-center max-w-2xl">
                <h1 className="mb-2">
                  <span className="block text-2xl md:text-3xl font-bold text-[#333333]">Menos enredos.</span>
                  <span className="block text-4xl md:text-6xl font-bold text-[#92C4FC]">Más conexión.</span>
                </h1>
              </div>
              <div className="relative w-1/4">
                <Image src="/placeholder.svg" alt="App Screenshot 3" width={250} height={500} className="absolute top-0 right-0 rounded-lg shadow-lg transform rotate-12" />
                <Image src="/placeholder.svg" alt="App Screenshot 4" width={250} height={500} className="absolute top-20 right-10 rounded-lg shadow-lg transform -rotate-12" />
              </div>
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#F5F5F5"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,181.3C672,171,768,149,864,149.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <section className="bg-white py-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl text-[#333333] mb-4">Sé amable con tu mente</h2>
            <p className="max-w-3xl mx-auto text-[#333333] mb-6">
              Las parejas que invierten tiempo en actividades compartidas regularmente disfrutan de mayor satisfacción,
              intimidad y conexión. Esto es clave en las relaciones modernas, donde el estrés y las responsabilidades
              diarias pueden afectar la disponibilidad, la motivación y la creatividad para planear momentos juntos.
            </p>
            <Button className="bg-[#6163FD] text-white hover:bg-[#6163FD]/90 text-lg px-8 py-3">
              Únete a la prueba
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
