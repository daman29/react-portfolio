import styled from "styled-components";
import { Pallette } from "../assets/ColourPallette";

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`

export const ProjectCard = styled.div`
    flex: 1 1 31%;
    margin: 1%;
    background-color: ${Pallette.primaryLight};
    min-height: 30vh;
`