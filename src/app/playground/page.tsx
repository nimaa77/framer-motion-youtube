"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Playground() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotate, setRotate] = useState(0)

  return (
    <div>
      <div className="space-y-2">
        <div>
          <label>
            X:
            <input
              type="number"
              className="border border-gray-300 p-2 w-24"
              value={x}
              onChange={(event) =>
                setX(event.target.valueAsNumber)
              }
            />
          </label>
        </div>
        <div>
          <label>
            Y:
            <input
              type="number"
              className="border border-gray-300 p-2 w-24"
              value={y}
              onChange={(event) =>
                setY(event.target.valueAsNumber)
              }
            />
          </label>
        </div>
        <div>
          <label>
            R:
            <input
              type="number"
              className="border border-gray-300 p-2 w-24"
              value={rotate}
              onChange={(event) =>
                setRotate(event.target.valueAsNumber)
              }
            />
          </label>
        </div>
      </div>
      <div className="grid w-full h-[55dvh] place-items-center">
        <motion.div
          animate={{ x, y, rotate }}
          transition={{
            type: "spring",
            bounce: 0.8,
          }}
          className="bg-pink-600 rounded-lg w-40 h-40"
        />
      </div>
    </div>
  )
}
