import React, { createRef } from "react";
import { RippleOptions } from "../../hooks/useRipple";
import { useRipple } from "../../hooks/useRipple";

const Ripple = ({
  children,
  className,
  rippleOptions,
}: {
  children: React.ReactNode;
  className?: string;
  rippleOptions?: RippleOptions;
}): JSX.Element => {
  const ref = createRef<HTMLDivElement>();
  useRipple(ref, { ...rippleOptions });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Ripple;
