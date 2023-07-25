import styled from "@emotion/styled";
import columnsCSS from "./columns";
import spacingCSS from "./../spacing";
import { fieldLayoutRow } from "./../misc";

export const Row = styled.div`
    --gap-x: 1.5rem;
    --gap-y: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: calc(-1 * var(--gap-y));
    margin-right: calc(-0.5 * var(--gap-x));
    margin-left: calc(-0.5 * var(--gap-x));
    > * {
        flex: 0 0 auto;
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