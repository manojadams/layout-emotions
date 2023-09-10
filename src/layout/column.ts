import styled from "@emotion/styled";
import { w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12 } from "./widths";
import MediaQueries from "./media-queries";
import BreakPoints from "./breakpoints";

interface IProps {
    xxl?: number;
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
};

const ColumnCss = (grid) => `
    width: ${Grid(grid)}%;
    flex: 0 0 ${Grid(grid)}%;
`;

const Grid = grid => {
    switch (grid) {
        case 11: return w11;
        case 10: return w10;
        case 9: return w9;
        case 8: return w8;
        case 7: return w7;
        case 6: return w6;
        case 5: return w5;
        case 4: return w4;
        case 3: return w3;
        case 2: return w2;
        case 1: return w1;
        default:
        case 12: return w12;
    }
}

export const Col = styled.div<IProps>`
    ${MediaQueries(BreakPoints.xs)} {
        ${props => props.xs ? ColumnCss(props.xs) : ''}
    }
    ${MediaQueries(BreakPoints.sm)} {
        ${props => props.sm ? ColumnCss(props.sm) : ''}
    }
    ${MediaQueries(BreakPoints.md)} {
        ${props => props.md ? ColumnCss(props.md) : ''}
    }
    ${MediaQueries(BreakPoints.lg)} {
        ${props => props.lg ? ColumnCss(props.lg) : ''}
    }
    ${MediaQueries(BreakPoints.xl)} {
        ${props => props.xl ? ColumnCss(props.xl) : ''}
    }
    ${MediaQueries(BreakPoints.xxl)} {
        ${props => props.xxl ? ColumnCss(props.xxl) : ''}
    }
`;