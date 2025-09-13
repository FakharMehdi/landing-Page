import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import CharacterIllustration from './CharacterIllustration';

interface AudienceSectionProps {
  audience: 'cafe' | 'attendee';
}

const AudienceSection = ({ audience }: AudienceSectionProps) => {
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
        subject: `New MeetInCafe ${audience === 'cafe' ? 'Café Owner' : 'Attendee'} Signup`,
        type: audience,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setIsSubmitting(false);
        if (data.success) {
          toast({
            title: "Thank you!",
            description: `You've been added to the ${audience === 'cafe' ? 'café owner' : 'attendee'} waitlist!`,
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

  const isCafe = audience === 'cafe';
  const id = isCafe ? 'cafe-owners' : 'organizers';

  return (
    <section id={id} className={`section-padding bg-gradient-to-br ${isCafe ? 'from-cafe-cream to-white' : 'from-cafe-mint/20 to-white'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`order-2 ${isCafe ? 'md:order-1' : 'md:order-2'}`}>
            <div className="relative">
              <div className={`absolute -z-10 w-80 h-80 rounded-full ${isCafe ? 'bg-cafe-orange/10' : 'bg-cafe-purple/10'} blur-3xl`}></div>
              <div className="flex justify-center">
                <CharacterIllustration 
                  type={isCafe ? 'cafe-owner' : 'attendee'} 
                  className="w-64 h-64 animate-bounce-slow"
                />
              </div>
            </div>
          </div>
          
          <div className={`${isCafe ? 'md:order-2' : 'md:order-1'}`}>
            <div className="inline-block px-3 py-1 rounded-full bg-cafe-orange/10 mb-4">
              <span className="text-sm font-medium text-cafe-orange">
                {isCafe ? '✨ For Café Owners' : '✨ For Event Organizers & Users'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-cafe-espresso mb-6">
              {isCafe ? 'Turn your space into a community hub' : 'Find your next favorite gathering spot'}
            </h2>
            
            <ul className="space-y-4 mb-8">
              {isCafe ? (
                <>
                  <li className="flex items-start">
                    <span className="text-cafe-orange mr-3 mt-1">✓</span>
                    <span>Fill your slow hours with paying, happy crowds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cafe-orange mr-3 mt-1">✓</span>
                    <span>Let local organizers host events at your space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cafe-orange mr-3 mt-1">✓</span>
                    <span>Reward attendees with exclusive in-café perks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cafe-orange mr-3 mt-1">✓</span>
                    <span>Get full control: approve, promote, or decline events</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <span className="text-cafe-orange mr-3 mt-1">✓</span>
                    <span>Find cool cafés to host meetups, workshops, or hangouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cafe-orange mr-3 mt-1">✓</span>
                    <span>Discover events nearby you actually care about</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cafe-orange mr-3 mt-1">✓</span>
                    <span>RSVP, get discounts, and connect with your local scene</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cafe-orange mr-3 mt-1">✓</span>
                    <span>Check in with a scan, no hassle</span>
                  </li>
                </>
              )}
            </ul>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="input-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Joining...' : (isCafe ? 'Join as café owner' : 'Join as attendee')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
