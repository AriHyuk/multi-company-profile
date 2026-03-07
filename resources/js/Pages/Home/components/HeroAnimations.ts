/**
 * Hero Animation CSS Definitions
 * Grouped to keep HeroSection.tsx clean and modular.
 */

export const HERO_ANIMATIONS = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes float-3d {
    0%, 100% { transform: translateZ(0) translateY(0); }
    50% { transform: translateZ(40px) translateY(-15px); }
  }

  @keyframes float-simple {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulse-glow {
    0%, 100% { opacity: 0.12; transform: scale(1); }
    50%       { opacity: 0.22; transform: scale(1.08); }
  }

  @keyframes scanline {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 0.5; }
    100% { transform: translateY(100%); opacity: 0; }
  }

  @keyframes beam {
    0% { transform: translateX(-100%) skewX(-45deg); opacity: 0; }
    50% { opacity: 0.3; }
    100% { transform: translateX(200%) skewX(-45deg); opacity: 0; }
  }

  @keyframes float-shadow {
    0%, 100% { filter: drop-shadow(0 20px 40px rgba(0,51,102,0.1)); }
    50% { filter: drop-shadow(0 40px 80px rgba(0,51,102,0.2)); }
  }

  @keyframes parallax-soft {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(0.5deg); }
  }

  .hero-animate-1 { animation: fadeInUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both; animation-delay: 0.1s; }
  .hero-animate-2 { animation: fadeInUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both; animation-delay: 0.3s; }
  .hero-animate-3 { animation: fadeInUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both; animation-delay: 0.5s; }
  .hero-animate-4 { animation: fadeInUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both; animation-delay: 0.7s; }
  .hero-animate-5 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both; animation-delay: 0.9s; }
  
  .image-parallax { animation: parallax-soft 8s ease-in-out infinite; }
  .shadow-float { animation: float-shadow 6s ease-in-out infinite; }
  .hero-orb-pulse { animation: pulse-glow 4s ease-in-out infinite; }
  .glow-beam { animation: beam 6s ease-in-out infinite; }
`;
