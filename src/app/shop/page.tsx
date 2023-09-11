"use client"

import { motion } from "framer-motion"
import Card from "./components/Card"

const AnimatedCard = (
  props: React.ComponentProps<
    typeof Card
  >
) => {
  return (
    <motion.div
      {...props}
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        amount: 0.6,
        once: true,
      }}
    >
      <Card />
    </motion.div>
  )
}

const Shop = () => {
  return (
    <div>
      <h1 className="font-black mt-14 text-3xl">
        Let's start building your shop!
      </h1>
      <div className="h-[80vh]" />
      <div className="grid grid-cols-3 gap-4">
        <AnimatedCard />
        <AnimatedCard className="col-span-2" />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard className="col-span-2" />
        <AnimatedCard />
      </div>
      <div className="h-28" />
    </div>
  )
}

export default Shop
