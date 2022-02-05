import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>
      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id} >
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id} opinion={true}>
              <OpinionStory  {...story} />
            </VerticalStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp}{
    grid-template-areas: 
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
    gap: 48px 0;
  }
  @media ${QUERIES.laptopAndUp}{
    grid-template-columns: 510px 410px 1fr;
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    gap: 0;
  }
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-child){
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  @media ${QUERIES.tabletOnly}{
    &:not(:last-child){
    border-bottom: ${({opinion}) => opinion && 'none'}; 
    padding-bottom: ${({opinion}) => opinion && '0'};
    margin-bottom: ${({opinion}) => opinion && '0'};
  }
  }
  
`

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.laptopAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly}{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    justify-content: center;
    gap: 32px;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;

`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp}{
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
    margin-top: 16px;
  }
`;

export default MainStoryGrid;
