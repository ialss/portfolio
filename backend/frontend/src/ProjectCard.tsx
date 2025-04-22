

export type Project = {
    icon: string;
    title: string;
    date: string;
    blurb: string;
    tech: string[];
    link: string;

};

type ProjectProps = {
    project: Project;
};



function ProjectCard({ project }: ProjectProps) {

    const { icon, title, date, blurb, tech, link } = project;

    return (

        <a href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="">

            <div className="bg-white/50 p-8 rounded-lg shadow-lg w-full max-w-lg justify-center">

                <div className="flex ">
                    <img src={icon} className="w-20 h-20 "></img>

                    <div className="ml-5">

                        <h6 className="text-txtGreen text-4xl" >{title}</h6>
                        <h6 className="text-txtGreen text-xl"> {date} </h6>

                    </div>


                </div>

                <h6 className="text-txtGreen text-xl mt-5"> {blurb} </h6>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className=" text-txtGreen text-xs px-2 py-1  border border-gray-300 rounded-lg shadow-sm mt-7"
                        >
                            {t}
                        </span>
                    ))}
                </div>


            </div>
        </a>

    );

}


export default ProjectCard;