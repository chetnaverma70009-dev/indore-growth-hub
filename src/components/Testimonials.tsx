import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Chetna's expertise in digital marketing transformed our online presence. Her SEO strategies helped us rank on the first page for our key services in Indore. The organic traffic has increased significantly, and we're getting quality inquiries daily. Highly recommended!",
    author: "Rajesh Sharma",
    role: "Founder",
    company: "Local Business Indore",
  },
  {
    quote: "Working with Chetna was a game-changer for our Google Ads campaigns. She optimized our ad spend brilliantly and delivered quality leads consistently. Her analytical approach and attention to detail make her the best digital marketing professional in Indore!",
    author: "Priya Malhotra",
    role: "Marketing Head",
    company: "Tech Startup",
  },
  {
    quote: "Chetna's content marketing strategies significantly improved our engagement rates on social media. Her understanding of the Indore digital market is exceptional, and she knows exactly what content resonates with our local audience. Great results every time!",
    author: "Amit Patel",
    role: "Owner",
    company: "E-commerce Brand",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Client Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what my clients have to say about working together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6 opacity-80">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
