import { css } from 'styled-components';

const itemStyles = css`
  list-style-type: none;
  font-size: 30px;
  padding: 5px 10px;

  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default itemStyles;
