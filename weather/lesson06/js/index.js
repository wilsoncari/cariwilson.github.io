const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const towns = jsonObject['towns']; 
        for (let i = 0; i < towns.length; i++ ){

        if (towns[i].name.includes("Preston") || towns[i].name.includes("Soda Springs") || towns[i].name.includes("Fish Haven")){
            let card = document.createElement('section');
            let towninfo=document.createElement('section');
            let name = document.createElement('h2');
            let motto= document.createElement('h5');
            let yearFounded= document.createElement('p');
            let rainFall= document.createElement('p');
            let population= document.createElement('p');
            let img = document.createElement('img');
            //let story = document.createElement('p');
            card.className="town";
            towninfo.className="towninfo";
            //story.className="story";
            name.textContent = towns[i].name;
            towninfo.appendChild(name);
            motto.textContent =towns[i].motto;
            towninfo.appendChild(motto);
            yearFounded.textContent ='Year Founded: ' + towns[i].yearFounded;
            towninfo.appendChild(yearFounded);
            population.textContent ='Population: ' + towns[i].currentPopulation;
            towninfo.appendChild(population);
            rainFall.textContent ='Rain Fall: ' + towns[i].averageRainfall;
            towninfo.appendChild(rainFall);
            img.setAttribute('src', "images/" + towns[i].photo);
            img.setAttribute('alt', towns[i].name);
            card.appendChild(towninfo);
            card.appendChild(img);
            
            if (towns[i].name.includes("Preston")){
                //card.appendChild(story);
            document.querySelector('div.card1').appendChild(card);
            }
            else if (towns[i].name.includes("Soda Springs")){
                //card.appendChild(story);
                card.className="town soda";
            document.querySelector('div.card2').appendChild(card);
            }
            else if (towns[i].name.includes("Fish Haven")){
                //card.appendChild(story);
            document.querySelector('div.card3').appendChild(card);
            }
            
        }
            

        }
      });