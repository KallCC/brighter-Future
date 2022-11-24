import React from 'react';
import './brand.css';
import cisco from '../../assets/cisco.png';
import ibm from '../../assets/ibm.png';
import salesforce from '../../assets/salesforce.png';
import intel from '../../assets/intel.png';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={cisco} alt='cisco'/>
    </div>
    <div>
      <img src={ibm} alt='ibm'/>
    </div>
    <div>
      <img src={salesforce} alt='salesforce'/>
    </div>
    <div>
      <img src={intel} alt='intel'/>
    </div>

  </div>
);

export default Brand;