function VehicleDetails() {
  const fetch_vehicles = document.getElementsByClassName("vehicle-details")[0];
  const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      data.Results.forEach((element) => {
        const div_creation = document.createElement("div");
        div_creation.setAttribute("class", "card");
        div_creation.setAttribute("style", "width: 18rem;");
        div_creation.innerHTML += `<div class="card-body text-white bg-success">
                  <h5 class="card-title text-dark fs-5 font-weight-bold">Car Name: ${element.MakeName}</h5>
                  <h6 class="card-subtitle">Vehicle type: ${element.VehicleTypeName}</h6>
                  <p class="card-text">Vehicle Make ID : ${element.MakeId}</p>
                  <p class="card-text">Vehicle Type ID : ${element.VehicleTypeId}</p>
                  </div>`;
                  fetch_vehicles.append(div_creation);
      });
    }).catch((error)=>console.log(error))
}

VehicleDetails();