// 'use client'
// import { useState, useEffect, useRef } from 'react';

// export default function HeadlineSection() {

// const useOnScreen = (ref: unknown, rootMargin = '0px') => {
//   const [isOnScreen, setIsOnScreen] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsOnScreen(entry.isIntersecting);
//       },
//       { rootMargin }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
        
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref, rootMargin]);

//   return isOnScreen;
// };
//   const ref = useRef();
//   const isVisible = useOnScreen(ref);
//     return (
//       <div>
//       <div style={{ height: '100vh' }}>Scroll down to see the element</div>
//       <div ref={ref} style={{ height: '100px', backgroundColor: 'tomato' }}>
//         {isVisible ? 'I am visible!' : 'Scroll down to see me'}
//       </div>
//       <div style={{ height: '100vh' }}>More content</div>
//     </div>
//     );
//   }
  