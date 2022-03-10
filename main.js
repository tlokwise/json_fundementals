fetch('/data.json')
.then( resolved => resolved.json())
.then(function(jsonArray) {
    jsonArray.forEach(arrayItem => {
        const body = document.querySelector('body');
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');
        body.appendChild(flashcard);
            //flashcard is divided into two parts
            //section[left] and the right div
        const section = document.createElement('section');
        flashcard.appendChild(section);
            //image div [holds logo] inside section
        const imageHolder = document.createElement('div');
        imageHolder.classList.add('image');
        section.appendChild(imageHolder);
        const logo = document.createElement('img');
        logo.classList.add('logo');
        imageHolder.appendChild(logo);
        logo.src = arrayItem.logo
            //middle info div
        const middleInfo = document.createElement('div');
        middleInfo.classList.add('middle-info');
        section.appendChild(middleInfo);
        const mainInfoList = document.createElement('ul');
        mainInfoList.classList.add('main-info-list');
        middleInfo.appendChild(mainInfoList);

        const newBooleanValue = arrayItem.new;
        const featuredBooleanValue = arrayItem.featured;
        var newText = document.querySelector('.new');
        var featuredText = document.querySelector('.featured');
        if(newBooleanValue == true) {
            
        }else if(featuredBooleanValue == true) {
            
        }


        mainInfoList.innerHTML = 
                `<li>
                <ul class="top-list">
                    <li class="company">${arrayItem.company}</li>
                    <li class="new"></li>
                    <li class="featured"></li>
                </ul>
            </li>

            <li>
                <h4 class="position">${arrayItem.position}</h4>
            </li>

            <li>
                <ul class="bottom-list">
                    <li class="posted-at">${arrayItem.postedAt}</li>
                    <li class="contract">${arrayItem.contract}</li>
                    <li class="location">${arrayItem.location}</li>
                </ul>
            </li>`;
            //right info
        const rightInfo = document.createElement('div');
        rightInfo.classList.add('right-info');
        flashcard.appendChild(rightInfo);
        const unorderedList = document.createElement('ul');
        unorderedList.classList.add('right-info-items');
        rightInfo.appendChild(unorderedList);
        const convertToArray = [].concat(arrayItem.role, arrayItem.level,
            arrayItem.languages, arrayItem.tools);
        console.log(convertToArray);
        convertToArray.forEach( elem => {
            console.log(elem);
            const unorderedListItem = document.createElement('li');
            unorderedListItem.innerText  = elem;
            unorderedList.appendChild(unorderedListItem);
        })
        
        
    })
})