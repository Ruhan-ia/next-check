
import Cards from "@/components/Cards/Cards";
import Sliders from "@/components/Sliders/Sliders";
export default function Home() {
  return (
    
      <main className="bg-gradient-to-r from-[#c8bdba] to-[#a4929b] w-full min-h-screen mx-auto grid place-items-center">
        <div>
          
        <Sliders></Sliders>
        <Cards></Cards>
        </div>
      </main>
      
  );
}
