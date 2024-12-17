import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code",
};

export default function Home() {
  return (
    <div className="min-h-svh bg-slate-300 flex justify-center items-center">
      <div className="bg-white flex flex-col gap-6 items-center justify-start p-4 pb-10 w-80 shadow-lg rounded-[1.25rem]">
        <img
          src="image-qr-code.png"
          className="size-72 rounded-[0.625rem]"
          alt="qrcode"
        />
        <div className="flex flex-col gap-4 px-4 align-top text-center">
          <p className="text-slate-900 font-bold text-[1.375rem] leading-[1.625rem] tracking-normal">
            Improve your front-end skills by building projects
          </p>
          <p className="text-slate-500 text-[0.9375rem] leading-[140%] tracking-[0.2px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
