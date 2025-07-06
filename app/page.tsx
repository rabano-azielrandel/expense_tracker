import Separator from "@/components/Separator";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="bg-white transition-all duration-500 ease-in-out">
      <div className="flex flex-col md:flex-row w-full h-screen text-gray-700">
        {/* login/leftside */}
        <section className="flex flex-col justify-center items-center gap-4 p-8 h-full md:w-[65%]">
          <h1 className="text-gray-800 tracking-wide text-[calc(min(7vw,36px))] text-center text-nowrap font-bold">
            Login to Your Account
          </h1>
          <h2 className="text-gray-400  text-md">
            Login using social networks
          </h2>

          <div className="flex gap-4">
            <Link
              href={"https://www.facebook.com/"}
              className="rounded-full  bg-[#47546D] flex justify-center items-center p-2"
            >
              <Image
                src={"/images/fb.png"}
                alt="adsf"
                width={100}
                height={100}
                className="object-contain w-[18px] h-[18px] invert"
              ></Image>
            </Link>

            <Link
              href={"https://www.google.com/"}
              className="rounded-full bg-[#B84645] flex justify-center items-center p-2"
            >
              <Image
                src={"/images/google.png"}
                alt="adsf"
                width={100}
                height={100}
                className="object-contain w-[18px] h-[18px] invert"
              ></Image>
            </Link>

            <Link
              href={"https://www.linkedin.com/"}
              className="rounded-full bg-[#47546D] flex justify-center items-center p-2"
            >
              <Image
                src={"/images/linkedin.png"}
                alt="adsf"
                width={100}
                height={100}
                className="object-contain w-[18px] h-[18px] invert"
              ></Image>
            </Link>
          </div>

          <div className="w-full max-w-[500px]">
            <div className="flex gap-4 items-center">
              <Separator className="bg-gray-200" />
              <span className="">OR</span>
              <Separator className="bg-gray-200" />
            </div>

            <LoginForm />
          </div>
        </section>

        <section className="flex flex-col w-[100%] md:w-[35%] justify-center items-center gap-4 p-10 text-center bg-[#43BAA6]">
          <h1 className="text-white font-bold text-[36px]">New Here?</h1>
          <h2 className="text-white">
            Sign up and discover a great amount of new opportunities
          </h2>
          <button className="p-4 text-[14px] font-bold tracking-wider bg-white w-[200px] rounded-full">
            Sign Up
          </button>
        </section>
      </div>
    </main>
  );
}
