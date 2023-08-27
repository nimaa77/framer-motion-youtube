"use client";

import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Item 1",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam omnis voluptatum maiores ipsa qui, laboriosam libero soluta, sapiente consectetur iusto ipsam, pariatur eligendi explicabo reprehenderit veritatis unde quis fugit?",
  },
  {
    id: 2,
    title: "Item 2",
    content:
      "laboriosam libero soluta, sapiente consectetur iusto ipsam, pariatur eligendi explicabo reprehenderit veritatis unde quis fugit?",
  },
  {
    id: 3,
    title: "Item 3",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. laboriosam libero explicabo Tenetur magnam omnis voluptatum maiores ipsa qui, laboriosam libero explicabo reprehenderit veritatis unde quis fugit?",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              className="flex flex-row justify-between border-b border-black w-full text-left"
              onClick={() => setActive(item.id)}
            >
              {item.title}
              <Icon />
            </button>
            {active === item.id && (
              <div className="overflow-hidden">
                <p>{item.content}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

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
  );
};

export default Accordion;
