import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-5xl font-bold text-black"
        >
          Hi, Saurabh here
        </motion.h1>
        <p className="text-lg font-medium text-black/50 mt-3">
          builder | hustler | explorer
        </p>
      </div>
      <img
        src="/profile.png"
        alt="logo"
        className="w-32 h-32 rounded-full object-cover object-center"
      />
      {/* <img
        src="https://images69.s3.ap-south-1.amazonaws.com/3EVAHV5QXU17GWV71HOH.png"
        alt="logo"
        className="w-32 h-32 rounded-xl object-cover object-center"
      /> */}
    </div>
  );
};

export default Navbar;
