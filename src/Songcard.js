import React from "react";

const length = props.chords.length;
const newChord = document.createElement("li");
const chordList = document.getElementByClassname("chord-list");

function Songcard(props) {
    return (
        <>
        <h2>{props.songtitle}</h2>
        <h3>{props.artist}</h3>
        <p>{props.style}</p>
        <ul className="chord-list"></ul>
            //Geef voor elk akkoord een h5 terug met de akkoordnaam
           props.chords.map(() => {
             newChord.appendChild(props.chords[i])
             chordList.appendChild(newChord)
                });


        </>
    )
}

export default Songcard;