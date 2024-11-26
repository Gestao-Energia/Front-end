import { gaugeClasses, GaugeContainer, GaugeReferenceArc, GaugeValueArc } from "@mui/x-charts";
import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef } from "react";

interface GaugeGraphProps {
    color?: string
    width?: number,
    height?: number,
    value: number,
    labelSize?: number
}

export default function GaugeGraph({ color, width, height, value, labelSize }: GaugeGraphProps) {
    const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(0);

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, value]);

    const settings = {
        width: width ?? 200,
        height: height ?? 200,
        value: value,
    };

    return (
        <GaugeContainer
            {...settings}
            sx={() => ({
                [`& .${gaugeClasses.valueText}`]: {
                    fontSize: labelSize ?? 40,
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: color ?? '#52b202',
                },
            })}
        >
            <GaugeReferenceArc />
            <text x="75" y="110" font-family="Poppins" font-size={labelSize ?? 40} ref={ref}/>
            <GaugeValueArc style={{fill: color ?? '#52b202'}} />
        </GaugeContainer>
    );
}