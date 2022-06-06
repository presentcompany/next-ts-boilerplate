import React from 'react';
import { Flex } from '@chakra-ui/layout';
import Slider from 'rc-slider';
import styled from '@emotion/styled';
import { IconMute, IconVolume } from './Icons';

type TAudioPlayerVolumeControlProps = {
  volume: number;
  handleChangeVolume: (value: number) => void;
  handleMuteVolume: (e: React.MouseEvent<HTMLButtonElement>) => void;
  vertical?: boolean;
  isMuted: boolean;
};

export function AudioPlayerVolumeControl({
  volume,
  isMuted,
  handleChangeVolume,
  handleMuteVolume,
  vertical = false
}: TAudioPlayerVolumeControlProps) {
  const volumeValue = !isMuted ? volume * 100 : 0;

  return (
    <AudioPlayerVolumeControlContainer>
      <VolumeSlider vertical={vertical}>
        <Slider
          vertical={vertical}
          value={volumeValue}
          onChange={handleChangeVolume as (value: number | number[]) => void}
        />

        <VolumeMuteButton onClick={handleMuteVolume}>
          {!isMuted ? <IconVolume /> : <IconMute />}
        </VolumeMuteButton>
      </VolumeSlider>
    </AudioPlayerVolumeControlContainer>
  );
}

const AudioPlayerVolumeControlContainer = styled(Flex)`
  justify-content: center;
  flex: 1 1 32px;
  padding: 7px 13px;
  background: #f2f2f2;
  height: 100%;
  align-items: center;
  display: none;

  @media (min-width: 480px) {
    display: flex;
  }
`;

const VolumeSlider = styled.div<
  Pick<TAudioPlayerVolumeControlProps, 'vertical'>
>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};

  .rc-slider {
    position: relative;
    padding: 5px 0;
    border-radius: 6px;
    touch-action: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    margin-bottom: 0.5em;
    width: 80px;
    height: 10px;
    order: 2;
    margin-left: 0.5em;

    &.rc-slider-vertical {
      order: initial;
      margin-left: 0;
      width: 10px;
      height: 30px;
    }
  }

  .rc-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: #e9e9e9;
    height: 4px;
    border-radius: 6px;
  }

  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 4px;
    border-radius: 6px;
    background-color: #757575;
  }

  .rc-slider-handle {
    position: absolute;
    width: 8px;
    height: 8px;
    cursor: grab;
    border-radius: 50%;
    background-color: black;
    touch-action: pan-x;

    ${({ vertical }) => `
      top: ${vertical ? 'auto' : '3px'};
    `}
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

  .rc-slider-dot {
    position: absolute;
    bottom: -2px;
    margin-left: -4px;
    width: 8px;
    height: 8px;
    border: 2px solid #e9e9e9;
    background-color: #fff;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
  }

  .rc-slider-dot-active {
    border-color: tint(#2db7f5, 50%);
  }

  .rc-slider-dot-reverse {
    margin-right: -4px;
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

  .rc-slider-vertical {
    width: 10px;
    height: 30px;
    padding: 0 5px;
  }

  .rc-slider-vertical .rc-slider-rail {
    height: 100%;
    width: 4px;
  }

  .rc-slider-vertical .rc-slider-track {
    left: 5px;
    bottom: 0;
    width: 4px;
  }

  .rc-slider-vertical .rc-slider-handle {
    margin-left: -2px;
    touch-action: pan-y;
  }

  .rc-slider-vertical .rc-slider-mark {
    top: 0;
    left: 18px;
    height: 100%;
  }

  .rc-slider-vertical .rc-slider-step {
    height: 100%;
    width: 4px;
  }

  .rc-slider-vertical .rc-slider-dot {
    left: 2px;
    margin-bottom: -4px;
  }

  .rc-slider-vertical .rc-slider-dot:first-child {
    margin-bottom: -4px;
  }

  .rc-slider-vertical .rc-slider-dot:last-child {
    margin-bottom: -4px;
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

const VolumeMuteButton = styled.button`
  display: block;
`;
