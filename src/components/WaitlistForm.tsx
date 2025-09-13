
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import CharacterIllustration from './CharacterIllustration';

const WaitlistForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true);

    // Send the email to the email collection service
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '229f0261-77e2-4366-a252-a6e31b43df7c', // This is a demo access key
        email: email,
        subject: 'New MeetInCafe Waitlist Signup',
      }),
    })
      .then(res => res.json())
      .then(data => {
        setIsSubmitting(false);
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
        setIsSubmitting(false);
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      });
  };

  return (
    <section id="join-waitlist" className="section-padding bg-gradient-to-br from-cafe-cream via-white to-cafe-mint/20">
      <div className="container mx-auto max-w-4xl px-6 md:px-8 text-center">
        <div className="flex justify-center mb-8">
          <CharacterIllustration type="coffee-cup" className="w-24 h-24 animate-bounce-slow" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-cafe-espresso mb-4">
          🚀 We're almost ready to open the doors.
        </h2>
        
        <p className="text-lg md:text-xl text-cafe-brown/80 mb-8 max-w-2xl mx-auto">
          Join hundreds already on the list — get early access, perks, and help shape the future of café culture.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="input-primary flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="btn-primary whitespace-nowrap" disabled={isSubmitting}>
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
