"use client";

import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Stage2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4">Stage 2: The Enchanted Lake</Typography>
      <Typography variant="body1">
        Implement the next stage of your quiz game here.
      </Typography>
    </motion.div>
  );
}
