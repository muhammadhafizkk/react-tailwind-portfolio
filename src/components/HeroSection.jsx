import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <img 
                    src="/profile.png" 
                    alt="Muhammad Hafiz" 
                    className="w-40 h-40 mx-auto rounded-3xl shadow-lg opacity-0 animate-fade-in"
                />

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Muhammad Hafiz </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Bin </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-3">Khairul Kamal</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    Software Engineering student with experience in full-stack development, mobile apps, and API integration. 
                    Passionate about building scalable solutions and solving real-world problems.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                    <a href="#projects" className="cosmic-button">
                        View My Projects
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground m"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}