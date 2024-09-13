"use client";

import { useState } from "react";
import { Button, Typography } from "@mui/material";
import CartoonCharacter from "../../components/CartoonCharacter";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Howl } from "howler";

export default function Stage1() {
  const [answered, setAnswered] = useState(false);
  const router = useRouter();

  const correctSound = new Howl({
    src: ["/sounds/correct-answer.mp3"],
  });

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setAnswered(true);
      correctSound.play();
    } else {
      alert("Try again!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CartoonCharacter name="Quizzy" src="/characters/quizzy.jpg" />
      <Typography variant="h4">Stage 1: The Mysterious Forest</Typography>
      {!answered ? (
        <>
          <Typography variant="body1">
            I speak without a mouth and hear without ears. I have nobody, but I
            come alive with wind. What am I?
          </Typography>
          <Button variant="contained" onClick={() => handleAnswer(false)}>
            A Whisper
          </Button>
          <Button variant="contained" onClick={() => handleAnswer(true)}>
            An Echo
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h5">Correct! On to the next stage!</Typography>
          <Button variant="contained" onClick={() => router.push("/stage2")}>
            Next Stage
          </Button>
        </>
      )}
    </motion.div>
  );
}
