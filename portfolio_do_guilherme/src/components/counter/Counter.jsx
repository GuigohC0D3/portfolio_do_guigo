// src/components/Counter.jsx
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const Counter = ({ from = 0, to = 100, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{isInView ? rounded : "0"}</motion.span>;
};

export default Counter;
