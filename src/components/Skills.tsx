import { BarChart3, PenTool, Search, Facebook, Chrome, Linkedin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    icon: BarChart3,
    title: "Digital Marketing Strategy",
    description: "Comprehensive digital marketing solutions for businesses in Indore. From strategy development to execution, I create integrated campaigns that drive traffic, generate leads, and boost conversions across all digital channels.",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Engaging, SEO-optimized content that resonates with your target audience and drives conversions. I specialize in creating compelling content for blogs, websites, social media, email campaigns, and more.",
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    description: "Boost your website's visibility with proven SEO strategies including comprehensive keyword research, on-page and technical SEO optimization, local SEO for Indore-based businesses, and link building.",
    features: ["Keyword research & analysis", "On-page & technical SEO", "Local SEO", "Performance tracking"],
  },
  {
    icon: Facebook,
    title: "Meta Ads (Facebook & Instagram)",
    description: "Strategic advertising campaigns on Meta platforms designed to reach your ideal customers with precision targeting and maximize ROI through data-driven ad optimization.",
    features: ["Precision targeting", "Data-driven optimization", "Compelling creatives", "Lead generation"],
  },
  {
    icon: Chrome,
    title: "Google Ads (PPC Management)",
    description: "Performance-driven Google Ads campaigns that deliver results including search ads for immediate visibility, display advertising for brand awareness, and remarketing campaigns.",
    features: ["Search & display ads", "Shopping ads", "Remarketing", "Continuous optimization"],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Ads",
    description: "B2B marketing excellence through LinkedIn advertising to reach decision-makers and professionals, generate high-quality business leads, and build brand authority in your industry.",
    features: ["Reach decision-makers", "High-quality B2B leads", "Sponsored content", "InMail campaigns"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing services tailored to help your business thrive in the competitive Indore market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {skill.description}
                </p>
                {skill.features && (
                  <ul className="space-y-2">
                    {skill.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
