import React from 'react';
import './Projects.css';

// 1. Array containing all 14 projects extracted from your HTML code
const projectData = [
  {
    id: 1,
    title: "Venkatesh Buildcon Website",
    description: "Designed and developed a modern, responsive website for Venkatesh Buildcon to highlight ongoing and completed real estate projects, provide company insights, and simplify customer inquiries. The site features a clean user interface, mobile-friendly design, and intuitive navigation for an enhanced user experience.",
    image: "assets/img/projects/Real Estate Website Project - Venkatesh Buildcon.png",
    liveLink: "https://venkatesh-buildcon.vercel.app",
    githubLink: "https://github.com/mdmbypoonam/Venkatesh-Buildcon-Website"
  },
  {
    id: 2,
    title: "Ranjekar Realty Website",
    description: "Designed and developed a modern, responsive website for Ranjekar Realty to showcase real estate projects, share company information, and streamline customer inquiries. The site offers a clean user interface, mobile compatibility, and smooth navigation for an enhanced user experience.",
    image: "assets/img/projects/Real Estate Website Project - Ranjekar Realty.png",
    liveLink: "https://ranjekar-realty.vercel.app",
    githubLink: "https://github.com/mdmbypoonam/Ranjekar-Realty-Website"
  },
  {
    id: 3,
    title: "Safepower Electricals Website",
    description: "Designed and developed a modern, responsive website for SafePower Electricals to showcase their services, product offerings, and contact information. The site emphasizes clean design, easy navigation, and a maintainable structure for long-term usability.",
    image: "assets/img/projects/Website Project - Safepower Electricals.png",
    liveLink: "https://safepowerelectricals.com",
    githubLink: "https://github.com/mdmbypoonam/Safepower-Electricals-Website"
  },
  {
    id: 4,
    title: "Pride Lifestyle Homes Website",
    description: "Developed a modern, accessible, and user-friendly website for Pride Lifestyle Homes, focused on showcasing premium properties while ensuring inclusive design and easy maintainability. The site delivers a seamless experience across all devices with clean layouts and intuitive navigation.",
    image: "assets/img/projects/Real Estate Website Project - Pride Lifestyle Homes.png",
    liveLink: "https://pride-lifestyle-homes.vercel.app/",
    githubLink: "https://github.com/mdmbypoonam/Pride-Lifestyle-Homes-Website"
  },
  {
    id: 5,
    title: "Majestic New Friends Landing Page",
    description: "Created an attractive, responsive, and performance-optimized landing page to showcase the Majestic New Friends project. Designed to highlight key features, engage visitors, and effectively capture leads through clear calls-to-action and a user-friendly layout.",
    image: "assets/img/projects/Real Estate Landing Page Project - Majestic New Friends.png",
    liveLink: "https://majestic-new-friends.vercel.app",
    githubLink: "https://github.com/mdmbypoonam/Majestic-New-Friends-Landing-Page"
  },
  {
    id: 6,
    title: "Erandwane Central Landing Page",
    description: "This is the landing page for Venkatesh Erandwane Central, crafted to offer a modern, responsive, and engaging user experience while showcasing key project highlights.",
    image: "assets/img/projects/Real Estate Landing Page Project - Erandwane Central.png",
    liveLink: "https://venkatesherandwancentral.vercel.app/",
    githubLink: "https://github.com/mdmbypoonam/Venkatesh-Erandwane-Central-Landing-Page"
  },
  {
    id: 7,
    title: "Venkatesh Luxe Landing Page",
    description: "This project features visually engaging, fully responsive landing page created to showcase the Venkatesh Luxe property. It presents key property details, highlights amenities, and includes clear calls-to-action to drive user engagement and inquiries.",
    image: "assets/img/projects/Real Estate Landing Page Project - Venkatesh Luxe.png",
    liveLink: "https://venkatesh-luxe-laurel.vercel.app",
    githubLink: "https://github.com/mdmbypoonam/Venkatesh-Luxe-Laurel-Landing-Page"
  },
  {
    id: 8,
    title: "Solitaire Landing Page",
    description: "A modern and responsive landing page built for the Solitaire real estate project. Designed to highlight key features, showcase property details, and encourage user engagement through a clean layout, intuitive structure, and visually appealing design.",
    image: "assets/img/projects/Real Estate Landing Page Project - Solitaire.png",
    liveLink: "https://solitairekothrud.vercel.app",
    githubLink: "https://github.com/mdmbypoonam/Solitaire-Landing-Page"
  },
  {
    id: 9,
    title: "Venkatesh Laurel Landing Page",
    description: "A visually appealing, mobile-responsive landing page designed to highlight the Venkatesh Laurel property, deliver key information clearly, and encourage user engagement through intuitive design.",
    image: "assets/img/projects/Real Estate Landing Page Project - Venkatesh Laurel.png",
    liveLink: "https://venkatesh-laurel.vercel.app",
    githubLink: "https://github.com/mdmbypoonam/Venkatesh-Laurel-Landing-Page"
  },
  {
    id: 10,
    title: "Nyati Group Pune Landing Page",
    description: "This project features a modern, responsive landing page designed for Nyati Group, a prominent real estate developer based in Pune. The page highlights the group’s key projects, achievements, and contact information through a clean, intuitive, and user-friendly design that encourages exploration and inquiries.",
    image: "assets/img/projects/Real Estate Landing Page Project - Nyati Group.png",
    liveLink: "https://nyati-group.vercel.app",
    githubLink: "https://github.com/mdmbypoonam/Nyati-Group-Pune-Landing-Page"
  },
  {
    id: 11,
    title: "Venkatesh Skydale Landing Page",
    description: "a responsive and modern landing page developed for Venkatesh Skydale, using HTML, CSS, and JavaScript. The page is designed to showcase project highlights, provide key information, and encourage user interaction through a clean and intuitive layout.",
    image: "assets/img/projects/Real Estate Landing Page Project - Venkatesh Skydale.png",
    liveLink: "https://venkatesh-skydale.vercel.app",
    githubLink: "https://github.com/mdmbypoonam/Venkatesh-Skydale-Landing-Page"
  },
  {
    id: 12,
    title: "Purva Aspire Landing Page",
    description: "A responsive and visually appealing landing page designed to showcase key details of the Purva Aspire property and deliver an engaging user experience. The codebase is clean, well-organized, and structured for easy navigation and future maintenance.",
    image: "assets/img/projects/Real Estate Landing Page Project - Purva Aspire.png",
    liveLink: "https://purva-aspire.vercel.app",
    githubLink: "https://github.com/mdmbypoonam/Purva-Aspire-Landing-Page"
  },
  {
    id: 13,
    title: "Sobha Nesara Landing Page",
    description: "Developed an attractive and fully responsive landing page for Sobha Nesara, using modern web technologies to create a sleek design, showcase project highlights, and deliver a seamless and engaging user experience across all devices.",
    image: "assets/img/projects/Real Estate Landing Page Project - Sobha Nesara.png",
    liveLink: "https://sobha-nesara.vercel.app",
    githubLink: "https://github.com/mdmbypoonam/Sobha-Nesara-Landing-Page"
  },
  {
    id: 14,
    title: "E-commerce Website",
    description: "A modern, responsive, and scalable e-commerce web application designed to deliver a smooth online shopping experience. Key features include dynamic product listings, user account management, a functional shopping cart, and a secure checkout process.",
    image: "assets/img/projects/Ecommerce Website Project.png",
    liveLink: "https://github.com/mdmbypoonam/E-commerce-Website",
    githubLink: "https://github.com/mdmbypoonam/E-commerce-Website"
  }
];

export default function Projects() {
  return (
    <section className="portfolio-section">
      <div className="section-heading">
        <h2>Projects I've Built</h2>
        <p>
          Explore a collection of websites and landing pages I’ve designed and developed, 
          combining creativity with functionality.
        </p>
      </div>

      <div className="portfolio-container">
        {projectData.map((project, index) => {
          // Automatic layout flip: Even index shows image first, Odd index shows text first
          const isEven = index % 2 === 0;

          return (
            <div key={project.id} className={`project-row ${isEven ? 'row-normal' : 'row-reversed'}`}>
              
              {/* Project Image Container */}
              <div className="project-image-box">
                <img 
                  src={project.image} 
                  loading="lazy" 
                  alt={project.title} 
                  className="project-img" 
                />
              </div>

              {/* Project Details Container */}
              <div className="project-details-box">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="btn-group">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-live">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-github">
                    View Code
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}