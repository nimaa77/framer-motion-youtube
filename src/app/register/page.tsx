"use client";

import {
  ReactNode,
  forwardRef,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import RegisterStep1 from "./components/RegisterStep1";
import RegisterStep2 from "./components/RegisterStep2";
import RegisterStep3 from "./components/RegisterStep3";

import {
  usePrevious,
  useMeasure,
} from "@uidotdev/usehooks";

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
    <motion.div
      ref={ref}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="visible"
      exit="exit"
      transition={{
        type: "keyframes",
        ease: "easeInOut",
        duration: 0.8,
      }}
      className="w-full inline-block"
    >
      {children}
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

  const [ref, rect] =
    useMeasure<HTMLDivElement>();

  return (
    <div className="flex mt-16 justify-center">
      <div className="bg-white rounded-lg w-full max-w-xl py-3 px-5 shadow-lg space-y-6 overflow-hidden">
        <div className="space-y-3">
          <h1 className="font-bold text-2xl">
            Register for a new account
          </h1>
          <p className="text-gray-500 text-sm">
            Step {step} of 3
          </p>
        </div>
        <motion.div
          className="whitespace-nowrap relative"
          animate={{
            height:
              rect?.height || "auto",
          }}
        >
          <div ref={ref}>
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
          </div>
        </motion.div>
        <div className="flex flex-1 z-10 relative">
          <AnimatePresence>
            {step !== 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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
          </AnimatePresence>
          <button
            onClick={() =>
              setStep(step + 1)
            }
            className="bg-pink-500 py-2 px-3 rounded-md text-white ml-auto"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
