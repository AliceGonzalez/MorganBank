import React from 'react';
import '../styles/picturecollage.css';
import Womangroup from '../images/womangrouplaughing.jpg';
import Manbuying from '../images/buying.jpg';
import Transaction from '../images/transaction.jpg';
import Savinggirl from '../images/savinggirl.jpg';
import Familyhouse from '../images/housefamily.jpg';

const PictureCollage = () => {
  return (
    <section id="RTsbs-415">
      <div className="cs-container">
        <div className="cs-image-group">
          <div className="cs-image-stack">
            {' '}
            {/* Positioned relative to stack pictures */}
            <picture className="cs-picture cs-picture1">
              <source media="(max-width: 600px)" srcSet={Transaction} />
              <source media="(min-width: 601px)" srcSet={Transaction} />
              <img aria-hidden="true" loading="lazy" decoding="async" src={Transaction} alt="transaction scene" width="229" height="352" />
            </picture>
            <picture className="cs-picture cs-picture-new">
              <source media="(max-width: 600px)" srcSet={Savinggirl} />
              <source media="(min-width: 601px)" srcSet={Savinggirl} />
              <img aria-hidden="true" loading="lazy" decoding="async" src={Savinggirl} alt="saving girl scene" width="229" height="352" />
            </picture>
          </div>
          <picture className="cs-picture cs-picture2">
            <source media="(max-width: 600px)" srcSet={Familyhouse} />
            <source media="(min-width: 601px)" srcSet={Familyhouse} />
            <img aria-hidden="true" loading="lazy" decoding="async" src={Manbuying} alt="man buying scene" width="390" height="352" />
          </picture>
          <picture className="cs-picture cs-picture3">
            <source media="(max-width: 600px)" srcSet={Savinggirl} />
            <source media="(min-width: 601px)" srcSet={Savinggirl} />
            <img aria-hidden="true" loading="lazy" decoding="async" src={Womangroup} alt="woman group laughing" width="649" height="227" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default PictureCollage;
