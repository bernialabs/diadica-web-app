import React from 'react'
import { ArrowRight, Instagram, Linkedin, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedText } from './animated-text'
import TallyButton from './tally-button'


export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#">
              <Image src="/logo.png" alt="Diadica Logo" width={190} height={32} className="h-auto" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition-colors duration-300">
              Experiencias
            </Link>
            <TallyButton className="bg-[#6163FD] text-white hover:bg-[#4A4BFD]">
              Únete a Diadica
            </TallyButton>
          </div>
          <TallyButton className="md:hidden bg-[#6163FD] text-white hover:bg-[#4A4BFD]">
            Únete a Diadica
          </TallyButton>
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
                <h1 className="text-5xl md:text-7xl font-bold text-[#92C4FC] mb-8">Conecta a otro</h1>
                <h1 className="text-5xl md:text-7xl font-bold text-[#92C4FC] mb-8">nivel con tu</h1>
                <h1 className="text-5xl md:text-7xl font-bold text-[#92C4FC] mb-8">pareja</h1>
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
          <h2 className="text-2xl md:text-3xl text-gray-800 mb-4">¿Sientes que falta algo de novedad en tu relación?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            En medio del ajetreo diario, el cansancio se acumula y, sin darnos cuenta, esos momentos mágicos juntos se desvanecen. ¿Que tal si hubiera una forma simple de reavivar la chispa de su amor?
          </p>
          <TallyButton className="bg-[#6163FD] text-white hover:bg-[#4A4BFD] text-lg px-8 py-3">
            Únete a Diadica
          </TallyButton>
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
                  Revive esos momentos que hacen única tu relación con la primera aplicación personalizada para parejas
                </h2>
              </AnimatedText>
              <div className="space-y-12 mx-[15%]">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
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
                    <div className="flex-grow text-center sm:text-left">
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
                <TallyButton className="bg-[#89D8F1] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6BCAE3] transition-colors">
                  Únete a Diadica
                  <ArrowRight className="ml-2 h-5 w-5" />
                </TallyButton>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <AnimatedText>
                <h2 className="text-4xl font-bold text-center text-[#333333] mb-4">
                  Diseñada para diferentes tipos de parejas
                </h2>
              </AnimatedText>
              <AnimatedText delay={200}>
                <p className="text-center text-gray-600 mb-12">
                  Cada pareja es única, pero el deseo de conectar es el mismo
                </p>
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
                    <AnimatedText delay={index * 200 + 100}>
                      <p className="text-gray-600">{useCase.description}</p>
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
                        <a href={member.linkedin} className="text-[#89D8F1] hover:text-[#6BCAE3] transition-colors">
                          <Linkedin className="w-6 h-6" />
                        </a>
                        <a href={member.instagram} className="text-[#89D8F1] hover:text-[#6BCAE3] transition-colors">
                          <Instagram className="w-6 h-6" />
                        </a>
                        {member.name === "Alejandra Ovalle Zuleta" && (
                          <a href="https://mariaterapeuta.com/" className="text-[#89D8F1] hover:text-[#6BCAE3] transition-colors">
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
                <a href="#">
                  <Image
                    src="/logo_icon.png"
                    alt="Diadica Logo"
                    width={65}
                    height={25}
                    className="mb-4 h-auto"
                  />
                </a>
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
                  <a href="https://www.instagram.com/diadicatips" className="rounded-full p-2 bg-gradient-to-b from-[#89D8F1] to-[#98A2FB] hover:from-[#6BCAE3] hover:to-[#7A84DD] transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.linkedin.com/company/diadica/" className="rounded-full p-2 bg-gradient-to-b from-[#89D8F1] to-[#98A2FB] hover:from-[#6BCAE3] hover:to-[#7A84DD] transition-colors">
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
    title: "Conexión compartida",
    description: "Cada experiencia está hecha para que se redescubran, sientan que son el refugio del otro y revivan juntos esa magia única.",
    picture: "feature_1.png"
  },
  {
    title: "Experiencias personalizadas",
    description: "Hecho especialmente para ustedes, para que puedan crecer en su relación sintiéndose comprendidos y valorados.",
    picture: "feature_2.png"
  },
  {
    title: "Sin preocupación ni estrés",
    description: "Nos encargamos de cada detalle para que te sumerjas en ese momento, centrándote en conectar y crear recuerdos con tu pareja.",
    picture: "feature_3.png"
  },
]

const benefits = [
  {
    title: "Olvídate de lo estándar, recibe justo lo que tu relación necesita",
    description: "Responde un cuestionario con preguntas rápidas y verás cómo entendemos cada detalle de lo que desean y necesitan para sentirse verdaderamente conectados.",
    picture: "benefit_1.png"
  },
  {
    title: "Inteligencia artificial entrenada en hacer crecer tu relación",
    description: "Diseñada por expertos en terapia de pareja, esta IA no solo sugiere planes, sino que crea momentos únicos, hechos para mantener viva esa chispa de la relación. Es como tener a alguien que conoce tu historia y te ayuda a construir recuerdos nuevos y profundos con tu pareja.",
    picture: "benefit_2.png"
  },
  {
    title: "Dile adiós a los olvidos y a los momentos desaprovechados",
    description: "Con nuestras ideas y recordatorios, esos momentos especiales aparecen en el momento perfecto, en su Google Calendar, para que no se pierdan ni una sola oportunidad de vivir, disfrutar y volver a conectar.",
    picture: "benefit_3.png"
  },
]

