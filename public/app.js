const populate = async () => {
    fetch('./data.json')
    .then(respons => respons.json())
    .then(data => {
        populateHeader(data);
        populateHeroes(data);
    }).catch(error => console.log(error));
};

const populateHeader = (obj) => {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);

    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
}

const populateHeroes = (obj) => {
    const section = document.querySelector("section");
    const heroes = obj.members;

    heroes.forEach(hero => {
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myList = document.createElement("ul");

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = "Superpowers:";

        const superPowers = hero.powers;
        superPowers.forEach(power => {
            const listItem = document.createElement("li");
            listItem.textContent = power;
            myList.appendChild(listItem);
        })

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    })
}

populate()