import {
  gaugeClasses,
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
} from "@mui/x-charts";
import { useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef, useState } from "react";

interface GaugeGraphProps {
  color?: string;
  width?: number;
  height?: number;
  value: number;
  labelSize?: number;
}

export default function GaugeGraph({
  color,
  width,
  height,
  value,
  labelSize,
}: GaugeGraphProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [counter, setCounter] = useState<number>(0);

  useIsomorphicLayoutEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < value) {
        count += 1;
        setCounter(count);
      } else {
        clearInterval(interval);
      }
    }, 2);
  }, [ref, inView, value]);

  const settings = {
    width: width ?? 200,
    height: height ?? 200,
    value: counter,
  };

  return (
    <GaugeContainer
      {...settings}
      sx={() => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: labelSize ?? 40,
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: color ?? "#52b202",
        },
      })}
    >
      <GaugeReferenceArc />
      <text x="75" y="110" style={{ fontSize: labelSize ?? 40 }}>
        {counter}
      </text>
      <GaugeValueArc style={{ fill: color ?? "#52b202" }} />
    </GaugeContainer>
  );
}
