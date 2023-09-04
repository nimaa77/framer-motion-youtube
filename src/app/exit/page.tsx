"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

import "./animation.css";

export default function Exit() {
  const [visible, setVisible] =
    useState(false);

  return (
    <div className="mt-10">
      <button
        className="border p-2 rounded-lg bg-pink-500 text-white shadow-md active:bg-pink-600"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        toggle
      </button>
      <div className="w-full h-[75vh] grid place-items-center">
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className={`bg-pink-600 rounded-lg w-40 h-40`}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
