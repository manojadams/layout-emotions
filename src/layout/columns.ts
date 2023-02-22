import BreakPoints, { BreakPointIdentifier } from "./breakpoints";
import MediaQueries from "./media-queries";
import { w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12 } from "./widths";

const Columns = (breakPoint: number) => {
    const breakPointIdentifier = BreakPointIdentifier[breakPoint];
    return `
        .mcol-${breakPointIdentifier}12 {
            width: ${w12}%;
        }
        .mcol-${breakPointIdentifier}11 {
            width: ${w11}%;
        }
        .mcol-${breakPointIdentifier}10 {
            width: ${w10}%;
        }
        .mcol-${breakPointIdentifier}9 {
            width: ${w9}%;
        }
        .mcol-${breakPointIdentifier}8 {
            width: ${w8}%;
        }
        .mcol-${breakPointIdentifier}7 {
            width: ${w7}%;
        }
        .mcol-${breakPointIdentifier}6 {
            width: ${w6}%;
        }
        .mcol-${breakPointIdentifier}5 {
            width: ${w5}%;
        }
        .mcol-${breakPointIdentifier}4 {
            width: ${w4}%;
        }
        .mcol-${breakPointIdentifier}3 {
            width: ${w3}%;
        }
        .mcol-${breakPointIdentifier}2 {
            width: ${w2}%;
        }
        .mcol-${breakPointIdentifier}1 {
            width: ${w1};
        }
    `;
};

const ColumnsCSS = `
    ${Columns(BreakPoints.xs)}
    ${MediaQueries(BreakPoints.xxl)} {
        ${Columns(BreakPoints.xxl)}
    }
    ${MediaQueries(BreakPoints.xl)} {
        ${Columns(BreakPoints.xl)}
    }
    ${MediaQueries(BreakPoints.lg)} {
        ${Columns(BreakPoints.lg)}
    }
    ${MediaQueries(BreakPoints.md)} {
        ${Columns(BreakPoints.md)}
    }
    ${MediaQueries(BreakPoints.sm)} {
        ${Columns(BreakPoints.sm)}
    }
`;

export default ColumnsCSS;
