import { useState, useEffect } from 'react';

export default function useWheel() {
  const [wheel, setWheel] = useState(false);
  const scrollHandler = ({ deltaY }) => {
    if (deltaY > 0) setWheel('down');
    else if (deltaY < 0) setWheel('up');
    setTimeout(() => {
      setWheel(false);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('wheel', scrollHandler);
    return () => {
      window.removeEventListener('wheel', scrollHandler);
    };
  }, []);

  return wheel;
}
