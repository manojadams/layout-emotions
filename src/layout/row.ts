import styled from "@emotion/styled";
import columnsCSS from "./columns";
import spacingCSS from "./../spacing";
import { fieldLayoutRow } from "./../misc";

export const Row = styled.div<{gapX?: number, gapY?: number}>`
    --gap-x: ${props => props.gapX ?? 1.5}rem;
    --gap-y: ${props => props.gapY ?? 0}rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--gap-y));
    margin-right: calc(-0.5 * var(--gap-x));
    margin-left: calc(-0.5 * var(--gap-x));
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