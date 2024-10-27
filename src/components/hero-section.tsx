import React from 'react'
import { ArrowRight, Instagram, Twitter, Facebook, Linkedin, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedText } from './animated-text'

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Diadica Logo" width={190} height={32} className="h-auto" />
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
      <div className="flex-grow bg-gradient-to-b from-[#E7F7FD] to-[#C4CDFB] pt-20">
        <div className="py-12 flex flex-col items-center">
          <div className="md:hidden mb-8">
            <Image src="/hero_right.png" alt="Mobile App" width={531} height={42} />
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="flex flex-row items-center justify-center">
              <div className="hidden md:block flex-shrink-0">
                <Image src="/hero_left.png" alt="Left App" width={526} height={623} className="w-auto h-auto" />
              </div>
              <div className="text-center mx-2 flex-shrink-0 md:mb-64">
                <h1 className="text-3xl md:text-4xl text-[#454341] mb-32">Menos rutina y más magia.</h1>
                <h1 className="text-5xl md:text-7xl font-bold text-[#92C4FC] mb-8">Ama y conecta</h1>
                <h1 className="text-5xl md:text-7xl font-bold text-[#92C4FC] mb-8">con tu pareja.</h1>
              </div>
              <div className="hidden md:block flex-shrink-0">
                <Image src="/hero_right.png" alt="Right App" width={526} height={623} className="w-auto h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Transition */}
      <div className="bg-[#C4CDFB]">
        <svg className="w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 53.3C840 47 960 33 1080 30C1200 27 1320 33 1380 36.7L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="white" />
        </svg>
      </div>

      {/* Call-to-action Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl text-gray-800 mb-4">Invertir tiempo juntos fortalece la conexión</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            En las relaciones modernas, el estrés y las responsabilidades diarias pueden disminuir la motivación, la energía y la creatividad para planear momentos especiales. Únete a Diadica y mantén viva la chispa en tu relación.
          </p>
          <Button className="bg-[#6163FD] text-white hover:bg-[#4A4BFD] text-lg px-8 py-3">
            Únete a la prueba
          </Button>
        </div>
      </div>

      <div className="font-['Century Gothic']">
        <section className="w-full">
          {/* Features Section */}
          <div className="bg-[#f0f8fb] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-[235px] h-[150px] mx-auto mb-4">
                      <Image
                        src={`/${feature.picture}`}
                        alt={feature.title}
                        width={235}
                        height={150}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <AnimatedText delay={index * 200}>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    </AnimatedText>
                    <AnimatedText delay={index * 200 + 100}>
                      <p className="text-gray-600">{feature.description}</p>
                    </AnimatedText>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <AnimatedText>
                <h2 className="text-3xl font-bold text-gray-800 mb-12 mx-auto max-w-3xl text-center">
                  Personalizado para dos, ayudándoles a centrarse en lo que verdaderamente importa.
                </h2>
              </AnimatedText>
              <div className="space-y-12 mx-[15%]">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-full bg-[#89D8F1] flex items-center justify-center">
                        <Image
                          src={`/${benefit.picture}`}
                          alt={benefit.title}
                          width={96}
                          height={96}
                          className="w-24 h-24"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <AnimatedText delay={index * 200}>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                      </AnimatedText>
                      <AnimatedText delay={index * 200 + 100}>
                        <p className="text-gray-600">{benefit.description}</p>
                      </AnimatedText>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex flex-col items-center space-y-6">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Image
                    src="/app_store.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="h-10 w-auto"
                  />

                  <Image
                    src="/google_play.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="h-10 w-auto"
                  />
                </div>
                <Button className="bg-[#89D8F1] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6BCAE3] transition-colors">
                  Únete a la prueba
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <AnimatedText>
                <h2 className="text-4xl font-bold text-center text-[#333333] mb-12">
                  Casos de usos de Diadica
                </h2>
              </AnimatedText>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Image
                        src={`/${useCase.picture}`}
                        alt={useCase.title}
                        width={146}
                        height={146}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </div>
                    <AnimatedText delay={index * 200}>
                      <p className="font-bold text-black">{useCase.title}</p>
                    </AnimatedText>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-[#C3E6FC] py-16 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="max-w-7xl mx-auto">
              <AnimatedText>
                <h2 className="text-4xl font-bold text-center text-black mb-12">
                  Conoce al equipo
                </h2>
              </AnimatedText>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <AnimatedText key={index} delay={index * 200}>
                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md h-full">
                      <Image
                        src={`/${member.picture}`}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="w-48 h-48 rounded-full mb-4"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-[#6163FD] font-bold mb-2">{member.position}</p>
                      <p className="text-gray-600 mb-2 font-bold">{member.boldBio}</p>
                      <p className="text-gray-600 mb-4 flex-grow">{member.bio}</p>
                      <div className="flex space-x-4">
                        <a href="#" className="text-[#89D8F1] hover:text-[#6BCAE3] transition-colors">
                          <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-[#89D8F1] hover:text-[#6BCAE3] transition-colors">
                          <Linkedin className="w-6 h-6" />
                        </a>
                        {member.name === "Alejandra Ovalle Zuleta" && (
                          <a href="#" className="text-[#89D8F1] hover:text-[#6BCAE3] transition-colors">
                            <Globe className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>
                  </AnimatedText>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#F0F8FB] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimatedText>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                  Preguntas frecuentes
                </h2>
              </AnimatedText>
              <AnimatedText delay={200}>
                <p className="text-center text-gray-600 mb-12">
                  Obtén más información sobre cómo funciona Diadica.
                </p>
              </AnimatedText>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AnimatedText key={index} delay={index * 100}>
                    <AccordionItem value={`item-${index}`} className="border-none">
                      <AccordionTrigger className="bg-white hover:bg-gray-50 rounded-lg px-6 py-4 text-left font-semibold text-gray-800">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="bg-white mt-1 rounded-lg px-6 py-4 text-gray-600">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </AnimatedText>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Logo & Tagline Column */}
              <div className="flex flex-col items-start">
                <Image
                  src="/logo_icon.png"
                  alt="Diadica Logo"
                  width={65}
                  height={25}
                  className="mb-4 h-auto"
                />
                <p className="text-gray-800 font-bold mb-2">Conecta con tu pareja. Fortalece tu relación saludable</p>
                <p className="text-sm font-semibold mb-4">DESCARGA LA APP DIADICA</p>
                <div className="flex space-x-2">
                  <Image
                    src="/app_store.png"
                    alt="App Store"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />

                  <Image
                    src="/google_play.png"
                    alt="Google Play"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
              </div>

              {/* Experiences Column */}
              <div>
                <h3 className="text-gray-800 font-bold uppercase mb-4">Experiencias</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Sorprender</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Planes juntos</a></li>
                </ul>
              </div>

              {/* Support Column */}
              <div>
                <h3 className="text-gray-800 font-bold uppercase mb-4">Soporte</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Términos y condiciones</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Aviso de privacidad</a></li>
                  <li><a href="mailto:info@diadica.com" className="text-gray-600 hover:text-black transition-colors">info@diadica.com</a></li>
                </ul>
              </div>

              {/* Social Media Links Column */}
              <div>
                <h3 className="text-gray-800 font-bold uppercase mb-4">¡Síguenos!</h3>
                <div className="flex space-x-4">
                  <a href="#" className="rounded-full p-2 bg-gradient-to-b from-[#89D8F1] to-[#98A2FB] hover:from-[#6BCAE3] hover:to-[#7A84DD] transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="rounded-full p-2 bg-gradient-to-b from-[#89D8F1] to-[#98A2FB] hover:from-[#6BCAE3] hover:to-[#7A84DD] transition-colors">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="rounded-full p-2 bg-gradient-to-b from-[#89D8F1] to-[#98A2FB] hover:from-[#6BCAE3] hover:to-[#7A84DD] transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="rounded-full p-2 bg-gradient-to-b from-[#89D8F1] to-[#98A2FB] hover:from-[#6BCAE3] hover:to-[#7A84DD] transition-colors">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md flex items-center mb-4 sm:mb-0">
                <Image
                  src="/spanish.png"
                  alt="Spanish Flag"
                  width={30}
                  height={20}
                  className="mr-2 h-5 w-auto"
                />
                Español
              </button>
              <p className="text-gray-500 text-sm">© 2024 Diadica</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Conexión en cada experiencia",
    description: "Facilitamos momentos significativos que fortalecen el vínculo entre las parejas, incluso a distancia, ayudando a renovar la magia en la relación.",
    picture: "feature_1.png"
  },
  {
    title: "Experiencias personalizadas",
    description: "Alineamos cada actividad con las preferencias y necesidades de la pareja, asegurando que disfruten mientras mejoran áreas específicas de su relación.",
    picture: "feature_2.png"
  },
  {
    title: "Planificación sin estrés",
    description: "Liberamos el estrés y la falta de creatividad en la planificación, ocupándonos de los detalles para que disfruten de momentos especiales sin preocupaciones.",
    picture: "feature_3.png"
  },
]

const benefits = [
  {
    title: "Cuestionarios especializados",
    description: "Responde unas pocas preguntas diseñadas por psicómetras y comparte rápidamente tus gustos y necesidades en la relación.",
    picture: "benefit_1.png"
  },
  {
    title: "IA entrada en terapia de pareja",
    description: "Nuestra tecnología especializada con conocimiento en relaciones, crea actividades ajustados a ambos, garantizando experiencias que fortalezcan su vínculo.",
    picture: "benefit_2.png"
  },
  {
    title: "Ideas y recordatorios especiales",
    description: "Además de darte ideas, las programamos en Google Calendar para que ambos reciban recordatorios y cada momento especial sea más fácil de recordar.",
    picture: "benefit_3.png"
  },
]

const useCases = [
  {
    title: "Parejas a distancia",
    picture: "couples_1.png",
  },
  {
    title: "Parejas con agendas ocupadas",
    picture: "couples_2.png",
  },
  {
    title: "Parejas con ganas de innovar",
    picture: "couples_3.png",
  },
  {
    title: "Parejas a las que les cuesta encontrar ideas",
    picture: "couples_4.png",
  },
]

const teamMembers = [
  {
    name: "Alejandra Ovalle Zuleta",
    position: "CEO",
    boldBio: "Psicóloga, Psicómetra y Terapeuta de Pareja.",
    bio: "Especialista en el desarrollo de cuestionarios psicométricos y con amplia experiencia como psicoterapeuta en su consultorio privado. Comparte contenido valioso en redes sociales enfocado en sexualidad y temas de pareja.",
    picture: "ale_1.png"
  },
  {
    name: "Alejandro Fernández Borrás",
    position: "CTO",
    boldBio: "Ingeniero de Software Senior.",
    bio: "Especializado en diseño y arquitectura de servicios en cloud. Con experiencia tanto en startups como en grandes empresas. Ha trabajo en Amazon Prime Video, Life360 y RealNetworks entre otras.",
    picture: "ale_2.png"
  },
  {
    name: "Andrés Vásquez",
    position: "Desarrollador",
    boldBio: "Desarrollador Fronted Senior.",
    bio: "Ingeniero de software especializado en desarrollo de aplicaciones móviles, desarrollo web y manejo de servicios cloud en Amazon Web Services (AWS).",
    picture: "andres.png"
  },
]

const faqItems = [
  {
    question: "¿Qué es Diadica?",
    answer: "Diadica es la primera aplicación móvil desarrollada por terapeutas de pareja y expertos en inteligencia artifical, con el objetivo de ayudar a las parejas a superar los retos que enfrentan en la vida moderna, como el estrés y la falta de tiempo de calidad. Nuestra misión es proporcionar herramientas prácticas y efectivas que apoyen a las parejas, ayudándoles a fortalecer su conexión y gestionar mejor su tiempo y relación."
  },
  {
    question: "¿Para qué se diseñó esta aplicación?",
    answer: "Esta aplicación fue creada para ayudar a las parejas a conectarse más profundamente, ya sea que estén a distancia o quieran salir de la rutina. Nuestro objetivo es facilitar actividades personalizadas y significativas que fortalezcan la relación, brindando ideas creativas y gestionando cada detalle de manera eficiente."
  },
  {
    question: "¿La aplicación es gratuita?",
    answer: "Puedes comenzar a usar Diadica con 169 créditos gratuitos, que te permitirán acceder a actividades personalizadas, sorprender a tu pareja y programar vuestras actividades en Google Calendar. Una vez que hayas utilizado tus créditos, ofrecemos opciones de paquetes adicionales o una suscripción ilimitada para que sigas disfrutando de todas las funciones de Diadica sin interrupciones."
  },
  {
    question: "¿Cómo funciona?",
    answer: `Diadica ofrece dos funciones principales.
             Sorprender a tu pareja: Basado en un cuestionario que respondes, te proporcionamos planes e ideas personalizadas que puedes utilizar para invitar a tu pareja a vivir momentos especiales.
             Actividades compartidas: Cada miembro de la pareja completa su propio cuestionario en la aplicación. A partir de estos datos, generamos un plan que satisfaga los gustos de ambos. Además, integramos el plan en Google Calendar, enviando una notificación para que ambos reserven ese espacio en sus agendas.`
  },
  {
    question: "¿Para qué parejas se recomienda?",
    answer: "Diadica está diseñada para parejas que buscan fortalecer su conexión, ya sea que estén a distancia, tengan agendas ocupadas o quieran salir de la rutina. La aplicación ofrece herramientas para sorprender a tu pareja con ideas creativas o generar planes personalizados que satisfacen a ambos."
  }
]
