import { StaticResumeComponent } from '@adelerium/components/AboutPage/StaticResume/styles';
import { StaticResumeProps } from '@adelerium/components/AboutPage/StaticResume/types';
import { useStaticResumeQueryData } from '@adelerium/components/AboutPage/StaticResume/useStaticResumeQueryData';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { BoldParagraphType, BoldTypeAsAnchor } from '@adelerium/styles/text';
import { FlexRowWrapper } from '@adelerium/styles/wrappers';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons/faGoogleDrive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import 'twin.macro';

const staticResumeTitleText = `Are you looking to hire? Here’s my resume.`;
const staticResumeLinkText = `View on Google Drive`;

export const StaticResume = ({ dimensions: { width, height } }: StaticResumeProps): ReactElement => {
  const { resumeLink } = useStaticResumeQueryData();

  return (
    <StaticResumeComponent width={width} height={height} tw="mb-2 md:mb-0 bg-offwhite p-4 lg:p-8">
      <BoldParagraphType
        color="text-charcoal"
        textAlign="text-left"
        wordBreak="break-normal"
        tw="mb-8 md:mb-0 md:mt-4 w-full text-2xl md:text-3xl lg:text-4xl"
      >
        {staticResumeTitleText}
      </BoldParagraphType>
      <FlexRowWrapper alignItems="items-center" justifyContent="justify-start" tw="w-full md:mb-4">
        <FontAwesomeIcon icon={faGoogleDrive} size="2x" tw="mr-4" />
        <BoldTypeAsAnchor
          href={resumeLink?.destination || websiteFullPath}
          label={resumeLink?.destination || websiteFullPath}
          color="text-charcoal"
          tw="flex-grow uppercase"
        >
          {staticResumeLinkText}
        </BoldTypeAsAnchor>
      </FlexRowWrapper>
    </StaticResumeComponent>
  );
};
