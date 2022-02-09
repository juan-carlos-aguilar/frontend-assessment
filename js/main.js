/* Displays country data on 'index.html' */
function showCountry(name, capital, region, lang, popu, flag)
{
    var countriesList = document.getElementById("country-list");
    countriesList.innerHTML += "<tr>"
                            + "<td>" + name + "</td>"
                            + "<td>" + capital + "</td>"
                            + "<td>" + region + "</td>"
                            + "<td>" + lang + "</td>"
                            + "<td>" + popu + "</td>"
                            + "<td>" + "<img src='" + flag + "' class='table-img' /></td>"
                            + "</tr>";
}


/* Ajax request to load countries into 'index.html' Table */
function getCountries()
{
    console.log("Loading Countries...");

    var request = new XMLHttpRequest;

    // Preparing request
    request.open("GET", "https://restcountries.com/v3.1/all", true);

    // Setting Callback
    request.onreadystatechange = function()
    {
        // When request is done, update page
        if(this.readyState == 4)
        {
            console.log("Callback done... " + this.responseText);
            console.log("Status: " + this.status);

            // if request successful update page
            if(this.status == 200)
            {
                // Parse response
                var countriesList = JSON.parse(this.responseText);

                // Update the page and display data
                for(var i in countriesList)
                {
                    showCountry(countriesList[i]["name"]["official"],
                                countriesList[i]["capital"],
                                countriesList[i]["region"],
                                countriesList[i]["languages"],
                                countriesList[i]["population"],
                                countriesList[i]["flags"]["png"]);
                }
            }
        }
    }

    // Making the request
    request.send();
}
