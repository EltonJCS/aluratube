import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      background-color: ${({ theme }) => theme.backgroundLevel2 || "#222222"};
      width: calc(100vw - 8px * 4);
      border-radius: 1rem;
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scrollbar-width: thin;
      scroll-snap-type: x mandatory;
      a {
        background-color: ${({ theme }) => theme.backgroundLevel1 || "#222222"};
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          margin: 0 4px;
          display: block;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
