"use client"

import { motion } from "framer-motion"
import {
  useEffect,
  useState,
} from "react"

import "./animation.css"

export default function Exit() {
  const [visible, setVisible] =
    useState(false)

  return (
    <div className="mt-10">
      <button
        className="border p-2 rounded-lg bg-pink-500 text-white shadow-md active:bg-pink-600"
        onClick={() => {
          setVisible(!visible)
        }}
      >
        toggle
      </button>
      <div className="w-full h-[75vh] grid place-items-center">
        {visible && (
          <div
            className={`bg-pink-600 rounded-lg w-40 h-40
              ${"fadeIn"}
              `}
          />
        )}
      </div>
    </div>
  )
}
