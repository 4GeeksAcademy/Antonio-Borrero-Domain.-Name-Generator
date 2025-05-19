import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let domains = [];

  let pronoums = ["the", "our", "your"];
  let adjs = ["great", "big", "impressive", "fabulous"];
  let nouns = ["jogger", "racoon", "dog", "army", "house"];

  for (let pronoum of pronoums){
    for (let adj of adjs){
      for (let noun of nouns){
        let domain = pronoum + adj + noun + ".com"
        domains.push(domain)
      }
    }
  }
  document.querySelector("#domain").innerHTML = domains.map(d => `<li>${d}</li>`).join(" ")
  console.log(domains)
};
