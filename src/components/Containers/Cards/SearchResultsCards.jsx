import styled from "styled-components"

const ResultsWrapper = styled.div`
border:solid;
display: flex;
align-items: center;
justify-content: space-around;
width: 80%;
margin: 4rem auto;
height: 15rem;
border-radius: 11px;
`

export default function SearchResultsCards(props) {



    return (
        <ResultsWrapper className="card-results-wrapper">
            <div className="hour-departure"> {props.departurehour}</div>
            <div className="station-departure">{props.departurestation}</div>
            <div className="hour-arrival"> {props.arrivalhour} </div>
            <div className="station-arrival">{props.arrivalstation}</div>
        </ResultsWrapper>
    )

}