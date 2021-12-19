/*const SearchInput = document.getElementById("input");
const BrooklynButton = document.getElementById("Brooklyn");
const queensButton = document.getElementById("queens");
const BronxButton = document.getElementById("Bronx");
const manhattanButton = document.getElementById("Manhattan");
const BrooklynButton = document.getElementById("Staten Island");

const brooklynURL = `https://data.cityofnewyork.us/resource/erm2-mwe9.json?agency=NYPD&borough=BROOKLYN`
const manhattanURL = `https://data.cityofnewyork.us/resource/erm2-mwe9.json?agency=NYPD&borough=MANHATTAN`
const queensURL = `https://data.cityofnewyork.us/resource/erm2-mwe9.json?agency=NYPD&borough=QUEENS`
const bronxURL = `https://data.cityofnewyork.us/resource/erm2-mwe9.json?agency=NYPD&borough=BRONX`
const statenIslandURL = `https://data.cityofnewyork.us/resource/erm2-mwe9.json?agency=NYPD&borough=STATEN%20ISLAND`

function loadIntoTable(url,table){
    const tableHead = table.querySelector("thead")
    const tableBody = table.querySelector("tbody")
    const response = fetch(url);
    response.then((results)=>{
        results.json().then((results2)=>{
            console.log(results2)
            const{agency,complaint_type,descriptor,resolution_description}=results2[0]
            console.log(complaint_type)
        })
    })
}*/
const APP_TOKEN = "3nMPlHyMofEykN2kh1YXuq6vz";
const NYPD_AGENCY = "New York City Police Department";
const BOROUGHS = ["BROOKLYN", "MANHATTAN", "QUEENS", "STATEN ISLAND", "BRONX"];
const NUM_OF_BOROUGH_DIVS = BOROUGHS.length
let backgroundColors = ["green", "blue", "red", "orange", "purple"];
const MY_URL = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?";
const DEFAULT_LIMIT = 10;
/* const promise = $.ajax({url: `${MY_URL}${parseInt($("input").val())}`}) */
/* $(() => setTimeout(()=> alert("Dougie the Donut & Pizza Rat - by Drew Devero"), 2000)); */

/* Users should be able to see five buttons for the five boroughs (manhattan, brooklyn, queens, staten island, bronx) of New York City when they load the page
Users should also be able to see an input box where they can put in a number of how many complaints they want to see
When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on
If the user doesn't input any number, make the default be 10
Remember, also, they only want complaints that were handled by the NYPD! (hint: consider filtering for a specific "agency" when making the API call)
When the list of complaints is shown, each complaint should also have a button on it that reads something along the lines of "toggle police response"
When the user clicks on  the "toggle police response" button, it should then toggle how the police responded to that particular complaint
Make sure it only toggles the response for that one complaint, not the entire list! */

