"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h4">Welcome to the Quiz Adventure!</Typography>
      <Link href="/stage1" passHref>
        <Button variant="contained">Start Game</Button>
      </Link>
    </motion.div>
  );
}
