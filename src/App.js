import React, { useState } from 'react';
import { Menu, X, Mail, ExternalLink, Briefcase, ChevronRight, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const calculateYearsOfExperience = () => {
    var startYear = 2022; // Año de inicio de la experiencia laboral
    var startMonth = 7; // Mes de inicio de la experiencia laboral (0=Enero, 1=Febrero, ..., 11=Diciembre)
    const today = new Date();
    let years = today.getFullYear() - startYear;
    
    // Si el mes actual es menor al mes de inicio (agosto es índice 7 en JS: 0=Ene, 7=Ago),
    // o si estamos en el mismo mes pero un día anterior, aún no se cumple el año entero.
    const currentMonth = today.getMonth();
    if (currentMonth < startMonth) {
      years--;
    }

    return years;
  };

  /*const projects = [
    {
      title: "Sistema de Gestión / ERP",
      description: "Aplicación web con filtros dinámicos, gestión de usuarios y reportes en tiempo real.",
      techs: ["React", "C# .NET Core", "SQL Server", "Tailwind"],
      link: "#"
    },
    {
      title: "API REST & Autenticación",
      description: "Backend seguro con arquitectura en capas, JWT y encriptación de credenciales.",
      techs: ["C# .NET Core", "BCrypt", "Entity Framework"],
      link: "#"
    }
  ];

  const skills = [
    "C#", ".NET Core", "ASP.NET Razor Pages", "React", 
    "JavaScript (ES6+)", "SQL Server", "Git & GitHub", "Tailwind CSS / Bootstrap"
  ];*/

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* Navegación */}
      {/* Navegación */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-teal-600 dark:text-teal-400">
            &lt;DevPortfolio /&gt;
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-teal-500 dark:hover:text-teal-400">Sobre mí</a>
            <a href="#experience" className="hover:text-teal-500 dark:hover:text-teal-400">Experiencia</a>
            <a href="#education" className="hover:text-teal-500 dark:hover:text-teal-400">Educación</a>
            <a href="#skills" className="hover:text-teal-500 dark:hover:text-teal-400">Habilidades</a>
            {/*<a href="#projects" className="hover:text-teal-500 dark:hover:text-teal-400">Proyectos</a>*/}
            <a href="#contact" className="hover:text-teal-500 dark:hover:text-teal-400">Contacto</a>
          </div>
          {/* Botón Móvil */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden hover:text-teal-500 dark:hover:text-teal-400 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú Desplegable Móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 dark:bg-slate-900/90  border-b border-slate-200 dark:border-slate-700 px-4 pt-2 pb-4 space-y-3">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block hover:text-teal-500 dark:hover:text-teal-400">Sobre mí</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block hover:text-teal-500 dark:hover:text-teal-400">Experiencia</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="block hover:text-teal-500 dark:hover:text-teal-400">Educación</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block hover:text-teal-500 dark:hover:text-teal-400">Habilidades</a>
            {/* <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block hover:text-teal-500 dark:hover:text-teal-400">Proyectos</a> */}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-teal-500 dark:hover:text-teal-400">Contacto</a>
          </div>
        )}
      </nav>

      {/* Hero / Presentación */}
      <section id="about" className="pt-32 py-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <p className="text-xl text-teal-600 dark:text-teal-400 font-medium mb-2">¡Hola! Mi nombre es Evenor Briceño Ruiz</p>
          <p className="text-lg text-slate-800 dark:text-slate-300 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed text-justify">
            Desarrollador de Software con más de {calculateYearsOfExperience()} años de experiencia en el diseño, desarrollo y despliegue de aplicaciones web y soluciones móviles (.NET, React, Flutter). Especializado en la creación de sistemas desde cero, diseño de bases de datos y la automatización de procesos de integración y despliegue continuo (CI/CD). Apasionado por la optimización de código, el trabajo en equipo y el desarrollo de arquitecturas escalables.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
              Ver Proyectos <ChevronRight size={18} />
            </a>
            <a href="#contact" className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
              Contactar
            </a>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="text-teal-600 dark:text-teal-400 w-7 h-7" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Experiencia Laboral
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 sm:ml-4 pl-6 space-y-8">
          {/* Experiencia: Orbitas */}
          <div className="relative">
            {/* Puntero de la línea de tiempo */}
            <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-teal-500 ring-4 ring-white dark:ring-slate-900"></span>

            <div className="bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Desarrollador de sistemas
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium">
                    Orbitas
                  </p>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 w-fit">
                  Agosto 2022 - Presente
                </span>
              </div>

              <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base text-justify">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">•</span>
                  <span>
                    <strong className="text-slate-900 dark:text-slate-100">Desarrollo Full-Stack & Mobile:</strong> Diseñé y desarrollé desde cero aplicaciones móviles y sitios web utilizando .NET MVC, Flutter, React y Xamarin, además de mantener y optimizar módulos existentes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">•</span>
                  <span>
                    <strong className="text-slate-900 dark:text-slate-100">Diseño de Bases de Datos:</strong> Realicé análisis, modelado y consultas optimizadas en bases de datos relacionales y no relacionales para respaldar la funcionalidad de los sistemas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">•</span>
                  <span>
                    <strong className="text-slate-900 dark:text-slate-100">Automatización & CI/CD:</strong> Implementé y gestioné pipelines de integración y despliegue continuo a través de GitHub Actions y Azure DevOps, automatizando la subida de cambios a servidores de producción y reduciendo errores manuales.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="text-teal-600 dark:text-teal-400 w-7 h-7" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Educación
          </h2>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Universidad de Costa Rica
            </h3>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 w-fit">
              2016 - 2022
            </span>
          </div>

          <p className="text-base text-slate-600 dark:text-slate-300 font-medium italic">
            Bachillerato en Informática Empresarial
          </p>
        </div>
      </section>

      {/* Habilidades */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-teal-600 dark:text-teal-400 font-mono text-xl">&lt;&gt;</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Habilidades Técnicas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Categoría 1: Lenguajes y Frameworks */}
          <div className="bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Lenguajes y Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {['.NET / C#', 'React JS', 'Flutter', 'Xamarin', 'Java', 'HTML5/CSS3'].map((skill) => (
                <span 
                  key={skill} 
                  className="px-3.5 py-1.5 text-sm font-medium rounded-xl bg-white dark:bg-slate-900/80 text-slate-700 dark:text-teal-300 border border-slate-200 dark:border-teal-500/20 shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
            
          {/* Categoría 2: Bases de Datos */}
          <div className="bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Bases de Datos
            </h3>
            <div className="flex flex-wrap gap-2">
              {['SQL Server', 'Firebase'].map((skill) => (
                <span 
                  key={skill} 
                  className="px-3.5 py-1.5 text-sm font-medium rounded-xl bg-white dark:bg-slate-900/80 text-slate-700 dark:text-teal-300 border border-slate-200 dark:border-teal-500/20 shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
            
          {/* Categoría 3: DevOps & Herramientas */}
          <div className="bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              DevOps & Herramientas
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'GitHub', 'GitHub Actions', 'Azure DevOps', 'CI/CD Pipelines'].map((skill) => (
                <span 
                  key={skill} 
                  className="px-3.5 py-1.5 text-sm font-medium rounded-xl bg-white dark:bg-slate-900/80 text-slate-700 dark:text-teal-300 border border-slate-200 dark:border-teal-500/20 shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
            
          {/* Categoría 4: Idiomas */}
          <div className="bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Idiomas
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Español (Nativo)', 'Inglés (A2 - Pre-intermedio)'].map((skill) => (
                <span 
                  key={skill} 
                  className="px-3.5 py-1.5 text-sm font-medium rounded-xl bg-white dark:bg-slate-900/80 text-slate-700 dark:text-teal-300 border border-slate-200 dark:border-teal-500/20 shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
              
        </div>
      </section>

      {/* Proyectos */}
      {/*De momento la voy a dejar comentada, ya que no tengo proyectos que mostrar.
      <section id="projects" className="py-10 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-teal-400">
          <Briefcase size={24} /> Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between hover:translate-y-1 transition-all">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{proj.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{proj.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.techs.map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-900 text-teal-300 px-3 py-1 rounded-full border border-teal-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={proj.link} className="inline-flex items-center gap-1 text-sm font-semibold text-teal-400 hover:text-teal-300">
                  Ver Detalles <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Contacto */}
      <section id="contact" className="py-20 ">
        <div className="flex justify-center gap-6">
          {/* Correo */}
          <a 
            href="mailto:evenorbriceno2016@gmail.com" 
            className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 text-teal-400 border border-slate-700 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>

          {/* GitHub (SVG Oficial) */}
          <a 
            href="https://github.com/eve-bri" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 text-teal-400 border border-slate-700 transition-colors flex items-center justify-center"
            aria-label="GitHub"
          >
            <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn (SVG Oficial) */}
          <a 
            href="https://www.linkedin.com/in/evenor-briceno-34b753232/" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 text-teal-400 border border-slate-700 transition-colors flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-800">
        © {new Date().getFullYear()} - Creado con React y Tailwind CSS
      </footer>
    </div>
  );
}