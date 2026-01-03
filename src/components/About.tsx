import { CheckCircle2, Target, TrendingUp, Users, Lightbulb, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Target,
    text: "Results-driven approach focused on measurable outcomes",
  },
  {
    icon: Users,
    text: "Deep understanding of the Indore market and local business landscape",
  },
  {
    icon: TrendingUp,
    text: "Data-backed strategies that maximize your marketing investment",
  },
  {
    icon: Lightbulb,
    text: "Personalized attention to every project",
  },
  {
    icon: RefreshCw,
    text: "Commitment to staying updated with the latest digital marketing trends",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Image placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-primary opacity-20" />
              <div className="absolute inset-4 rounded-xl bg-card border border-border shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full gradient-primary mb-6 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary-foreground">CV</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Chetna Verma</h3>
                  <p className="text-muted-foreground mt-2">Digital Marketing Expert</p>
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About Me</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Chetna Verma, a passionate digital marketing professional based in Indore with 1 year of hands-on experience in driving business growth through strategic digital marketing campaigns.
                </p>
                <p>
                  As a dedicated specialist in the Indore digital marketing landscape, I help businesses amplify their online presence, reach their target audience effectively, and achieve measurable results through data-driven strategies.
                </p>
                <p>
                  My expertise spans across multiple digital channels including SEO optimization, content marketing, Meta Ads, Google Ads, and LinkedIn Ads. I believe in creating customized digital marketing solutions that align with your business goals and deliver exceptional ROI.
                </p>
              </div>

              {/* Why Choose Me */}
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Why Choose Me?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <p className="text-foreground/80 pt-2">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
