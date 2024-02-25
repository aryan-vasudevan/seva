export default function About () {
    return (
        <div className="min-h-screen bg-black">
            <div className="h-screen w-full flex flex-col place-items-center justify-evenly">
            <h1 className="text-center absolute opacity-20 text-theme-blue text-[30em] select-none">
                        SEVA
                    </h1>	
                <div className="w-2/3 border-2 border-theme-blue rounded-lg bg-black/50 shadow-[0_0_60px_10px_#89A8C6] p-8">
                    <h2 className="text-center">Who are We?</h2>
                    
                    <p className="text-center text-pretty">We, Sohum Padhye, Rohan Dhanam, and Aryan Vasudevan created Seva for NSBEHacks '24. We wanted to create a platform for people to find volunteering opportunities in their area fast and easy, so this led us to utilising a variety of different tools to bring our vision to life." </p>
                </div>
            </div>
        </div>
    );
}