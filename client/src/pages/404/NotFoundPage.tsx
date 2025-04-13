import bgimage from "@/assets/bgimage.png";
import { Link } from "react-router-dom";

type Props = {}

const NotFoundPage = (props: Props) => {
  return (
    <main className="bg-[#ffe4ea] flex justify-center items-center min-h-screen py-10">
      <div className="flex flex-col items-center text-center max-w-xl px-4">
        <img src={bgimage} className="h-60 w-60 mb-6" alt="dog image" />
        <h2 className="text-2xl font-bold mb-4">Mulchand Ji Ate this Page 🥲</h2>
        <p className="text-base text-gray-700">
          Your dog is cute but honestly a menace. Where are my shoes? Where is my
          graduation certificate? Where is the chocolate cake I baked for my Aunt’s
          birthday? And why did you take your dog to the vet on that same Thursday?!
        </p>
        <Link to="/" className="pt-6"><span> Escape the Chaos 🏃‍♂️💨</span></Link>

      </div>
    </main>
  );
};

export default NotFoundPage;
