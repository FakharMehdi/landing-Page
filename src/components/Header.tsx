import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Apple, Smartphone } from "lucide-react";

const Header = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      toast({
        title: "Oops!",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '229f0261-77e2-4366-a252-a6e31b43df7c',
        email: email,
        subject: 'New MeetInCafe Waitlist Signup',
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast({
            title: "You're on the list!",
            description: "Thanks for joining our waitlist. We'll be in touch soon!",
          });
          setEmail('');
        } else {
          toast({
            title: "Something went wrong",
            description: "Please try again later.",
            variant: "destructive",
          });
        }
      })
      .catch(() => {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      });
  };

  return (
    <header className="w-full px-4 py-4 md:px-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
      {/* Logo */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 mr-2 flex items-center justify-center bg-cafe-orange rounded-full">
            <span className="text-white font-pacifico text-xl">M</span>
          </div>
          <h1 className="font-pacifico text-2xl tracking-tight text-cafe-espresso">MeetInCafe</h1>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <Button
            onClick={() => document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Join
          </Button>
        </div>
      </div>

      {/* Nav links (hidden on mobile) */}
      <nav className="hidden md lg:flex space-x-6">
        <a href="#how-it-works" className="text-cafe-espresso hover:text-cafe-orange transition-colors">How It Works</a>
        <a href="#cafe-owners" className="text-cafe-espresso hover:text-cafe-orange transition-colors">For Cafés</a>
        <a href="#organizers" className="text-cafe-espresso hover:text-cafe-orange transition-colors">For Organizers</a>
      </nav>

      {/* Desktop form */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Apple className="text-cafe-espresso" size={18} />
          <Smartphone className="text-cafe-espresso" size={18} />
          <span className="text-xs text-cafe-brown">Coming soon</span>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <Input
            type="email"
            placeholder="Your email"
            className="input-primary mr-2 w-40 h-9"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="btn-primary h-9 py-0">
            Join Waitlist
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
