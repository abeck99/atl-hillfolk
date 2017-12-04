import React from 'react'
import timelineText from './content/timeline.yaml'

export default class Timeline extends React.Component {
  constructor(props) {
    super(props)
  }
year
quote
attribution
events
  render() {
    return (
      <section id="conference-timeline">
      <div className="timeline-start">18 Years Ago</div>
      <div className="conference-center-line"></div>
      <div className="conference-timeline-content">
        {
          timelineText.map((timelineItem) => {
            return (
              <div className="timeline-article">
                {
                  timelineItem.quote ?
                    <div className="content-left-container">
                      <div className="content-left">
                        <p>{timelineItem.quote}</p>
                      </div>
                      <span className="timeline-author">{timelineItem.attribution}</span>
                    </div>
                  : null
                }
                <div className="content-right-container">
                  <div className="content-right">
                    {
                      timelineItem.events.map((event) => {
                        return <p>{event}</p>
                      })
                    }
                  </div>
                </div>
                <div className="meta-date">
                  <span className="date">{timelineItem.year}</span>
                </div>
              </div>
              )
          })
        }
      </div>
      <div className="timeline-end">NOW</div>
    </section>
    )
  }
}
