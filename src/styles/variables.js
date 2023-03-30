import { css } from 'styled-components';

const variables = {
  flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  position: (
    position = 'absolute',
    top = '0',
    right = '0',
    bottom = '0',
    left = '0'
  ) => `
    position: ${position};
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
  `,

  fontStyle: (fontSize = '14px', fontWeight = 500) => `
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `,

  widthHeight: (width = '100%', height = '100%') => `
    width: ${width};
    height: ${height};
  `,

  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  preventDrag: css`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
};

export default variables;
