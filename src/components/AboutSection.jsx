import { cn } from "@/lib/utils";
import { Code } from "lucide-react";
import { User } from "lucide-react";
import { GraduationCap } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

                    <p className="text-muted-foreground">
                        High-achieving Software Engineering student (CGPA 3.92/4.00) with 3 years of hands-on experience in full-stack development and proven competitive programming abilities. 
                    </p>

                    <p className="text-muted-foreground">
                        Specialized in building scalable web applications, mobile solutions, and RESTful APIs using modern frameworks including Django, Spring, React and Flutter. 
                        Proficient in Java, C++, Python, HTML, CSS, JavaScript, PHP, Dart, and SQL.  
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="src/assets/V10 MUHAMMAD HAFIZ BIN KHAIRUL KAMAL CV.pdf" target="_blank" rel="noopener noreferrer" 
                        className={cn("px-6 py-2 rounded-full border border-primary text-primary", 
                                    "hover:bg-primary/10 transition-colors duratio-300")}>
                            View CV
                        </a>
                    </div>      
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development </h4>
                                <p className="text-muted-foreground">
                                    Creating responsive web & mobile applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive user interfaces and seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Education </h4>
                                <p className="text-muted-foreground">
                                    Currently pursuing Bachelors Degree in Computer Science (Software Engineering) at Universiti Teknologi Malaysia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}