$(() => {
    $("body").css({
    "background-color" : "lightgrey"
    });
    $(".copyright-spacing").css({
    "display": "flex",
    "justify-content": "center"
    })
    $(".copyright").css({
    "font-weight": "bold",
    "font-size": "16px",
    "margin": "8px"
    })
    $("h2").css({
    "font-size" : "2rem",
    "text-transform" : "capitalize"
    })
    $(".boroughDiv").append('<button class="getAnswers">');
    $(".getAnswers").text("check");
    $(".getAnswers").css({
        "height" : "4rem",
        "width" : "8rem",
        "color" : "white",
        "font-size" : "1.5rem",
        "font-weight" : "bolder",
        "text-transform" : "capitalize",
        "background" : "rgba(0,0,0,0.25)",
        "cursor" : "pointer"
    });
    $(".paragraphDiv").append('<button class="closeResults">')
    $(".closeResults").css({
            "height" : "2rem",
            "width" : "5rem",
            "display" : "none"
    })
    $(".closeResults").text("Close");
    $(".closeResults").css({
        "cursor" : "pointer"
    })

    // add right margin and different BG color styling to every borough div

    backgroundColors.forEach((item, index) => {
        $(".boroughDiv").eq(index).css({
            "background-color" : item,
            "margin-right" : "50%"
        })
    })

// prevent default on every button and add input field after every h2 tag

    for(let i = 0; i < NUM_OF_BOROUGH_DIVS; i++) {
        let userInput;
        let paragraphStyle;
        $(".getAnswers").eq(i).on("submit", (e) => {
            e.preventDefault();
        })
        $("h2").eq(i).append("<input>");
        $(".closeResults").eq(i).click(() => {
            $("p").eq(i).html("");
            $("p").eq(i).css({
                "width" : "0",
                "background" : "none",
                "margin" : "0",
                "padding" : "0"
        })
            $(".closeResults").eq(i).css({
                "display" : "none"
            })
        })
        // query each borough with specific information and display it in div when button is pressed
        $(".getAnswers").eq(i).click(()=>{
            userInput = parseInt($("input:text").eq(i).val());
            paragraphStyle = 
                $("p").eq(i).css({
                    "width" : "50%",
                    "background" : "lightblue",
                    "margin" : "1rem",
                    "padding" : "1rem"
                });
            if(typeof userInput === "number" && isNaN(userInput) === false) {
                $.ajax({
                    url: MY_URL,
                    type: "GET",
                    data: {
                        "$limit" : userInput,
                        "$$app_token" : APP_TOKEN,
                        "agency_name" : NYPD_AGENCY,
                        "borough" : BOROUGHS[i]
                    }
                }).done((data) => {
                    $("p").eq(i).html("");
                    paragraphStyle;
                    $(".closeResults").eq(i).css({
                        "display" : "block"
                    })
                    for (let j = 0; j < userInput; j ++) {
                        $("p").eq(i).append(`<p>${data[j].borough}: Compalint: ${data[j].complaint_type} - ${data[j].descriptor} <button class=responseButton id=responseButton${j}>police response</button></p>\n`);
                        $(".responseButton").css({
                            "text-transform" : "capitalize",
                            "background-color" : "red",
                            "cursor" : "pointer"
                        })
                        let toggle = true;
                        $(`#responseButton${j}`).on("click", () => {
                            if(toggle === true){
                                $(`#responseButton${j}`).text(` Resolution: ${data[j].resolution_description}`)
                                toggle = false;
                            }else {
                                $(`#responseButton${j}`).text("Police Response")
                                toggle = true;
                            }
                        })
                    }
                }) 
            } else /* if ($("input:text").eq(i).val("0") || isNaN(userInput) === true) */ {
                $.ajax({
                    url: MY_URL,
                    type: "GET",
                    data: {
                        "$limit" : DEFAULT_LIMIT,
                        "$$app_token" : APP_TOKEN,
                        "agency_name" : NYPD_AGENCY,
                        "borough" : BOROUGHS[i]
                    }
                }).done((data) => {
                    $("p").eq(i).html("");
                    paragraphStyle;
                    $(".closeResults").eq(i).css({
                        "display" : "block"
                    })
                    for (let j = 0; j < DEFAULT_LIMIT; j ++) {
                        $("p").eq(i).append(`<p>${data[j].borough}: Compalint: ${data[j].complaint_type} - ${data[j].descriptor} <button class=responseButton id=responseButton${j}>police response</button></p>\n`);
                        $(".responseButton").css({
                            "text-transform" : "capitalize",
                            "background-color" : "red",
                            "cursor" : "pointer"
                        })
                        let toggle = true;
                        $(`#responseButton${j}`).on("click", () => {
                            if(toggle === true){
                                $(`#responseButton${j}`).text(` Resolution: ${data[j].resolution_description}`)
                                toggle = false;
                            }else {
                                $(`#responseButton${j}`).text("Police Response")
                                toggle = true;
                            }
                        })
                    }
                });
            }
        })
    }
    $("input:text").css({
        "margin-left" : "1rem"
    })
    $("input:text").attr("placeholder", "Type your number here");

    /* console.log(promise); */
})

// return burough, descriptor, agency, and resolution_description
