import React, { LegacyRef } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/layout';

import { AudioPlayerPlaybackControls } from './AudioPlayerPlaybackControls';
import { AudioPlayerTrackDetails } from './AudioPlayerTrackDetails';
import { AudioPlayerVolumeControl } from './AudioPlayerVolumeControl';

type TAudioPlayerProps = {
  m3u8_url?: string;
  title?: string;
  playbookTitle: string;
};

type TReactPlayerPlaybackState = {
  playedSeconds: number;
  played: number;
  loadedSeconds: number;
  loaded: number;
};

export function AudioPlayer({
  title = 'Listen To This Podcast',
  m3u8_url
}: TAudioPlayerProps): React.ReactElement {
  const playerRef = React.useRef<ReactPlayerProps>();

  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  const [volume, setVolume] = React.useState<number>(0.7);
  const [played, setPlayed] = React.useState<number>(0);
  const [isSeeking, setIsSeeking] = React.useState<boolean>(false);

  const currentVolume = isMuted ? 0 : volume;

  const secondsToHMS = (value: number): string => {
    const h = Math.floor(value / 3600)
      .toString()
      .padStart(2, '0');

    const m = Math.floor((value % 3600) / 60)
      .toString()
      .padStart(2, '0');

    const s = Math.floor(value % 60)
      .toString()
      .padStart(2, '0');

    return `${h}:${m}:${s}`;
  };

  const currentTime = playerRef?.current?.getCurrentTime() || 0;
  const duration = playerRef?.current?.getDuration() || 0;

  const totalDuration = secondsToHMS(duration);
  const elapsedTime = secondsToHMS(currentTime);

  const isSingleAudioTrack = true;

  const handlePausePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsPlaying(!isPlaying);
  };

  const handleMuteVolume = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleChangeVolume = (value: number) => {
    const volumeValue = value / 100;

    setVolume(volumeValue);
    setIsMuted(volumeValue === 0);
  };

  const handlePlayProgress = (state: TReactPlayerPlaybackState) => {
    if (!isSeeking && isPlaying) {
      setPlayed(state?.played);
    }
  };

  const handlePlaybackScrubChange = (value: number) => {
    const playedValue = value / 100;
    setIsSeeking(true);
    setPlayed(playedValue);
  };

  const handlePlaybackScrubAfterChange = () => {
    setIsSeeking(false);
    playerRef?.current?.seekTo(played, 'fraction');
  };

  return (
    <AudioPlayerContainer>
      <ReactPlayer
        ref={playerRef as LegacyRef<ReactPlayer> | undefined}
        url={m3u8_url}
        height={'64px'}
        controls={false}
        playing={isPlaying}
        volume={currentVolume}
        onProgress={handlePlayProgress}
        config={{
          file: {
            attributes: {
              src: m3u8_url
            },
            forceAudio: true
          }
        }}
      />

      <AudioPlayerInnerContainer>
        <AudioPlayerPlaybackControls
          handlePausePlay={handlePausePlay}
          isPlaying={isPlaying}
          isSingleAudioTrack={isSingleAudioTrack}
        />

        <AudioPlayerTrackDetails
          title={title}
          elapsedTime={`${elapsedTime} / ${totalDuration}`}
          played={played}
          handlePlaybackScrubChange={handlePlaybackScrubChange}
          handlePlaybackScrubAfterChange={handlePlaybackScrubAfterChange}
        />

        <AudioPlayerVolumeControl
          volume={volume}
          isMuted={isMuted}
          handleChangeVolume={handleChangeVolume}
          handleMuteVolume={handleMuteVolume}
        />
      </AudioPlayerInnerContainer>
    </AudioPlayerContainer>
  );
}

const AudioPlayerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 67px;
  border-top: 1px solid white;
`;

const AudioPlayerInnerContainer = styled(Flex)`
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
