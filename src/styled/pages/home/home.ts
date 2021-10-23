import styled from 'styled-components';
import {fSizeL} from '@src/styled/variables/variables';

export const HomeButtomWrap = styled.div.attrs({ className: 'home-button-wrap' })`
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        display: block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: ${fSizeL};
    }
`;
