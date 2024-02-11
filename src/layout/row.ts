import styled from "@emotion/styled";
import columnsCSS from "./columns";
import spacingCSS from "./../spacing";
import { fieldLayoutRow } from "./../misc";

export const Row = styled.div<IRowProps>`
    --gap-x: ${props => props.gapX ?? 1.5}rem;
    --gap-y: ${props => props.gapY ?? 0}rem;

    margin-top: ${props => props.mt ?? 'calc(-1 * var(--gap-y))'}rem;
    margin-bottom: ${props => props.mb ?? 'calc(-1 * var(--gap-y))'}rem;
    margin-right: ${props => props.mr ?? 'calc(-0.5 * var(--gap-x))'}rem;
    margin-left: ${props => props.ml ?? 'calc(-0.5 * var(--gap-x))'}rem;

    ${props => props.pt ? `padding-top: ${props.pt}rem;` : ''}
    ${props => props.pb ? `padding-bottom: ${props.pb}rem;` : ''}
    ${props => props.pl ? `padding-left: ${props.pl}rem;` : ''}
    ${props => props.pr ? `padding-right: ${props.pr}rem;` : ''}

    ${props => props.p ? padding(props.p) : ''}
    
    display: flex;
    flex-wrap: wrap;
    > * {
        flex: 0 0 auto;
        width: 100%;
        box-sizing: border-box;
        max-width: 100%;
        padding-right: calc(var(--gap-x)*.5);
        padding-left: calc(var(--gap-x)*.5);
        margin-top: var(--gap-y);
    }
    ${columnsCSS}
    ${spacingCSS}
    ${fieldLayoutRow}
`;

const padding = (p: number | INum) => {
    let paddingString = '';
    if (p instanceof Number) {
        paddingString = `padding: ${p}rem;`
    } else {
        if ((p as INum).length) {
            switch ((p as INum).length) {
                case 1:
                    return `padding: ${p[0]}rem;`
                case 2:
                    return `padding: ${p[0]}rem ${p[1]}rem;`
                case 3:
                    return `padding: ${p[0]}rem ${p[1]}rem ${p[2]}rem;`
                case 4:
                    return `padding: ${p[0]}rem ${p[1]}rem ${p[2]}rem ${p[3]}rem;`
            }
        }
    }

    return '';
};

/** Props are from rebass */
type INum = [number?, number?, number?, number?];

interface IRebass {
    // margins
    m?: number | INum;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    // paddings
    p?: number | INum;
    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
};

interface IRowProps extends IRebass {
    gapX?: number;
    gapY?: number;
}