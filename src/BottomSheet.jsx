import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const BottomSheet = ({ isOpen, onClose, children }) => {
  const sheetRef = useRef(null);

  const snapPoints = [ 100, 400, 700]; 

  const calculateSnap = (y) => {
  
    return snapPoints.reduce((closest, snap) => {
      return Math.abs(snap - y) < Math.abs(closest - y) ? snap : closest;
    });
  };

  const [{ y }, set] = useSpring(() => ({ y: isOpen ? 0 : snapPoints[0] }));

  const bind = useDrag(
    ({ down, movement: [_, my], velocity }) => {
      if (down) {
        set({ y: my, immediate: false });
      } else {
       
        const closestSnap = calculateSnap(y.get());
        set({ y: closestSnap, immediate: false });

        if (!isOpen) onClose();
      }
    },
    {
      initial: () => [0, y.get()],
      bounds: { top: snapPoints[0], bottom: snapPoints[snapPoints.length - 1] },
    }
  );

  return (
    <animated.div
      ref={sheetRef}
      style={{
        transform: y.interpolate((value) => `translateY(${value}px)`),
      }}
      {...bind()}
    >
      {children}
    </animated.div>
  );
};

export default BottomSheet;
