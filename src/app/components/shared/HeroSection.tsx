import { FadeInUpAnimate } from "@components/shared/FadeInUpAnimate"

interface HeroSectionProps {
  badge: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function HeroSection({ badge, title, description }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-primary color-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto px-6 md:px-10 py-20 md:py-32 max-w-[1280px]">        
        <FadeInUpAnimate
          contents={
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-accent-20 border-accent-30 mb-6 rounded-full">
                <span className="color-accent text-sm font-semibold">
                  {badge}
                </span>
              </div>

              <h1 className="text-[clamp(32px,5vw,56px)] font-bold leading-[130%] mb-6">
                {title}
              </h1>

              <p className="text-lg md:text-xl color-white-90 leading-[170%] mb-8">
                {description}
              </p>
            </div>
          }>
        </FadeInUpAnimate>        
      </div>
    </section>
  );
}

