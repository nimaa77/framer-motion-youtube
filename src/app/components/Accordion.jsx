"use client"

import { useState } from "react"
import {
  AnimatePresence,
  motion,
} from "framer-motion"

const items = [
  {
    id: 1,
    title: "Rules",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam omnis voluptatum maiores ipsa qui, laboriosam libero soluta, sapiente consectetur iusto ipsam, pariatur eligendi explicabo reprehenderit veritatis unde quis fugit?",
  },
  {
    id: 2,
    title: "User Comments",
    content:
      "laboriosam libero soluta, sapiente consectetur iusto ipsam, pariatur eligendi explicabo reprehenderit veritatis unde quis fugit?",
  },
  {
    id: 3,
    title: "Gift Cards",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. laboriosam libero explicabo Tenetur magnam omnis voluptatum maiores ipsa qui, laboriosam libero explicabo reprehenderit veritatis unde quis fugit?",
  },
]

const Accordion = () => {
  const [active, setActive] =
    useState(1)

  return (
    <AnimatePresence initial={false}>
      <div>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id}>
              <button
                className="flex flex-row justify-between border-b border-gray-400 w-full text-left"
                onClick={() =>
                  setActive(item.id)
                }
              >
                {item.title}
                <motion.div
                  animate={{
                    rotate:
                      item.id === active
                        ? 180
                        : 0,
                  }}
                  transition={{
                    type: "keyframes",
                    ease: "easeInOut",
                  }}
                >
                  <Icon />
                </motion.div>
              </button>
              <motion.div
                className={`overflow-hidden mt-2`}
                animate={{
                  height:
                    active === item.id
                      ? "auto"
                      : 0,
                }}
              >
                <p>{item.content}</p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </AnimatePresence>
  )
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  )
}

export default Accordion
