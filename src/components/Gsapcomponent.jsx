import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Gsapcomponent = () => {

  gsap.registerPlugin(useGSAP);

  const container = useRef();

  useGSAP(
      () => {
          // gsap code here...
          gsap.to('.box', { x: 360 }); // <-- automatically reverted
      },
      { scope: container }
  );

  return (
    <div>
      <h1>GSAP Component</h1>
      <div className="box" ref={container} />
    </div>
  )
}

export default Gsapcomponent;
