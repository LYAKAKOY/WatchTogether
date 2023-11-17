import RegisterBlock from "@/components/components-registration/RegisterBlock";
import { Prompt } from "next/font/google";

const prompt = Prompt({ subsets: ["latin"], weight: "500" });

const page = () => {
  return (
    <main className="auth-bg absolute h-full w-full">
      <RegisterBlock />
    </main>
  );
};

export default page;