const useCases = [
  {
    title: "Parejas a distancia",
    description: "La distancia no tiene porque limitar la conexión con nuestra pareja",
    picture: "couples_1.png",
  },
  {
    title: "Parejas con agendas ocupadas",
    description: "Nuestra pareja merece un espacio en nuestras agendas",
    picture: "couples_2.png",
  },
  {
    title: "Parejas con ganas de innovar",
    description: "Tener actividades novedosas con mi pareja nunca cae mal",
    picture: "couples_3.png",
  },
  {
    title: "Parejas con falta de ideas",
    description: "Un empujón creativo para dejar de ir a los mismos lugares",
    picture: "couples_4.png",
  },
]

const teamMembers = [
  {
    name: "Alejandra Ovalle Zuleta",
    position: "CEO",
    boldBio: "Psicóloga, Psicómetra y Terapeuta de Pareja.",
    bio: "Especialista en el desarrollo de cuestionarios psicométricos y con amplia experiencia como psicoterapeuta en su consultorio privado. Comparte contenido valioso en redes sociales enfocado en sexualidad y temas de pareja.",
    picture: "ale_1.png",
    instagram: "https://www.instagram.com/mariale_921/profilecard/?igsh=MW1ocmk1azRxaXlvYg%3D%3D",
    linkedin: "https://www.linkedin.com/in/ma-alejandra-ovalle-zuleta-8135a2124/"
  },
  {
    name: "Alejandro Fernández Borrás",
    position: "CTO",
    boldBio: "Ingeniero de Software Senior.",
    bio: "Especializado en diseño y arquitectura de servicios en cloud. Con experiencia tanto en startups como en grandes empresas. Ha trabajo en Amazon Prime Video, Life360 y RealNetworks entre otras.",
    picture: "ale_2.png",
    instagram: "https://www.instagram.com/elreallex/",
    linkedin: "https://www.linkedin.com/in/alejandrofb/"
  },
  {
    name: "Andrés Vásquez",
    position: "Desarrollador",
    boldBio: "Desarrollador Fronted Senior.",
    bio: "Ingeniero de software especializado en desarrollo de aplicaciones móviles, desarrollo web y manejo de servicios cloud en Amazon Web Services (AWS).",
    picture: "andres.png",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/andres-vasquez-57b451102/"
  },
]

const faqItems = [
  {
    question: "¿Es fácil empezar a planear con Diadica?",
    answer: "¡Muy fácil! Solo tienen que responder algunas preguntas iniciales, y en unos minutos, Diadica les ofrece planes y sorpresas listas para disfrutar. La aplicación hace que planear sea simple y sin estrés, dejándoles tiempo para concentrarse en disfrutar juntos.",
  },
  {
    question: "¿La aplicación es gratuita? ",
    answer: "Pueden comenzar a usar Diadica con 169 créditos gratuitos, que les permitirán acceder a actividades personalizadas, planear sorpresas y programar sus momentos especiales en Google Calendar. Cuando se agoten los créditos, pueden optar por una suscripción ilimitada de solo 6,99 € al mes o 11,99 € por trimestre, y seguir disfrutando de todas las funciones de Diadica sin interrupciones.",
  },
  {
    question: "¿Diadica puede funcionar para mí y mi pareja?",
    answer: "¡Claro que sí! Diadica está diseñado para adaptarse a diferentes tipos de parejas y momentos de la relación. Ya sea que tengan poco tiempo juntos, vivan a distancia, estén buscando nuevas ideas o simplemente quieran reforzar su conexión, Diadica crea experiencias pensadas para sus gustos y necesidades. Sin importar dónde estén o cómo sean sus rutinas, Diadica les ayuda a mantener viva la chispa de su relación de una forma sencilla y personalizada.",
  },
  {
    question: "¿Qué experiencias encontraremos en Diadica?",
    answer: "Las experiencias que proporcionamos están adaptadas a los gustos de ambos y a las necesidades específicas de su relación. Cada actividad incluye pequeños retos que hacen que cada momento sea una oportunidad única para crecer juntos. Estas sorpresas están pensadas para captar su atención y para que ambos valoren el tiempo compartido.",
  },
  {
    question: "¿Cómo personaliza Diadica las actividades para nosotros?",
    answer: "Diadica integra las respuestas de ambos del breve cuestionario diseñado para entender sus preferencias y necesidades como pareja. A partir de ahí, la aplicación elige actividades que no solo se alinean con sus gustos individuales, sino también con lo que necesitan para crecer juntos. Es como tener un plan único hecho a su medida."
  }
]
