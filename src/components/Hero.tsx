import React from 'react';
import { Button } from "@/components/ui/button";
import CharacterIllustration from './CharacterIllustration';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cafe-cream to-white pt-12 pb-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6 text-center sm:text-left">
            <div className="inline-block px-4 py-2 bg-cafe-orange/10 rounded-full">
              <span className="text-cafe-espresso font-medium">Coming Soon</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-cafe-espresso">
              In-person café meetups for
              <span className="title-gradient"> curious minds.</span>
            </h1>

            <p className="text-base sm:text-xl text-cafe-brown/80">
              For café owners & community lovers — host, discover, and join real-life events
              in your favorite neighborhood spots.
            </p>

            <div className="flex justify-center sm:justify-start">
              <Button
                onClick={() => document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                👉 Join the waitlist today
              </Button>
            </div>
          </div>

          {/* Right: Illustrations */}
          <div className="relative mt-10 sm:mt-0">
            {/* Blurred background blobs - hide on mobile */}
            <div className="hidden min:block absolute -top-20 -right-20 w-60 h-60 bg-cafe-mint rounded-full opacity-20 blur-3xl"></div>
            <div className="hidden sm:block absolute -bottom-20 -left-20 w-60 h-60 bg-cafe-orange rounded-full opacity-20 blur-3xl"></div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:gap-6">

            <div className="animate-float sm:col-span-1 sm:row-span-2">

                <div className="card bg-white/80 backdrop-blur-sm p-4">
                  <CharacterIllustration type="cafe-owner" className="w-24 h-24 sm:w-32 sm:h-32 mx-auto" />
                  <h3 className="text-center text-base sm:text-lg font-bold text-cafe-espresso mt-4">Café Owners</h3>
                  <p className="text-center text-cafe-brown/70 text-sm mt-2">Fill slow hours with paying crowds</p>
                </div>
              </div>
              <div className="animate-float" style={{ animationDelay: "1s" }}>
                <div className="card bg-white/80 backdrop-blur-sm p-4">
                  <CharacterIllustration type="attendee" className="w-20 h-20 sm:w-24 sm:h-24 mx-auto" />
                  <h3 className="text-center text-cafe-espresso font-medium text-sm sm:text-base">Event Goers</h3>
                </div>
              </div>
              <div className="animate-float" style={{ animationDelay: "2s" }}>
                <div className="card bg-white/80 backdrop-blur-sm p-4">
                  <CharacterIllustration type="community" className="w-20 h-20 sm:w-24 sm:h-24 mx-auto" />
                  <h3 className="text-center text-cafe-espresso font-medium text-sm sm:text-base">Communities</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center max-w-3xl mx-auto px-4">
          <p className="text-base sm:text-xl md:text-2xl text-cafe-brown italic">
            Cafés are more than coffee — they're where communities gather. We help you bring those gatherings to life.
          </p>
        </div>
      </div>

      {/* Pattern at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-cafe-pattern opacity-10"></div>
    </section>
  );
};

export default Hero;
