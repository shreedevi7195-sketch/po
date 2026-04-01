import { motion } from "framer-motion";

<motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Hi, I'm Shree
</motion.h1>