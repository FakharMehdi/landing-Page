
import React from 'react';
import { Coffee, Calendar, UserCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Coffee className="w-8 h-8 text-cafe-orange" />,
      title: "Find or list a café event",
      description: "Search for local events or create your own in nearby café spaces.",
      highlight: "Search or create"
    },
    {
      icon: <Calendar className="w-8 h-8 text-cafe-orange" />,
      title: "RSVP or approve events",
      description: "Seamlessly book your spot or manage event requests as a café owner.",
      highlight: "Simple, smooth, no spam"
    },
    {
      icon: <UserCheck className="w-8 h-8 text-cafe-orange" />,
      title: "Show up, scan in, enjoy",
      description: "Check in with a simple scan and start connecting with your community.",
      highlight: "Build your community"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-cafe-orange/10 mb-4">
            <span className="text-sm font-medium text-cafe-orange">💥 How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-espresso">
            Three simple steps to better café experiences
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="card hover:translate-y-[-8px]">
              <div className="w-16 h-16 rounded-full bg-cafe-orange/10 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-cafe-espresso mb-3">{step.title}</h3>
              <p className="text-cafe-brown/80 mb-4">{step.description}</p>
              <p className="font-bold text-cafe-orange">{step.highlight}</p>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cafe-orange/10 flex items-center justify-center text-cafe-orange font-bold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
