import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
  variant?: "up" | "left" | "right" | "zoom" | "fade";
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  // IMPORTANTE:
  // iniciar visible para SSR
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    // reset después de hidratar
    setVisible(false);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`reveal reveal-${variant} ${
        visible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}