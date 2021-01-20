import React from "react"
import { css } from "@emotion/react"

export default ({children}) => (
  <ul
    css={css`
      margin: 0 auto;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 5%;
      padding: 0;

      @media (max-width: 460px) {
        grid-template-columns: var(--colsNum-1);
      }
      @media (min-width: 460px) and (max-width: 720px) {
        grid-template-columns: var(--colsNum-2);
      }
      @media (min-width: 720px) and (max-width: 1000px) {
        grid-template-columns: var(--colsNum-3);
      }
      @media (min-width: 1000px) and (max-width: 1200px) {
        grid-template-columns: var(--colsNum-4);
      }
      @media (min-width: 1200px) {
        grid-template-columns: var(--colsNum-5);
        column-gap: 2%;
      }
    `}
  >
      {children}
  </ul>
)
