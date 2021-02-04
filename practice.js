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
            let story = document.createElement('p');
            story.className="story";
            name.textContent = towns[i].name;
            towninfo.appendChild(name);
            motto.textContent =towns[i].motto;
            towninfo.appendChild(motto);
            yearFounded.textContent ='Year Founded: ' + towns[i].yearFounded;
            towninfo.appendChild(yearFounded);
            population.textContent ='Population: ' + towns[i].population;
            towninfo.appendChild(population);
            rainFall.textContent ='Rain Fall: ' + towns[i].averageRainFall;
            towninfo.appendChild(rainFall);
            img.setAttribute('src', "weather/lesson-5/images/" + towns[i].photo);
            img.setAttribute('alt', towns[i].name);
            card.appendChild(towninfo);
            card.appendChild(img);
            
            if (towns[i].name.includes("Preston")){
                story.innerHTML="POCATELLO — The National Weather Service is saying to expect strong winds across eastern Idaho Saturday.<p>The majority of eastern Idaho is under a wind advisory from 9 a.m. to 6 p.m. In the Snake River Plain and other heavily populated areas, they say to expect sustained winds between 25 to 40 mph and isolated gust over 60 mph.</p><p>“The greatest impacts are expected to be difficult driving for high-profile vehicles and rough chop/dangerous waves on area lakes and reservoirs,” according to a Weather Service report. “Consider avoiding marine recreation. Blowing dust is possible, but this threat may be minimized overall as most crops are planted.”</p><p>The advisory is effect in the following communities Idaho Falls, Rexburg, St. Anthony, Pocatello, Blackfoot, American Falls, Shelley, Fort Hall, Malta, Rockland, Holbrook, Inkom, McCammon, Downey, Lava Hot Springs, Malad, Preston, Island Park, Kilgore, Dubois, Spencer, Edie School and Small.</p><p>Areas like the Central Mountains, Eastern Magic Valley, Bear Lake, Teton Valley will see slightly lighter winds but are also under a wind advisory as well.</p><p>Those areas are expected to see wind gust between 35 to 45 mph.</p><p>For the latest weather updates <a href='https://www.eastidahonews.com/weather/'>click here</a>"
            }
            else if (towns[i].name.includes("SodaSprings")){
                story.innerHTML="East Idaho is receiving a fresh coat of snow due to a Pacific storm that's rolling through the region. The National Weather Service has issued a special weather alert warning the public about the storm that arrived in East Idaho on Sunday morning and is expected to continue through Sunday night. Snow showers could possibly continue in East Idaho's higher elevations on Monday morning and afternoon.<p>The storm is forecast to bring up to 3 inches of snow to the following areas: Idaho Falls, Ammon, Rexburg, St. Anthony, Pocatello, Chubbuck, Blackfoot, American Falls, Aberdeen, Shelley, Firth, Fort Hall, Burley, Rupert, Heyburn, Paul, Oakley, Albion, Almo, Malta, Declo, Raft River, Rockland, Arbon, Holbrook, Inkom, McCammon, Arimo, Downey, Swanlake, Lava Hot Springs, Grace, Bancroft, Soda Springs, Henry, Bone, Island Park and Kilgore.</p><a href='https://www.idahostatejournal.com/news/local/snowstorm-bearing-down-on-east-idaho/article_b0ad5afd-424a-57df-b544-7e72bd8e7f6e.html'>Full Article</a>"
            }
            else if (towns[i].name.includes("SodaSprings")){
                story.innerHTML=" Declare freeze-up on Bear Lake<p>A premature report in the first week of Jan. that Bear Lake had frozen over when areas off North Eden were still open became a reality on the night of Jan. 13 when the entire body of water was officially declared frozen.</p><p>Since 1923, there have been only three earlier dates on which Bear Lake froze over, the one Dec. date of the 28th in 1948, the severe winter of 1948-49 when ice covered the large body of water until Apr. 14, 1949, a period of 107 days the second longest on record; the hard winter of 1951-52, from Jan. 5 to Apr. 25, a period of 111 days, longest on record; and the less rigorous winter of 1931-32, when waters were iced over from Jan. 2, 1932, to Apr. 4, a term of 93 days.</p><p>This is the fourth time since records have been kept over 49 years that Bear Lake has frozen over.</p><a href='https://www.hjnews.com/montpelier/out-of-the-past/article_573b0dc2-53e6-51bc-82b9-4f1478ae5ba4.html'>link to article</a>"
            }
            card.appendChild(story)
            document.querySelector('div.cards').appendChild(card);
        }
            

        }
      });