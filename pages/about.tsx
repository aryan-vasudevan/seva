export default function About() {
    return (
        <div className="min-h-screen bg-black overflow-hidden">
            <div className="h-screen w-full flex flex-col place-items-center justify-evenly overflow-y-auto">
                <h1 className="text-center z-0 absolute opacity-20 text-aqua text-[30em] select-none">
                    SEVA
                </h1>
                    <div className="border-2 border-theme-blue p-8 bg-black/20 shadow-[0_0_60px_10px_#89A8C6] hover:scale-105 transition-transform duration-500 ease-in-out transform">
                        <button className="text-7xl font-bold">Who Are We?</button>
                    </div>
            </div>  
        </div>
    );
}
        
       
  