const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  // {
  //   title: "Experience",
  //   link: "#experience",
  // },
];

const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center py-6 md:px-6">
      <img
        src="https://images69.s3.ap-south-1.amazonaws.com/3EVAHV5QXU17GWV71HOH.png"
        alt="logo"
        className="w-10 h-10 rounded-full object-cover object-center"
      />
      <div className="flex items-center text-xs sm:text-sm border dark:border-zinc-700 border-zinc-400 rounded-full">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.link}
            className="dark:text-white text-zinc-800 dark:hover:bg-white/5 hover:bg-zinc-100 rounded-full py-2 px-4 transition duration-500"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
