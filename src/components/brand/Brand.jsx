import React from 'react';
import './brand.css';
import cisco from '../../assets/cisco.png';
import ibm from '../../assets/ibm.png';
import salesforce from '../../assets/salesforce.png';
import intel from '../../assets/intel.png';

const Brand = () => (
  <section aria-label="brand" className="gpt3__brand section__padding">
    <div>
      <img width={150}height={100} src={cisco} alt='cisco'/>
    </div>
    <div>
      <img width={150}height={100} src={ibm} alt='ibm'/>
    </div>
    <div>
      <img width={150}height={100} src={salesforce} alt='salesforce'/>
    </div>
    <picture>
      <img width={150}height={100}src={intel} alt='intel'/>
    </picture>

  </section>
);

export default Brand;