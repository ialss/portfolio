

import './App.css'
import ContactForm from './contact';


function Main() {
    console.log("Hello from my code!");

    return (
        

            <div className="bg-bgGreen h-full w-full px-8 py-8">

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

                            <p className="text-center lg:text-left font-garamond text-txtGreen text-2xl "> Currently I'm involved in Northeastern Electric Racing and AerospaceNU on Project Horizon.
                                I used to work at United Parcel Service as a package handeler and Friends & Family of Nabeela Syed as a field representative.
                                I've used many different languages and technologies, some of the more common ones include C/C++, Python, Java, JS/TSX, Docker, and Pytorch.
                                You can find a full list on my resume or in the projects section. </p>
                            <p className="text-center lg:text-left font-garamond text-txtGreen text-2xl mt-10 max-w-3xl">I'm huge on urbanism and public transit,
                                so you might've seen me in a fourm or some of my wikipedia articles!
                                I also have three cats!! If you're looking for further information
                                you can find it via my <a
                                    href="src/assets/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline font-bold hover:text-green-700"
                                >resume</a> or my <a
                                    href="https://www.linkedin.com/in/klaidaswikar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline font-bold hover:text-green-700"
                                >Linkedin</a>. </p>
                        </div>


                        <div className="sticky top-0">
                        <div className="flex bottom-4 space-x-8 mt-8 lg:mt-25 justify-center lg:justify-normal items-center">

                            <h3 className="font-garamond text-txtGreen font-bold text-lg">Projects</h3>

                            <h3 className="font-garamond text-txtGreen font-bold text-lg">Connect</h3>

                            <h3 className="font-garamond text-txtGreen font-bold text-lg">Resume</h3>

                        </div>
                        </div>
                    </div>

                    <div className=" hidden lg:block absolute bottom-4 right-4 w-1/3 ">

                        <img
                            src="src/assets/computer_chip.png"
                            className="w-full h-auto object-cover block"
                            alt="Stylized computer chip"
                        />
                    </div>


                </div>
                
                <div className="ml-auto mr-auto max-w-fit">
                     <ContactForm />
                     

                </div>


            </div>


    )
}

export default Main
