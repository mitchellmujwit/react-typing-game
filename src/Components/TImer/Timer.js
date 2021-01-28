import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {
  TimerDisplay,
  TimerWrapper,
  TimerValue
} from './Timer.elements'

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <TimerDisplay>WPM: </TimerDisplay>
  }

  return (
    <TimerDisplay>
      <TimerValue>{remainingTime}</TimerValue>
    </TimerDisplay>
  );
};

const Timer = () => {
  
  return (
    <TimerDisplay>
      <TimerWrapper>
        <CountdownCircleTimer
          isPlaying={false}
          duration={30}
          size={280}
          trailColor={"#222831"}
          colors={[
            ["#1b70b1", 0.70],
            ["#71b2e5", 0.20]
          ]} onComplete={() => [false]}>
          {renderTime}
        </CountdownCircleTimer>
      </TimerWrapper>
    </TimerDisplay>
  );
}

export default Timer
