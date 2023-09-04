import { forwardRef } from "react";

const RegisterStep3 = forwardRef<
  HTMLDivElement,
  {}
>((props, ref) => {
  return (
    <div ref={ref}>
      <p>
        Enter the six digit code sent to
        your phone number
      </p>
      <div className="flex flex-row gap-3 mt-3 justify-center">
        <input
          className="border p-2 rounded-lg w-14"
          type="number"
          name="otp"
        />
        <input
          className="border p-2 rounded-lg w-14"
          type="number"
          name="otp"
        />
        <input
          className="border p-2 rounded-lg w-14"
          type="number"
          name="otp"
        />
        <input
          className="border p-2 rounded-lg w-14"
          type="number"
          name="otp"
        />
        <input
          className="border p-2 rounded-lg w-14"
          type="number"
          name="otp"
        />
      </div>
      <button className="mt-5 text-sm w-full text-center text-gray-500 px-2 py-3">
        Didn't receive the code? click
        here to resend it
      </button>
    </div>
  );
});

export default RegisterStep3;
