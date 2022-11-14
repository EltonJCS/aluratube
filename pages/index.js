import React from "react";
import styled from "styled-components";

import config from "../config.json";
import { StyledTimeline } from "../src/components/Timeline";

import Menu from "../src/components/Menu/Index";

function HomePage() {
  const [filterValue, setFilterValue] = React.useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
        <Header />
        <Timeline searchValue={filterValue} playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  a {
    color: inherit;
    &:hover {
      filter: drop-shadow(0 0 4px #f00) saturate(250%);
      opacity: 1;
    }
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    width: 100%;
    padding: 16px 0 16px 16px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  @media (max-width: 600px) {
    text-align: center;
    .user-info {
      display: inline;
    }
  }
`;
const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({ banner }) => banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 14rem;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner banner={config.banner} />
      <a href="https://www.github.com/eltonjcs" target="_blank">
        <section className="user-info">
          <img src={`https://github.com/${config.github}.png`} />
          <div>
            <h2>{config.name}</h2>
            <p>{config.description}</p>
          </div>
        </section>
      </a>
    </StyledHeader>
  );
}

function Timeline({ searchValue, playlists }) {
  const playlistNames = Object.keys(playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();

                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
