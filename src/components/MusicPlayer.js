import React from 'react';
import Hearth from "../songs/Hearth.mp3";
import Home from "../songs/Home.mp3";
import Akna from "../songs/Welcome to Akna.mp3";
import dna1 from "../images/albums/dna1.png"

function getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
  }
  
  class MusicPlayer extends React.Component {
    state = {
      selectedTrack: null,
      player: "stopped",
      currentTime: null,
      duration: null
    };
  
    componentDidMount() {
      this.player.addEventListener("timeupdate", (e) => {
        this.setState({
          currentTime: e.target.currentTime,
          duration: e.target.duration
        });
      });
    }
  
    componentWillUnmount() {
      this.player.removeEventListener("timeupdate", () => {});
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (this.state.selectedTrack !== prevState.selectedTrack) {
        let track;
        switch (this.state.selectedTrack) {
          case "Hearth - Everyone's favorite tavern":
            track = Hearth;
            break;
          case "Home - Sounds just like a good one!":
            track = Home;
            break;
          case "Welcome to Akna - Smells like ozone":
            track = Akna;
            break;
          default:
            break;
        }
        if (track) {
          this.player.src = track;
          this.player.play();
          this.setState({ player: "playing", duration: this.player.duration });
        }
      }
      if (this.state.player !== prevState.player) {
        if (this.state.player === "paused") {
          this.player.pause();
        } else if (this.state.player === "stopped") {
          this.player.pause();
          this.player.currentTime = 0;
          this.setState({ selectedTrack: null });
        } else if (
          this.state.player === "playing" &&
          prevState.player === "paused"
        ) {
          this.player.play();
        }
      }
    }
  
    render() {
      const list = [
        { id: 1, title: "Hearth - Everyone's favorite tavern" },
        { id: 2, title: "Home - Sounds just like a good one!" },
        { id: 3, title: "Welcome to Akna - Smells like ozone" }
      ].map((item) => {
        return (
          <li
            className="musicPlayer__List-item"
            key={item.id}
            onClick={() => this.setState({ selectedTrack: item.title })}
          >
            {item.title}
          </li>
        );
      });
  
      const currentTime = getTime(this.state.currentTime);
      const duration = getTime(this.state.duration);

      return (
        <div className="musicPlayer">
            <h1 className="musicPlayer__Header">
            Sampler
            <div className="musicPlayer__Buttons">
                {this.state.player === "paused" && (
                <button
                    className="musicPlayer__Buttons-Play"
                    onClick={() => this.setState({ player: "playing" })}
                >
                    Play
                </button>
                )}
                {this.state.player === "playing" && (
                <button
                    className="musicPlayer__Buttons-Pause"
                    onClick={() => this.setState({ player: "paused" })}
                >
                    Pause
                </button>
                )}
                {this.state.player === "playing" ||
                this.state.player === "paused" ? (
                <button
                    className="musicPlayer__Buttons-Stop"
                    onClick={() => this.setState({ player: "stopped" })}
                >
                    Stop
                </button>
                ) : (
                ""
                )}
            </div>
            <div>
            {this.state.player === "playing" ||
            this.state.player === "paused" ? (
                <div className="musicPlayer__Timer">
                {currentTime} / {duration}
                </div>
            ) : (
                ""
            )}
            </div>
            </h1>
            <div className="musicPlayer__content">
            <ul className="musicPlayer__List">{list}</ul>
            {this.state.player === "playing" ||
            this.state.player === "paused" ? (
                <div className="musicPlayer__Timer">
                </div>
            ) : (
                ""
            )}
            </div>
            <a className="musicPlayer_album"><img src={dna1} alt="album cover" width='150px' height='150px'/></a> 
            <audio ref={(ref) => (this.player = ref)} />
        </div>
      );
    }
  }

  export default MusicPlayer