import React, { FunctionComponent } from 'react';
import rocket from 'assets/img/launch-home.png';
import rocket2x from 'assets/img/launch-home@2x.png';
import rocket3x from 'assets/img/launch-home@3x.png';

type AsideProps = {};

export const Aside: FunctionComponent<AsideProps> = () => {
  return (
    <aside>
      <img
        srcSet={`${rocket},
        ${rocket2x} 2x,
        ${rocket3x} 3x`}
        src={rocket}
        alt="Rocket Launch"
      ></img>
    </aside>
  );
};
