import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const data = [
  {
    id: 0,
    title: "Love Language",
    description:
      "Love Language is a fun, love-themed programming language that brings romance to coding! Express your algorithms with affection using love-themed keywords and operators.",
    techStack: ["Rust"],
    demo: "https://github.com/starc007/love-language/",
    github: "https://github.com/starc007/love-language/",
    image: "/love-language.png",
  },
  {
    id: 1,
    title: "Stylr",
    description: "Create beautiful forms in one click, no code required.",
    techStack: ["Nextjs", "Typescript", "Tailwindcss", "Nodejs", "MongoDB"],
    demo: "https://stylr.xyz",
    github: "",
    image: "/stylr.png",
  },
  {
    id: 2,
    title: "myIntro",
    description:
      "Unlock Your Network's Hidden Potential - Find warm introductions on Twitter in seconds",
    techStack: ["React", "Typescript", "Tailwindcss", "Nodejs", "MongoDB"],
    demo: "https://myIntro.xyz",
    github: "",
    image: "/myIntro.png",
  },
  {
    id: 3,
    title: "Image Compressor - Rust",
    description:
      "A command-line tool for compressing and resizing images in bulk. This tool can process entire directories, including nested folders, and maintains the original folder structure in the output.",
    techStack: ["Rust"],
    demo: "https://github.com/starc007/Image-compression",
    github: "https://github.com/starc007/Image-compression",
    image: "/img-compression.png",
  },
];

const RecentProjects = () => {
  return (
    <div className="flex flex-col mt-10 mb-40">
      <p className="text-black text-2xl font-semibold">Recent Projects</p>
      <div className="flex flex-col gap-4 mt-6">
        {data.map((project) => (
          <div
            key={project.id}
            className="bg-black/5 rounded-xl p-4 flex items-start md:flex-row flex-col gap-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl md:w-56 w-full md:h-32 h-40 object-cover"
            />
            <div>
              <p className="text-black font-semibold text-xl">
                {project.title}
              </p>
              <p className="text-black/50">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-black/5 text-black px-2 py-1 rounded-lg text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-5 mt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-black flex items-center gap-1"
                >
                  <BiWorld size={20} />
                  Demo
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-black flex items-center gap-1"
                  >
                    <FaGithub size={20} />
                    Github
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
