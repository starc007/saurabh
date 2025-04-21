import { AiVideoIcon, Github01Icon, Link01Icon } from "hugeicons-react";

type CardItemProps = {
  demo: string;
  github: string;
  videoLink: string;
  title: string;
  description: string;
  techStack: string[];
  tag: string[];
};

const CardItem = ({
  demo,
  github,
  videoLink,
  title,
  description,
  techStack,
  tag,
}: CardItemProps) => {
  return (
    <div className="w-full border border-black/5 p-4 rounded-xl">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold">{title}</span>
          <div className="flex gap-1">
            {tag.map((t) => (
              <span
                key={t}
                className="bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded-full text-[10px] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <p className="text-black/50 text-sm font-medium">{description}</p>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 w-full mt-5">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-green-500/10 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-end gap-5">
          {demo && (
            <a
              href={demo}
              target="_blank"
              className="text-black flex items-center gap-1 text-sm"
            >
              <Link01Icon size={20} />
              Website
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              className="text-black flex items-center gap-1 text-sm"
            >
              <Github01Icon size={20} />
              Github
            </a>
          )}
          {videoLink && (
            <a
              href={videoLink}
              target="_blank"
              className="text-black flex items-center gap-1 text-sm"
            >
              <AiVideoIcon size={20} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
