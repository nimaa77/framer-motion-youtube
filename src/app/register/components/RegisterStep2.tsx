import { forwardRef } from "react";
import Input from "./Input";

const RegisterStep2 = forwardRef<
  HTMLDivElement,
  {}
>((props, ref) => {
  return (
    <div ref={ref}>
      <Input
        name="phone"
        type="tel"
        id="phone"
        label="Phone number"
        placeholder="09123456789"
      />
    </div>
  );
});

export default RegisterStep2;
