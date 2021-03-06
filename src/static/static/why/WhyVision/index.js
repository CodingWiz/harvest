/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Flex, Box } from 'atomic'
import {BackgroundImage, BackgroundGradient, Container, Heading, Paragraph, Link, Section, Shape} from 'atomic'


export default [
  {
    styled: {
      bg: 'orange',
    },
    children: [
     <Container w={[0.75]}>
        <Heading f={[3]} level={[5]} ts={[0]}>Simple Approach</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Container>,
      <BackgroundImage image={assets.images.clown} z={1} o={[0.5]} />
    ]
  },
  {
    styled: {
      bg: 'turquoise',
    },
    children: [
     <Container w={[0.75]}>
        <Heading f={[3]} level={[5]} ts={[0]}>Huge Impact</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
        <BackgroundImage image={assets.images.schoolPrograms} z={1} o={[0.5]} />
      </Container>,
    ]
  },
  {
    styled: {
      bg: 'green',
    },
    children: [
     <Container w={[0.75]}>
        <Heading f={[3]} level={[5]} ts={[0]}>Reliable Partners</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Container>,
      <BackgroundImage image={assets.images.cmcm} z={1} o={[0.5]} />
    ]
  },
]