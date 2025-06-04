
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="glass-card p-8 rounded-3xl inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Get In <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's work together</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about technology, 
              feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 glass p-4 rounded-xl">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-600 font-medium">hello@yourportfolio.com</span>
              </div>
              <div className="flex items-center space-x-3 glass p-4 rounded-xl">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-600 font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 glass p-4 rounded-xl">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-600 font-medium">San Francisco, CA</span>
              </div>
            </div>
          </div>

          <Card className="glass-card border-white/20 p-8 rounded-3xl fluent-shadow-lg">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" required className="glass border-white/30 rounded-xl" />
                  <Input placeholder="Last Name" required className="glass border-white/30 rounded-xl" />
                </div>
                <Input type="email" placeholder="Email Address" required className="glass border-white/30 rounded-xl" />
                <Input placeholder="Subject" required className="glass border-white/30 rounded-xl" />
                <Textarea 
                  placeholder="Your message..." 
                  className="min-h-32 glass border-white/30 rounded-xl" 
                  required 
                />
                <Button 
                  type="submit" 
                  className="w-full glass-button text-white rounded-xl py-3 font-medium"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
