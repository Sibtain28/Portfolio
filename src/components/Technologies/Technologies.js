import React from 'react';
import TechnologiesContent from './index';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I'm skilled at crafting clean, user-friendly UIs and bringing them to life using React. I enjoy building responsive, interactive websites with great user experiences.
    </SectionText>

    <TechnologiesContent />
  </Section>
);

export default Technologies;
