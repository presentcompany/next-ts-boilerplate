import React from 'react';
import { Flex } from '@chakra-ui/layout';
import Slider from 'rc-slider';
import styled from '@emotion/styled';

type TAudioPlayerTrackDetailsProps = {
  title: string;
  elapsedTime: string;
  played: number;
  handlePlaybackScrubChange: (value: number) => void;
  handlePlaybackScrubAfterChange: () => void;
};

export function AudioPlayerTrackDetails({
  title,
  elapsedTime,
  played,
  handlePlaybackScrubChange,
  handlePlaybackScrubAfterChange
}: TAudioPlayerTrackDetailsProps) {
  return (
    <AudioTrackDetails>
      <AudioTrackDetailsInnerContainer>
        <AudioTrackTitle>{title}</AudioTrackTitle>
        <AudioTrackElapsedTime>{elapsedTime}</AudioTrackElapsedTime>
      </AudioTrackDetailsInnerContainer>

      <AudioPlayerScrubberContainer>
        <AudioPlayerScrubber
          played={played}
          onSliderChange={handlePlaybackScrubChange}
          onSliderAfterChange={handlePlaybackScrubAfterChange}
        />
      </AudioPlayerScrubberContainer>
    </AudioTrackDetails>
  );
}

type TAudioPlayerScrubberProps = {
  played: number;
  onSliderChange: (value: number) => void;
  onSliderAfterChange: (value: number) => void;
};

function AudioPlayerScrubber({
  played,
  onSliderChange,
  onSliderAfterChange
}: TAudioPlayerScrubberProps): React.ReactElement {
  return (
    <AudioPlayerScrubberInnerContainer>
      <Slider
        value={played * 100}
        onChange={onSliderChange}
        onAfterChange={onSliderAfterChange}
      />
    </AudioPlayerScrubberInnerContainer>
  );
}

const AudioTrackDetails = styled(Flex)`
  flex-direction: column;
  align-items: center;
  flex: 1 1 339px;
  height: 100%;
  background: #f2f2f2;
  border-right: 1px solid white;
`;

const AudioTrackDetailsInnerContainer = styled(Flex)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

const AudioTrackTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

const AudioTrackElapsedTime = styled.div`
  font-size: 12px;
`;

const AudioPlayerScrubberContainer = styled.div`
  position: relative;
  top: -5px;
  width: 100%;
  height: 3px;
`;

const AudioPlayerScrubberInnerContainer = styled.div`
  .rc-slider {
    position: relative;
    height: 14px;
    width: 100%;
    border-radius: 6px;
    touch-action: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .rc-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: #e9e9e9;
    height: 8px;
    cursor: pointer;
  }

  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 8px;
    background-color: #232bbe;
    cursor: pointer;
  }

  .rc-slider-handle {
    position: absolute;
    width: 14px;
    height: 14px;
    margin-top: -5px;
    cursor: grab;
    touch-action: pan-x;
  }

  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: tint(#2db7f5, 20%);
    box-shadow: 0 0 0 5px tint(#2db7f5, 50%);
  }

  .rc-slider-handle:focus {
    outline: none;
  }

  .rc-slider-handle-click-focused:focus {
    border-color: tint(#2db7f5, 50%);
    box-shadow: unset;
  }

  .rc-slider-handle:hover {
    border-color: tint(#2db7f5, 20%);
  }

  .rc-slider-handle:active {
    border-color: tint(#2db7f5, 20%);
    box-shadow: 0 0 5px tint(#2db7f5, 20%);
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  .rc-slider-mark {
    position: absolute;
    top: 18px;
    left: 0;
    width: 100%;
    font-size: 12px;
  }

  .rc-slider-mark-text {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: #999;
  }

  .rc-slider-mark-text-active {
    color: #666;
  }

  .rc-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }

  .rc-slider-disabled {
    background-color: #e9e9e9;
  }

  .rc-slider-disabled .rc-slider-track {
    background-color: #ccc;
  }

  .rc-slider-disabled .rc-slider-handle,
  .rc-slider-disabled .rc-slider-dot {
    border-color: #ccc;
    box-shadow: none;
    background-color: #fff;
    cursor: not-allowed;
  }

  .rc-slider-disabled .rc-slider-mark-text,
  .rc-slider-disabled .rc-slider-dot {
    cursor: not-allowed !important;
  }

  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
  }

  .rc-slider-tooltip-zoom-down-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
  }

  .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
  .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
    animation-name: rcSliderTooltipZoomDownIn;
    animation-play-state: running;
  }

  .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
    animation-name: rcSliderTooltipZoomDownOut;
    animation-play-state: running;
  }

  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    transform: scale(0, 0);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }

  .rc-slider-tooltip-zoom-down-leave {
    animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
  }

  @keyframes rcSliderTooltipZoomDownIn {
    0% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
    100% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
  }

  @keyframes rcSliderTooltipZoomDownOut {
    0% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
  }

  .rc-slider-tooltip {
    position: absolute;
    left: -9999px;
    top: -9999px;
    visibility: visible;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .rc-slider-tooltip * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .rc-slider-tooltip-hidden {
    display: none;
  }

  .rc-slider-tooltip-placement-top {
    padding: 4px 0 8px 0;
  }

  .rc-slider-tooltip-inner {
    padding: 6px 2px;
    min-width: 24px;
    height: 24px;
    font-size: 12px;
    line-height: 1;
    color: #fff;
    text-align: center;
    text-decoration: none;
    background-color: tint(#666, 4%);
    border-radius: 6px;
    box-shadow: 0 0 4px #d9d9d9;
  }

  .rc-slider-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }

  .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    bottom: 4px;
    left: 50%;
    margin-left: -4px;
    border-width: 4px 4px 0;
    border-top-color: tint(#666, 4%);
  }
`;
