import { ModernBackground } from "./components/ModernBackground";
import { FeatureCard } from "./components/FeatureCard";
import { Button } from "./components/ui/button";
import { 
  Code2, 
  BarChart3, 
  CreditCard, 
  Shield, 
  Zap, 
  Lock,
  Activity,
  FileText,
  Users,
  DollarSign,
  Italic
} from "lucide-react";

export default function App() {
  const features = [
    {
      icon: Code2,
      title: "API Management",
      description: "Centralized platform to create, manage, and monitor all your APIs with intuitive controls and real-time insights."
    },
    {
      icon: BarChart3,
      title: "Usage Analytics",
      description: "Comprehensive dashboards with detailed metrics, request tracking, and performance monitoring in real-time."
    },
    {
      icon: CreditCard,
      title: "Smart Billing",
      description: "Automated billing based on usage with flexible pricing tiers, invoicing, and payment processing."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, OAuth 2.0 authentication, and compliance with industry standards."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized infrastructure delivering sub-100ms response times with 99.99% uptime guarantee."
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Granular permissions, role-based access control, and API key management for your team."
    },
    {
      icon: Activity,
      title: "Rate Limiting",
      description: "Configurable rate limits to protect your APIs and ensure fair usage across all consumers."
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Auto-generated API documentation with interactive testing tools and code samples."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Invite team members, manage permissions, and collaborate on API development seamlessly."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      {/* Modern Background */}
      <ModernBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg" />
              <span className="text-xl">Costly</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-zinc-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
              <a href="#docs" className="text-zinc-400 hover:text-white transition-colors">Docs</a>
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                Get Started
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-zinc-400">Now with real-time analytics</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl italic text-white bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Costly
              <br />
              
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
             One‑dashboard to track all your API bills (AI, cloud, SMS, payment),with real‑time cost forecasting, alerts and cost‑saving recommendations,built for devs & small teams.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 w-full sm:w-auto"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zinc-700 text-white hover:bg-zinc-800 w-full sm:w-auto"
              >
                View Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 pt-8 text-sm text-zinc-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-8" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>20+ APIs Listed</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4" />
                <span>40% reduction in Cost</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl">
                Everything you need to manage APIs
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Comprehensive tools and features to streamline your API operations from development to production.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-1">
              <div className="bg-zinc-900 rounded-2xl p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-5xl">
                  Ready to get started?
                </h2>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                  Join thousands of developers who trust Costly for their API management needs. 
                  Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 w-full sm:w-auto"
                  >
                    Start Free Trial
                  </Button>
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="text-white hover:bg-zinc-800 w-full sm:w-auto"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg" />
              <span>Costly</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            <p className="text-sm text-zinc-500">© 2025 Costly. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
