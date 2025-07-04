import { useEffect, useState } from 'react';
import './App.css'

import ContactForm from './contact';

import ProjectCard from './ProjectCard';

import { Project } from './ProjectCard';


function Main() {

    const [projects, setProjects] = useState<Project[]>([]);


    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch("https://www.klaidasw.com/api/projects/")
            const data = await response.json();
            setProjects(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <div className=" bg-bgGreen h-full w-full px-8 py-8">

            <div className=" w-full min-h-screen ">
                <div className=" flex flex-col lg:block justify-center">
                    <div className="realtive">
                        <div>

                            <h1 className=" lg:clamp-heading lg:whitespace-nowrap text-center lg:text-left text-6xl md:text-8xl font-garamond text-txtGreen  font-thin">Hi there! I'm Klaidas Wikar</h1>
                        </div>


                        <div className="absolute left-13/27">
                            <h3 className="hidden lg:block font-garamond italic text-lightTxtGreen text-2xl relative -top-4  ">/'klye-dahs vee-kar/</h3>
                        </div>

                    </div>



                    <div className="mt-15">

                        <h2 className="  text-center lg:text-left font-garamond text-txtGreen text-3xl "> I'm a third year with senior standing CE/CS Bachelor of Science candidate at Northeastern University in Boston, but I'm orginally from the Chicago area. I have a strong interest in embedded systems and robotics</h2>
                    </div>


                    <div className="mt-8 p-4 lg:pr-90">

                        <p className="text-center lg:text-left font-garamond text-txtGreen text-2xl "> I'm involved in Northeastern Electric Racing 
                            and AerospaceNU on Project Horizon (cubesat).
                            I used to work at United Parcel Service as a package handeler and Friends & Family of Nabeela Syed as a field representative (twice!).
                            I've used many different languages and technologies all across the software and hardware spectrum!
                            You can find a full list on my resume or in the projects section. </p>
                        <p className="text-center lg:text-left font-garamond text-txtGreen text-2xl mt-10 max-w-3xl">I'm huge on urbanism and public transit,
                            so you might've seen me in a fourm or some of my wikipedia articles!
                            I also have three cats!! If you're looking for further information
                            you can find it via my <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline font-bold hover:text-green-700"
                            >resume</a> or my <a
                                href="https://www.linkedin.com/in/klaidaswikar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline font-bold hover:text-green-700"
                            >Linkedin</a>. Please excuse the unfished state of this website! 
                            I've recently started summer school in the middle of working on this project so you may 
                            find issues. If you want to chat about anything here or anything at all. 
                            You can do so via the contact form and email below. </p>

                    </div>



                </div> 

                <div className="">
                    <div className="flex bottom-4 space-x-8 mt-8 lg:mt-20 justify-center lg:justify-normal items-center mb-5 lg:mb-0">

                        <a href="#projects" className="font-garamond text-txtGreen font-bold text-lg">Projects</a>

                        <a href="#connect" className="font-garamond text-txtGreen font-bold text-lg">Connect</a>

                        <a href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-garamond text-txtGreen font-bold text-lg">Resume</a>

                    </div>
                </div>



                <div className=" hidden lg:block absolute bottom-4 right-4 w-1/3 ">

                    <img
                        src="/images/icons/computer_chip.png"
                        className="w-full h-auto object-cover block"
                        alt="Stylized computer chip"
                    />
                </div>


            </div>



            <div id="projects" className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            </div>

            <div id="connect" className="ml-auto mr-auto max-w-fit ">
                <ContactForm />
            </div>

            <div className="flex justify-center mt-10 gap-5">
                <a href="https://github.com/ialss"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src="/images/github.svg"
                        className=""
                        alt="Github logo"
                    />
                </a>
                <a href="https://www.linkedin.com/in/klaidaswikar/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src="/images/linkedin.svg"
                        className=""
                        alt="Linkedin logo"
                    />
                </a>

            </div>


        </div>


    )
}

export default Main
