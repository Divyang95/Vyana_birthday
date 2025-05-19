import { useEffect, useState } from "react";
import babyPic from "/Images/pic2.jpg";
import godLeft from "/Images/camphanumanji.jpeg";
import godRight from "/Images/bhavanimaa.jpeg";
import birthdaySong from "/Audio/birthdaySong.mp3";

const Countdown = ({ targetDate = "2025-05-20T19:30:00" }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white text-xl font-bold mt-4 drop-shadow">
      {Object.keys(timeLeft).length > 0 ? (
        <div>
          ⏳ {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left
        </div>
      ) : (
        <div>🎉 It's Party Time! 🎉</div>
      )}
    </div>
  );
};

function Home() {
  useEffect(() => {
    const audio = new Audio(birthdaySong);
    audio.loop = true;
    audio.play().catch(() => {
      console.warn("Audio play failed — waiting for user interaction.");
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-300 to-blue-200 flex flex-col items-center justify-center text-center px-4 py-10 relative overflow-hidden">
      
      {/* God's Images */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-8">
        {/* Left God */}
        <div className="flex flex-col items-center">
          <img
            src={godLeft}
            alt="Left God"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-xl"
          />
          <p className="text-white font-semibold mt-2 text-lg">🙏Shree Hanuman dada🙏</p>
        </div>

        {/* Birthday Girl */}
        <div className="flex flex-col items-center">
          <img
            src={babyPic}
            alt="Birthday Girl"
            className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border-4 border-white shadow-2xl animate-bounce"
          />
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md mt-4">
            🎀 You're Invited to Vyana's Birthday! 🎀
          </h1>
          <p className="text-lg text-white font-medium mt-2">
            Join us to celebrate the 2nd birthday of our little princess 👑
          </p>
        </div>

        {/* Right God */}
        <div className="flex flex-col items-center">
          <img
            src={godRight}
            alt="Right God"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-xl"
          />
          <p className="text-white font-semibold mt-2 text-lg">🙏Shree Bhavani maa🙏</p>
        </div>
      </div>

      {/* Countdown */}
      <Countdown targetDate="2025-05-20T19:30:00" />

      {/* Venue & Info */}
      <div className="mt-8 bg-white/90 p-5 rounded-xl shadow-lg w-full max-w-md mx-auto space-y-4">
        <p className="text-gray-800">
          📍 <strong>Venue:</strong> Purohit Dining And Banquet, Kankaria Gate No:01, Ahmedabad
        </p>
        <p className="text-gray-800">
          🕖 <strong>Time:</strong> 7:30 PM, 20th May 2025
        </p>
        
        <div className="flex justify-center">
          <a
            href="https://www.google.co.in/maps/dir//Purohit+Dinning+And+Banquet,+10,+Swaminarayan+College+Rd,+Kankaria,+Maninagar,+Ahmedabad,+Gujarat+380026/@23.00368,72.5971825,17z/data=!3m1!5s0x395e85c69f006d8f:0x3d833532b6146f0f!4m9!4m8!1m0!1m5!1m1!1s0x395e85c69fdfee6d:0x9333ab45213463c5!2m2!1d72.5971825!2d23.00368!3e0?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-500 transform hover:scale-105 transition duration-300"
          >
            📍 Open in Google Maps
          </a>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="italic text-white text-md mt-8 max-w-md">
        “Let her giggle, let her roar, our baby is turning TWO, let's celebrate and more!”
      </blockquote>
    </div>
  );
}

export default Home;
