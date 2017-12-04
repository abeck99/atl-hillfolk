import React from 'react'
import HeaderBackground from './img/header.jpg'
import UserGraph from './UserGraph'
import Timeline from './Timeline'

import {Nav, NavItem} from 'react-bootstrap'

import taglineText from './content/tagline.yaml'
import backgroundText from './content/background.yaml'

const headerTextColor = '#e7e1b1'
// const framingColor = '#323736'
const bodyBackgroundColor = '#372712'
const framingColor = bodyBackgroundColor
const seperaterColor = '#916953'
const featuredContentBackgroundColor = '#372712'
const bodyTextColor = '#B5AD89'

const userGraphHeight = '400px'

//document.body.style = 'background: #372712;';

// greens
//87A330
//A1C349

// lighter brown
//916953

// white
//dbd3d8

// blues
// 567287
// 6b8a8e

const styles = {
  framingBackground:{
    backgroundColor: framingColor
  },
  headerStyle: {
    width: "100%",
    height: "400px",
    background: "url(/src/img/header.jpg) no-repeat center bottom",
    backgroundSize: "cover",
  },
  bodyBackgroundStyle: {
    backgroundColor: bodyBackgroundColor,
    width: "100%",
    maxWidth: '700px',
  },
  row: {
    height: '300px',
    padding: '40px',
  },
  sideColumns: {
  //  width: '10%',
  //  padding: '0px',
  },
  middleColumn: {
    width: '90%',
    padding: '0px',
  },
  headerText: {
    fontFamily: 'Rubik One',
    fontSize: '3.5em',
    color: headerTextColor,
    textShadow: '0px 0px 40px #00000055',
  },
  timelineRow: {
    height: '50px',
    padding: '0px',
  },
  graphRow: {
    height: userGraphHeight,
    padding: '0px',
  },
  taglineContentRow: {
    padding: '50px',
    paddingTop: '0px',
  },
  contentRow: {
    padding: '50px',
    paddingTop: '10vw',
  },
  bodyText: {
    fontFamily: 'Garamond',
    fontSize: '1.2em',
    color: bodyTextColor,
    //letterSpacing: '2px',
    lineHeight: '1.5em',
  },
  overlayBox: {
    position: 'absolute',
    width: '100%',
    height: '156px',
    zIndex: '2',
    top: '0px',
    pointerEvents: 'none',
    background: 'linear-gradient(to right, rgba(55,39,18,1) 0%,rgba(55,39,18,0) 5%,rgba(55,39,18,0) 95%,rgba(55,39,18,1) 100%)',      //* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  },
  overlayBoxHeight: {
    position: 'absolute',
    width: '100%',
    height: '156px',
    zIndex: '3',
    top: '0px',
    pointerEvents: 'none',
    background: 'linear-gradient(to top, rgba(55,39,18,1) 0%,rgba(55,39,18,0) 5%,rgba(55,39,18,0) 95%,rgba(55,39,18,1) 100%)',      //* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  },
  backgroundTitleClipper: {
    position: 'absolute',
    overflow: 'hidden',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
  },
  backgroundContentText: {
    width: '100%',
    fontFamily: 'Rubik One',
    fontSize: '10vw',
    color: headerTextColor,
    opacity: '0.1',
    textAlgin: 'left',
    padding: '0px',
    margin: '-4vw -2vw',
    pointerEvents: 'none',
  },
  featuredSeperater: {
    width: '100%',
    height: '5px',
    backgroundColor: seperaterColor,
  },
  featuredBody: {
    backgroundColor: featuredContentBackgroundColor,
    width: "100%",
    margin: '0px',
    padding: '0px',
    maxWidth: 'none',
  },
  contentColumn: {
    width: '100%',
    padding: '0px',
  },
  navTabs: {
    borderBottom: 'none',
    border: 'none',
  },
  navTabItems: {
    border: 'none',
  },
}

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: '1',
    } 
  }

  handleSelect(key) {
    console.log(key)
    const newState = {}
    Object.assign(newState, this.state, {selectedTab: key})
    this.setState(newState)
  }

  renderSectionTitle(title) {
    return (
      <div style={styles.backgroundTitleClipper}>
        <div style={styles.backgroundContentText}>{title}</div>
      </div>
    )
  }

  renderSeperator() {
    return <div style={styles.featuredSeperater}/>
  }

  renderSectionContent(content, title, rowType) {
    return (
      <div>
        {this.renderSeperator()}
        {title ? this.renderSectionTitle(title) : null}
        <div className="container" style={styles.featuredBody}>
          <div className="row" style={rowType}>
            <div className="col align-self-center" style={styles.contentColumn}>
              {content}
            </div>
          </div>
        </div>
      </div>
    )
  }

  relationshipsSection() {
    return (
      <div>
        {this.renderSectionContent(
          <UserGraph height={userGraphHeight}/>,
          "Characters",
          styles.graphRow
          )}

        {this.renderSectionContent(
          <p>Nothing here for now</p>,
          null,
          styles.graphRow
          )}
      </div>
    )
  }

  timelineSection() {
    return this.renderSectionContent(
      <Timeline/>,
      "Timeline",
      styles.timelineRow
    )
  }

  backgroundTextContent() {
    return (
        <div className="container" style={styles.bodyBackgroundStyle}>
          <div className="row" style={styles.contentRow}>
            <div className="col text-justified" style={styles.middleColumn}>
              <div style={styles.bodyText}>
                {backgroundText.map((background) => {
                  return (
                    <p className="text-justify">
                      {background.text}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
    )
  }

  backgroundSection() {
    return this.renderSectionContent(
      this.backgroundTextContent(),
      "Background",
      styles.graphRow
      )
  }

  render() {
    const handleSelect = this.handleSelect.bind(this)
    const backgroundSection = this.backgroundSection.bind(this)
    const relationshipsSection = this.relationshipsSection.bind(this)
    const timelineSection = this.timelineSection.bind(this)
    const selectedTab = this.state.selectedTab

    return (
      <div style={styles.framingBackground}>
        <div className="container" style={styles.headerStyle}>
          <div className="row" style={styles.row}>
            <div className="col align-self-center" style={styles.middleColumn}>
              <p className="text-center" style={styles.headerText}>Raiders of Cragmaw Peak</p>
            </div>
          </div>
        </div>

        {taglineText.map((tagline) => {
          return (
            <div className="container" style={styles.bodyBackgroundStyle}>
              <div className="row" style={styles.taglineContentRow}>
                <div className="col" style={styles.middleColumn}>
                  <div style={styles.bodyText}>
                    <p className="text-justify">
                      { tagline.text }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )})
        }

        <div className="container" style={styles.bodyBackgroundStyle}>
          <Nav bsStyle="tabs" justified activeKey={selectedTab} onSelect={handleSelect} style={styles.navTabs}>
            <NavItem eventKey="1" style={styles.navTabItems}>Background</NavItem>
            <NavItem eventKey="2" style={styles.navTabItems}>Characters</NavItem>
            <NavItem eventKey="3" style={styles.navTabItems}>Timeline</NavItem>
            <NavItem eventKey="4" style={styles.navTabItems}>Episodes</NavItem>
          </Nav>
        </div>


        { selectedTab == 1 ? backgroundSection() : null }
        { selectedTab == 2 ? relationshipsSection() : null }
        { selectedTab == 3 ? timelineSection() : null }
      </div>
    )
  }
}


          // <div style={styles.overlayBox}/>
          // <div style={styles.overlayBoxHeight}/>
