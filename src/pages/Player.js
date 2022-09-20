import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
 function Player() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <YouTube
        // videoId={trailerUrl} opts={opts}
        //   autoPlay
        //   loop
        //   controls
        //   muted
        />
      </div>
    </Container>
  );
}
export default Player;
const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
  YouTube{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
