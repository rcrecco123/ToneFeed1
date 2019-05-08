import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class TrackShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            track: {},
            tracks: [],
            on: 0,
            playing: false
        }
        debugger
        this.playClick = this.playClick.bind(this);
        
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.id);
        debugger
        this.setState({on: 1})

        this.setState({ ws: WaveSurfer.create({
            container: '#waveform',
            waveColor: 'rgb(220,220,220)',
            progressColor: '#f50',
            barGap: 0,
            barWidth: 2,
            hideScrollbar: true,
            cursorColor: 'transparent'
        })
        })
    } 

    toggleClass() {
        const oldStyle = document.getElementById('test').className;
        const newClassName = oldStyle === 'play-button' ? 'pause-button' : 'play-button'
        document.getElementById('test').className = newClassName
    }

    playClick() {
        this.state.ws.playPause();
        this.toggleClass();
    }

    render() {

        

        //handles this.props.track on first render (track = null if track === undefined)
        if (this.props.track) {
            var track = Object.values(this.props.track);
            var trackUser = this.props.track.user.username;
            var trackTitle = this.props.track.title;
            var trackFileUrl = this.props.track.fileUrl;
            var trackImg = this.props.track.imageUrl
        } else {
            var track = null;
            var trackUser = null;
            var trackTitle = null;
            var trackFileUrl = null;
            var trackImg = null;
        }

        trackFileUrl ? this.state.ws.load(trackFileUrl) : null;
        
        debugger
        return (
            <div id="main-show" className="main-show">
                <div className="track-show-info">

                    <div className="play-button-outer">

                        <div id="test" onClick={this.playClick} className="play-button"></div>


                    </div>

                    <div>

                        <div>
                            <br/>
                            <div className="track-show-user">
                                {trackUser}
                            </div>
                            <br/>
                            <div className="track-show-title">
                                {trackTitle}
                            </div>
                        </div>

                    </div>
                    
                                    <div className="waveform-show" id="waveform"></div>
                </div>    

                                <img className="image-show" src={trackImg} alt=""/>    
            </div>
        )
    }

}

export default TrackShow;