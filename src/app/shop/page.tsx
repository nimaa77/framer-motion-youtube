"use client"

import Card from "./components/Card"

const AnimatedCard = (
  props: React.ComponentProps<
    typeof Card
  >
) => {
  return <Card {...props} />
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
    </div>
  )
}

export default Shop
