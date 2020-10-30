var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=OGUrBXITv_iRdDDbbm0cRb1-_5HEDOhzEERbfw9G0ho";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
      handleResponse(request.response);
    })
);

const handleResponse = (response) =>{
  const data = JSON.parse(response).data;
  const yr = data.filter(PLANT => {return PLANT_DISCOVERED_AFTER_YEAR_1753; })
  document.write(data);
}





// const getData = (response) => {
//   const plantData = JSON.parse(response).data;

//   const list = console.log(plantData.filter(item => item.year >= 1700))

//   var i;
//   for (i = 0; i < list.length; i++){
//     addToDom(i)
//   }

//   // console.log(plantData);
//   // console.log(plantData[0]);
//   // console.log(plantData[0].common_name);

//   // addToDom(plantData[0]);
//   // addToDom(plantData[1]);
// }

const addToDom = (plant) =>{
  const wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute("class", plant.common_name)

  const plant_name = document.createElement('h3');
  plant_name.innerText = plant.common_name;

  const image_url = plant.image_url;
  const plant_img = document.createElement('img');
  plant_img.setAttribute('src', image_url);

  wrapperDiv.appendChild(plant_name);
  wrapperDiv.appendChild(plant_img);

  const div = document.createElement('div');
  div.setAttribute("class", plantData.year)

  div.appendChild(wrapperDiv);

}



//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////

const displayContent = () => {
  corsPromise().then(request => request.onload = request.onerror = function (){
    getData(request.response)
  });
}