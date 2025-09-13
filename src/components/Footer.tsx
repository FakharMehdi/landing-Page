
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cafe-espresso text-white py-12">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-2 flex items-center justify-center bg-cafe-orange rounded-full">
                <span className="text-white font-pacifico text-xl">C</span>
              </div>
              <h2 className="font-pacifico text-2xl">MeetInCafe</h2>
            </div>
            <p className="text-white/80 max-w-sm">
              Bringing together café owners and community organizers to create vibrant local spaces.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-white/80 hover:text-cafe-orange transition-colors">How It Works</a></li>
              <li><a href="#cafe-owners" className="text-white/80 hover:text-cafe-orange transition-colors">For Cafés</a></li>
              <li><a href="#organizers" className="text-white/80 hover:text-cafe-orange transition-colors">For Organizers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hello@meetincafe.com" className="text-white/80 hover:text-cafe-orange transition-colors">hello@meetincafe.com</a></li>
              <li><a href="#" className="text-white/80 hover:text-cafe-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-cafe-orange transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex f💥 Headline (Hero Section)
“Meet In Cafe — Where Community Comes to Life.”
Host, discover, and join real-life events in your favorite local cafés.

👉 Join the waitlist on meetincafe.com and be first to organize or attend.

🌟 Subheadline
Not just coffee. Not just space.
Cafés + community = magic. We help make it happen.

✨ For Café Owners
Fill your space with vibrant events

Approve or host your own gatherings

Reward attendees with exclusive in-café perks

Build a loyal local following

✅ Join café owner waitlist → [email input] [Join button]

✨ For Event Organizers & Users
Find cool café spaces for your meetups

RSVP to fun, meaningful local events

Get special offers when you show up

Grow your network, one coffee at a time

✅ Join as attendee → [email input] [Join button]

💥 How It Works (3 simple steps)
Find or list a café event → Browse or host

RSVP or approve → Smooth, no back-and-forth

Show up, scan, connect → Simple check-in, real moments

💌 Call to Action (bottom)
🚀 We’re brewing something special.
Get early access, founder perks, and help shape the future of in-person community.

[ Your email ] → [ Join Waitlist ]

💡 Fun tagline in footer
☕ Meet, sip, connect — only at Meet In Cafe.cafelex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} MeetInCafe. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            ☕ Made with love (and too much coffee)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
