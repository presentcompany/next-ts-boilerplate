import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@chakra-ui/layout';
import { IconNextTrack, IconPrevTrack, IconPlay, IconPause } from './Icons';

type TAudioPlayerPlaybackControlsProps = {
  handlePausePlay: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isPlaying: boolean;
  isSingleAudioTrack: boolean;
};

type TPausePlayButtonProps = Pick<
  TAudioPlayerPlaybackControlsProps,
  'isPlaying'
>;

export function AudioPlayerPlaybackControls({
  handlePausePlay,
  isPlaying,
  isSingleAudioTrack
}: TAudioPlayerPlaybackControlsProps) {
  return (
    <PlaybackControls isSingleAudioTrack={isSingleAudioTrack}>
      {!isSingleAudioTrack && (
        <PrevButton>
          <IconPrevTrack />
        </PrevButton>
      )}

      <PausePlayButton isPlaying={isPlaying} onClick={handlePausePlay}>
        {isPlaying ? <IconPause /> : <IconPlay />}
      </PausePlayButton>

      {!isSingleAudioTrack && (
        <NextButton>
          <IconNextTrack />
        </NextButton>
      )}
    </PlaybackControls>
  );
}

const PlaybackControls = styled(Grid)`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-right: 1px solid white;
  background: #f2f2f2;
  grid-template-columns: ${({ isSingleAudioTrack }) =>
    isSingleAudioTrack ? '1fr' : '1fr 2fr 1fr'};
  max-width: ${({ isSingleAudioTrack }) =>
    isSingleAudioTrack ? '64px' : '112px'};
`;

const PrevButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const PausePlayButton = styled.button<TPausePlayButtonProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 32px;
  height: 32px;
  background: #232bbe;
  border-radius: 50%;

  > svg {
    position: relative;
    z-index: 1;
  }
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
