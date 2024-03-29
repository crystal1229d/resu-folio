import styled from 'styled-components';

export const StyledMark = styled.mark`
    color: hsl(0 0% 6%);
    --lightness: 80%;
    --highlighted: 1;
    --highlight: hsl(var(220, 45) 80% var(90%));
    background: transparent;

    @supports (animation-timeline: view()) {
        & {
            --highlighted: 0;
            animation: highlight steps(1) both;
            animation-timeline: view();
            animation-range: entry 100% cover 10%;
        }
    }

    & > span {
        background: linear-gradient(120deg, var(--highlight, lightblue) 50%, transparent 50%) 110% 0 / 200% 100% no-repeat;
        background-position: calc((1 - var(--highlighted)) * 110%) 0;
        transition: background-position 1s;
    }

    @keyframes highlight {
        to {
            --highlighted: 1;
        }
    }

    ::view-transition-new(root) {
        animation: grow 1s;
    }
    ::view-transition-old(root) {
        animation: none;
    }

    @keyframes grow {
        0% {
            clip-path: polygon(50vmax 50vmax, 50vmax 50vmax, 50vmax 50vmax);
        }
        100% {
            clip-path: polygon(50vmax -100vmax, -100vmax 200vmax, 200vmax 200vmax);
        }
    }
`;