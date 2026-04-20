"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const cubicOut = [0.215, 0.61, 0.355, 1] as const;

const defaultVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: cubicOut },
  },
};

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
        margin: "0px 0px -64px 0px",
      }}
      variants={{
        hidden: defaultVariants.hidden,
        visible: {
          ...defaultVariants.visible,
          transition: {
            ...defaultVariants.visible.transition,
            delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
