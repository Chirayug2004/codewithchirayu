import { motion } from "framer-motion";

function MovingBar() {
  return (
    <div className="overflow-hidden bg-yellow-400 h-15 p-3 w-full whitespace-nowrap">
      <motion.div
        className="inline-block"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        <span className="inline-block px-6 text-2xl">Web Design *</span>
        <span className="inline-block px-6 text-2xl">Web Development *</span>
        <span className="inline-block px-6 text-2xl">Video Editing *</span>
        <span className="inline-block px-6 text-2xl">UI UX Design *</span>
        <span className="inline-block px-6 text-2xl">Graphic Design *</span>
      </motion.div>
    </div>
  );
}

export default MovingBar;