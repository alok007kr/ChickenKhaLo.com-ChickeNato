
var url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=adf46480&app_key=992c986dcd18221881ceb7ba5863c15e`;

fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=adf46480&app_key=992c986dcd18221881ceb7ba5863c15e")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    getRecipes(data);
  })
  .catch((e) => {
    console.log("Error is", e);
  });


function getRecipes(data){
  console.log(data.hits[0].recipe.image);
  
  document.getElementById("img1").src = data.hits[0].recipe.image;
  document.getElementById("text1").innerHTML = data.hits[0].recipe.label;
  document.getElementById("img2").src = data.hits[1].recipe.image;
  document.getElementById("text2").innerHTML = data.hits[1].recipe.label;
  document.getElementById("img3").src = data.hits[2].recipe.image;
  document.getElementById("text3").innerHTML = data.hits[2].recipe.label;
  document.getElementById("img4").src = data.hits[3].recipe.image;
  document.getElementById("text4").innerHTML = data.hits[3].recipe.label;
  document.getElementById("img5").src = data.hits[4].recipe.image;
  document.getElementById("text5").innerHTML = data.hits[4].recipe.label;
  document.getElementById("img6").src = data.hits[5].recipe.image;
  document.getElementById("text6").innerHTML = data.hits[5].recipe.label;
  document.getElementById("img7").src = data.hits[6].recipe.image;
  document.getElementById("text7").innerHTML = data.hits[6].recipe.label;
  document.getElementById("img9").src = data.hits[8].recipe.image;
  document.getElementById("text9").innerHTML = data.hits[8].recipe.label;
}

//function showData(d) {
//  console.log(d.recipes.label);
//}

