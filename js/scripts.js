// Scripting

// Data source
const url = "https://assets.codepen.io/16425/Spring-2025-Roster.json";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    
    // check-check: is the data good?
    console.log(data);
    //console.log(data[0].name);
    // console.log(data.imageURL);
    // console.log(data.motto);

    // get container for data
    const roster = document.querySelector(".roster");

    // loop through data
    data.forEach( student => {
      
      // template
      const template = `
          <figure>
            <figcaption> ${student.name} </figcaption>
            <img src=${student.imageUrl} alt=${student.name} >
            <blockquote> ${student.motto} </blockquote>
            <p><span class="label">My superpower:</span> ${student.talent} </p>
            <p><span class="label">Ask me to sing:</span> ${student.favoriteSong} </p>
          </figure>
       `;

      // insert EACH `student` record into container
      roster.insertAdjacentHTML("afterbegin", template);
    });
  });

