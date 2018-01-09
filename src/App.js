import React, { Component } from 'react'
import { VoicePlayer, VoiceRecognition } from 'react-voice-components'
import logo from './prince.gif'
import './App.css'

class App extends Component {
  state = {
    results: "Alright, it's 1999 You say it, 1999 don't stop, don't stop, say it one more time! 2000 zero zero party over oops out of time So Tonight I'm gonna party like it's 1999!",
    asr_status: 'stopped'
  }

  onResultsChange (r) {
    this.setState({ results: r})
  }

  onASRStatusChange (s) {
    this.setState({ asr_status: s })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>1999</h1>
        </header>
        <br />
        <div>
          <NNNRecognizer
            resultsChange={(results) => this.onResultsChange(results)}
            statusChange={(status) => this.onASRStatusChange(status)}
          />
        </div>
        <br />
        <div>
          <code className='results'>{this.state.results}</code>
        </div>
        <div className='App-intro'>
          <br />
          <NNNSynth
            results={this.state.results}
            action='start'
          />
        </div>
        <br />
        <sub>
          {`ASR Status: ${this.state.asr_status}`}
          <br />
          {`SpeechSynthesis: ${window.speechSynthesis ? true : false}`}
          <br />
          {`SpeechRecognition: ${window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition ? true : false}`}
        </sub>
      </div>
    )
  }
}

class NNNRecognizer extends Component {
  state = {
    start: false,
    stop: false
  }

  onEnd = () => {
    this.setState({ start: false, stop: false })
    this.props.action('end')()
  }

  onResult = ({ intermTranscript, finalTranscript }) => {
    this.props.resultsChange(finalTranscript)
    this.props.statusChange('finished')
    this.setState({ start: false })
  }

  onStart = () => {
    this.setState({ start: true })
    this.props.statusChange('listening')
  }

render () {
  return (
    <div>
      <button
        onClick={this.onStart}>
        Talk
        </button>

        {this.state.start && (
        <VoiceRecognition
        onResult={this.onResult}
        continuous={true}
        lang="en-US"
        stop={this.state.stop}
        />
        )}
        </div>
  )
  }
}

class NNNSynth extends Component {
  state = {
    play: false,
    pause: false,
  }

  onEnd = () => {
    this.setState({ play: false })
  }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ play: true })}>Play</button>

        {this.state.play && (
           <VoicePlayer
             play
             pause={this.state.pause}
             text={this.props.results}
             onEnd={this.onEnd}
           />
        )}
      </div>
    )
  }
}

export default App
