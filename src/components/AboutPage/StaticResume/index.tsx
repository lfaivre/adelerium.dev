import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons/faGoogleDrive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import 'twin.macro';
import { TileDimensions } from '../../../shared/hooks/useAllTileDimensions';
import { BoldParagraphType, BoldTypeAsAnchor } from '../../../shared/styles/text';
import { FlexRowWrapper } from '../../../shared/styles/wrappers';
import { StaticResumeComponent } from './styles';

type StaticResumeProps = { dimensions: TileDimensions };

const StaticResumeTitleText = `Are you looking to hire? Here’s my resume.`;
const StaticResumeLinkText = `View on Google Drive`;

// @todo Source link from Contentful
const resumeLink = `https://drive.google.com/file/d/19Gdz-dwWnlBov73sDIBnr68bf04NvnIL/view?usp=sharing`;

export const StaticResume = ({ dimensions: { width, height } }: StaticResumeProps): ReactElement => {
  return (
    <StaticResumeComponent width={width} height={height} tw="mb-2 md:mb-0 bg-offwhite p-4 lg:p-8">
      <BoldParagraphType
        color="text-charcoal"
        textAlign="text-left"
        wordBreak="break-normal"
        tw="mb-8 md:mb-0 md:mt-4 w-full text-2xl md:text-3xl lg:text-4xl"
      >
        {StaticResumeTitleText}
      </BoldParagraphType>
      <FlexRowWrapper alignItems="items-center" justifyContent="justify-start" tw="w-full md:mb-4">
        <FontAwesomeIcon icon={faGoogleDrive} size="2x" tw="mr-4" />
        <BoldTypeAsAnchor href={resumeLink} label={resumeLink} color="text-charcoal" tw="flex-grow uppercase">
          {StaticResumeLinkText}
        </BoldTypeAsAnchor>
      </FlexRowWrapper>
    </StaticResumeComponent>
  );
};
