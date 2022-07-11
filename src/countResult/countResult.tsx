import './countResult.scss'
import { useState } from 'react'
import CountUp from 'react-countup'
import { CSSTransition } from 'react-transition-group'

const CountResult = () => {
  const easingFn = (t: number, b: number, c: number, d: number) => {
    return t === d ? b + c : c * (-Math.pow(2.1, (-10 * t) / d) + 1) + b // custom easeOutExpo
  }

  const [INPROP_CONTENTLOGO] = useState(true)
  const [INPROP_METRICSCONTAINER] = useState(true)
  const [INPROP_AWARDSCONTAINER] = useState(true)

  return (
    <div className="countResult">
      <div className="contentContainer">
        <CSSTransition
          in={INPROP_CONTENTLOGO}
          timeout={700}
          classNames="fade"
          appear
          unmountOnExit
        >
          <div className="ContentLogo-0 ContentLogo-cont">2019년 2월 기준</div>
        </CSSTransition>
        <CSSTransition
          in={INPROP_METRICSCONTAINER}
          timeout={700 + 100}
          classNames="fade"
          appear
          unmountOnExit
        >
          <div className="MetricsContainer-0 MetricsContainer-cont">
            <div className="MetricItem-0 MetricItem-cont">
              <strong>
                <span>
                  <CountUp
                    start={0}
                    end={700}
                    duration={2}
                    delay={0}
                    useEasing
                    easingFn={easingFn}
                  />
                </span>
                만 명
              </strong>
              의 여행자
            </div>
            <div className="MetricItem-0 MetricItem-cont">
              <strong>
                <span>
                  <CountUp
                    start={0}
                    end={100}
                    duration={2}
                    delay={0}
                    useEasing
                    easingFn={easingFn}
                  />
                </span>
                만 개
              </strong>
              의 여행 리뷰
            </div>
            <div className="MetricItem-0 MetricItem-cont">
              <strong>
                <span>
                  <CountUp
                    start={0}
                    end={470}
                    duration={2}
                    delay={0}
                    useEasing
                    easingFn={easingFn}
                  />
                </span>
                만 개
              </strong>
              의 여행 일정
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={INPROP_AWARDSCONTAINER}
          timeout={700 + 100 + 100}
          classNames="fade"
          appear
          unmountOnExit
        >
          <div className="AwardsContainer-0">
            <div className="AwardItem-0">
              2018 구글 플레이스토어
              <br className="BR_0" />
              올해의 앱 최우수상 수상
            </div>
            <div className="AwardItem-1">
              2018 애플 앱스토어
              <br className="BR_1" />
              오늘의 여행앱 선정
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}

export default CountResult
