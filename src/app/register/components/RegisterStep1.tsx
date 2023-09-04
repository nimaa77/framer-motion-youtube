import { forwardRef } from "react";
import Input from "./Input";

const RegisterStep1 = forwardRef<
  HTMLDivElement,
  {}
>((props, ref) => {
  return (
    <div ref={ref}>
      <Input
        type="email"
        placeholder="example@gmail.com"
        name="email"
        id="email"
        label="Email"
      />
      <div className="mt-4 text-sm text-slate-800">
        Already have an account?{" "}
        <b>Login here</b>
      </div>
    </div>
  );
});

export default RegisterStep1;
