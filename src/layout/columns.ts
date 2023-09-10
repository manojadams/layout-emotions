import BreakPoints, { BreakPointIdentifier } from "./breakpoints";
import MediaQueries from "./media-queries";
import { w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12 } from "./widths";

const Columns = (breakPoint: number) => {
    const breakPointIdentifier = BreakPointIdentifier[breakPoint];
    return `
        .mcol-${breakPointIdentifier}12 {
            width: ${w12}%;
            flex: 0 0 ${w12}%;
        }
        .mcol-${breakPointIdentifier}11 {
            width: ${w11}%;
            flex: 0 0 ${w11}%;
        }
        .mcol-${breakPointIdentifier}10 {
            width: ${w10}%;
            flex: 0 0 ${w10}%;
        }
        .mcol-${breakPointIdentifier}9 {
            width: ${w9}%;
            flex: 0 0 ${w9}%;
        }
        .mcol-${breakPointIdentifier}8 {
            width: ${w8}%;
            flex: 0 0 ${w8}%;
        }
        .mcol-${breakPointIdentifier}7 {
            width: ${w7}%;
            flex: 0 0 ${w7}%;
        }
        .mcol-${breakPointIdentifier}6 {
            width: ${w6}%;
            flex: 0 0 ${w6}%;
        }
        .mcol-${breakPointIdentifier}5 {
            width: ${w5}%;
            flex: 0 0 ${w5}%;
        }
        .mcol-${breakPointIdentifier}4 {
            width: ${w4}%;
            flex: 0 0 ${w4}%;
        }
        .mcol-${breakPointIdentifier}3 {
            width: ${w3}%;
            flex: 0 0 ${w3}%;
        }
        .mcol-${breakPointIdentifier}2 {
            width: ${w2}%;
            flex: 0 0 ${w2}%;
        }
        .mcol-${breakPointIdentifier}1 {
            width: ${w1};
            flex: 0 0 ${w1}%;
        }
        .mcol {
            flex: 1 0 0%;
        }
    `;
};

const ColumnsCSS = `
    ${Columns(BreakPoints.xs)}
    ${MediaQueries(BreakPoints.sm)} {
        ${Columns(BreakPoints.sm)}
    }
    ${MediaQueries(BreakPoints.md)} {
        ${Columns(BreakPoints.md)}
    }
    ${MediaQueries(BreakPoints.lg)} {
        ${Columns(BreakPoints.lg)}
    }
    ${MediaQueries(BreakPoints.xl)} {
        ${Columns(BreakPoints.xl)}
    }
    ${MediaQueries(BreakPoints.xxl)} {
        ${Columns(BreakPoints.xxl)}
    }
`;

export default ColumnsCSS;
