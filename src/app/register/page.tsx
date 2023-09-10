"use client";

import {
  ReactNode,
  forwardRef,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
  MotionConfig,
} from "framer-motion";

import RegisterStep1 from "./components/RegisterStep1";
import RegisterStep2 from "./components/RegisterStep2";
import RegisterStep3 from "./components/RegisterStep3";

import { usePrevious } from "@uidotdev/usehooks";

const variants = {
  enter: function (
    direction: Direction
  ) {
    return {
      x:
        direction === "toLeft"
          ? "120%"
          : "-120%",
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: function (
    direction: Direction
  ) {
    return {
      x:
        direction === "toLeft"
          ? "-120%"
          : "120%",
      opacity: 0,
    };
  },
};

type Direction = "toLeft" | "toRight";

const Wrapper = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    direction: Direction;
  }
>(({ children, direction }, ref) => {
  return (
    <motion.div layout ref={ref}>
      <motion.div
        custom={direction}
        variants={variants}
        initial="enter"
        animate="visible"
        exit="exit"
        className="w-full inline-block"
      >
        {children}
      </motion.div>
    </motion.div>
  );
});

export default function Register() {
  const [step, setStep] = useState(1);
  const prevStep = usePrevious(step);
  const direction =
    step > prevStep
      ? "toLeft"
      : "toRight";

  return (
    <MotionConfig
      transition={{
        duration: 0.8,
        type: "keyframes",
        ease: "easeInOut",
      }}
    >
      <div className="flex mt-16 justify-center">
        <motion.div
          layout
          className="bg-white w-full max-w-xl py-3 px-5 space-y-6 overflow-hidden"
          style={{
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            borderRadius: 8,
          }}
        >
          <div className="space-y-3">
            <motion.h1
              layout
              className="font-bold text-2xl"
            >
              Register for a new account
            </motion.h1>
            <motion.p
              layout
              className="text-gray-500 text-sm"
            >
              Step {step} of 3
            </motion.p>
          </div>
          <motion.div
            layout
            className="whitespace-nowrap relative"
          >
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              initial={false}
            >
              {step === 1 && (
                <Wrapper
                  key="step-1"
                  direction={direction}
                >
                  <RegisterStep1 />
                </Wrapper>
              )}
              {step === 2 && (
                <Wrapper
                  key="step-2"
                  direction={direction}
                >
                  <RegisterStep2 />
                </Wrapper>
              )}
              {step === 3 && (
                <Wrapper
                  key="step-3"
                  direction={direction}
                >
                  <RegisterStep3 />
                </Wrapper>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            layout
            className="flex flex-1 z-10 relative"
          >
            <AnimatePresence>
              {step !== 1 && (
                <motion.button
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 0,
                    },
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  onClick={() =>
                    setStep(step - 1)
                  }
                  className="py-2 px-3 rounded-md"
                >
                  Back
                </motion.button>
              )}

              <button
                onClick={() =>
                  setStep(step + 1)
                }
                className="bg-pink-500 py-2 px-3 rounded-md text-white ml-auto"
              >
                Next
              </button>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
