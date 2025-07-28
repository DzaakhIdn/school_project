import DotPattern from "@/components/ui/dot-pattern";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

export const BackgroundPattern = () => {
  const { resolvedTheme } = useTheme();
  const isLightTheme = resolvedTheme === "light";
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log("isLightTheme", isLightTheme);

  return (
    <>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(ellipse,rgba(0,0,0,0.3)_30%,black_50%)]",
          "dark:fill-slate-700"
        )}
      />
      {mounted && (
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color= {isLightTheme ? "#00ff00" : "#0A3B63"}
          refresh
        />
      )}
    </>
  );
};
