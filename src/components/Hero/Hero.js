import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hi! I'm <br/> Sibtain Ahmed <br/> Qureshi
      </SectionTitle>
      <SectionText>
      I am a frontend developer with expertise in React, HTML, CSS, and basic JavaScript, complemented by strong problem-solving skills in DSA and Python.
      </SectionText> 
      <Button onClick={()=>window.location='https://publuu.com/flip-book/840755/1846248'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;