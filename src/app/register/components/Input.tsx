import { ComponentProps } from "react";

export default function Input(
  props: ComponentProps<"input"> & {
    label?: string;
  }
) {
  return (
    <div className="flex flex-col">
      {props.label && (
        <label
          className="cursor-pointer"
          htmlFor={props.id}
        >
          {props.label}:
        </label>
      )}
      <input
        className="border p-2 rounded-lg bg-gray-100 border-gray-400 mt-2"
        {...props}
      />
    </div>
  );
}
