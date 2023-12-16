const MyUniqueArray = [
    {
    "id": 4,
    "title": "Different Cars",
    "price": 34000000000,
    "description": "MOTORING These Are the Cars of the Future, According to Bentley, Bugatti, Lamborghini, and More",
    "image_url": "https://www.sixt.com/magazine/wp-content/uploads//sites/6/2022/04/Bugatti-Bolide-Hypercar-resize-1024x683.jpg"
    },

    {
    "id": 7,
    "title": "Different Cars",
    "price": 120000000000,
    "description": "MOTORING These Are the Cars of the Future, According to Bentley, Bugatti, Lamborghini, and More",
    "image_url": "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg"
    },

    {
    "id": 9,
    "title": "Different Cars",
    "price": 920000000,
    "description": "MOTORING These Are the Cars of the Future, According to Bentley, Bugatti, Lamborghini, and More",
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8o1s-E4wEc-0iDmOSdapbtr7kwwMniuHYJWnR4m3OYLhtr7gbkqL01Brs81HeqQSaWJY&usqp=CAU"
   
    },

    {
    "id": 11,
    "title": "Different Cars",
    "price": 440006080,
    "description": "MOTORING These Are the Cars of the Future, According to Bentley, Bugatti, Lamborghini, and More",
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBAu3eq_vlL82DPSu9fwCaZc3fhN2nZkUTsNdO282tcFnONS0LSMYFUHziNhhWSj75F4&usqp=CAU"
    },

    {
    "id": 12,
    "title": "Different Cars",
    "price": 1500000000,
    "description": "MOTORING These Are the Cars of the Future, According to Bentley, Bugatti, Lamborghini, and More",
    "image_url": "https://getwallpapers.com/wallpaper/full/f/e/1/694622-cool-black-ferrari-wallpaper-3840x2160.jpg"
    },

    {
        "id": 12,
        "title": "Different Cars",
        "price": 99999999990,
        "description": "MOTORING These Are the Cars of the Future, According to Bentley, Bugatti, Lamborghini, and More",
        "image_url": "https://wallpapers.com/images/featured/ferrari-cglqdk3qgwuhk35k.jpg"
        }
    ];


    const MyUniquecards = document.getElementById("Assigment02")
    MyUniqueArray.forEach((product,index)=>{
   


     const {id:item1,
       title:item2,
       price:item3,
       description:item4,
       image_url:item5} = MyUniqueArray[index]
   
     MyUniquecards.innerHTML += `<div class="card" style="width: 18rem;">
     <img src="${item5}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${item2}</h5>
       <p  class="card-text">${item4}</p> 
       ${item3}
       <br>
       <br>
       <a href="#" class="btn btn-success">Contact</a>
       <a href="#" class="btn btn-success">Details</a>
     </div>
   </div>`



    })