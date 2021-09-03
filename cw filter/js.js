
function filter () {
    
    this.list = [];

    this.add = function(name, disc, src, id) {

        let photos = document.querySelector(".Photos")

        // console.log (name, disc, src, id )
        if (photos != null) {

            let newPhoto = {name: name, id: id};
            this.list.push(newPhoto);

            let photo = document.createElement('div');
            photos.appendChild(photo);
            photo.setAttribute("class", "photo");
            photo.setAttribute("id", id);


            let img = document.createElement('img');
            photo.appendChild(img);
            img.setAttribute("src", src);

            let p = document.createElement('p');
            photo.appendChild(p);
            p.innerHTML = name;

            let p2 = document.createElement('p');
            photo.appendChild(p2);
            p2.innerHTML = disc;
        }
    };

    this.update = function(index) {

        let photos = document.querySelectorAll('.photo');
    
        for (let i = 0; i < photos.length; i++) {

            if (photos[i].id == index){
                if(photos[i].classList.contains("notShow")){
                    photos[i].classList.remove("notShow")
                }
                photos[i].classList.add("show");
            }
            else {
                photos[i].classList.add("notShow");
            }
        };  
            
    };

    this.showAll = function () {
        let photos = document.querySelectorAll('.photo');
        
        for (let i = 0; i < photos.length; i++) {
            photos[i].classList.remove("notShow")
        };  
    }

    this.show = function() {
        console.log(this.list);
    };

    let btns = document.getElementsByTagName('button');

    btns[0].addEventListener("click", e => {
        this.showAll();
    });

    for (let i = 1; i < btns.length; i++) {
        btns[i].addEventListener("click", e => {
            this.update(e.target.dataset.index);
        });
    };   

};

const Filter = new filter();

Filter.add('Mountains', 'Lorem ipsum dolor..', 'media/mountains.jpg', 'nature');
Filter.add('Lights', 'Lorem ipsum dolor..', 'media/lights.jpg', 'nature');
Filter.add('Forest', 'Lorem ipsum dolor..', 'media/nature.jpg', 'nature');
Filter.add('Retro', 'Lorem ipsum dolor..', 'media/cars1.jpg', 'cars');
Filter.add('Fast', 'Lorem ipsum dolor..', 'media/cars2.jpg', 'cars');
Filter.add('Classic', 'Lorem ipsum dolor..', 'media/cars3.jpg', 'cars');
Filter.add('Girl', 'Lorem ipsum dolor..', 'media/people1.jpg', 'people');
Filter.add('Man', 'Lorem ipsum dolor..', 'media/people2.jpg', 'people');
Filter.add('Woman', 'Lorem ipsum dolor..', 'media/people3.jpg', 'people');

