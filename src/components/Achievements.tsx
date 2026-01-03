import { TrendingUp, Target, Megaphone, Award } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    title: "SEO Success Stories",
    description: "Successfully optimized websites for local businesses in Indore, achieving first-page rankings for competitive keywords in the digital marketing niche. Delivered consistent organic traffic growth and improved online visibility.",
    stats: [
      { value: "150%", label: "Increase in organic traffic" },
      { value: "Top 3", label: "Rankings for target keywords" },
      { value: "40%", label: "Improvement in conversion rates" },
    ],
  },
  {
    icon: Target,
    title: "Paid Advertising Campaigns",
    description: "Managed successful Meta Ads and Google Ads campaigns across various industries including retail, education, healthcare, and e-commerce. Consistently delivered high-quality leads and exceptional return on ad spend.",
    stats: [
      { value: "3.5x", label: "Average ROAS across campaigns" },
      { value: "65%", label: "Reduction in cost per acquisition" },
      { value: "500+", label: "Qualified leads generated" },
    ],
  },
  {
    icon: Megaphone,
    title: "Content Marketing Excellence",
    description: "Created engaging content strategies that increased audience engagement and brand awareness for businesses across Indore's digital landscape. Developed comprehensive content calendars and executed multi-channel content campaigns.",
    stats: [
      { value: "200%", label: "Increase in social media engagement" },
      { value: "50+", label: "Successful content projects" },
      { value: "Strong", label: "Brand communities built" },
    ],
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Work & Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real campaigns - here's what I've achieved for businesses in Indore
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Icon and title */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {achievement.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-4 rounded-xl bg-secondary/50">
                        <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
