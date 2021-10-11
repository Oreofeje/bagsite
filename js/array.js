// create an array
let neewBags = [
  // objects inside an array
  {
    bagImage:'orange-bag',
    name:'color spark',
    price: '$18.10'
  },

  {
    bagImage:'new1',
    name:'riverdale leather',
    price: '$70'
  },

  {
    bagImage:'carriage',
    name:'men\'s leather bag',
    price: '$20'
  },

  {
    bagImage:'lug4',
    name:'Box-bag',
    price: '$67'
  },

  {
    bagImage:'bab2',
    name:'black Baby bag',
    price: '$110'
  },

  {
    bagImage:'bab6',
    name:'Yellow diaper bag',
    price: '$50.60'
  },

  {
    bagImage:'lug5',
    name:'white box',
    price: '$67.10'
  },

  {
    bagImage:'download1',
    name:'Black PC bag',
    price: '$40.10'
  },

  {
    bagImage:'lad11',
    name:'Black back bag',
    price: '$120'
  },

  {
    bagImage:'download8',
    name:'Black swing bag',
    price: '$62.80'
  },

  {
    bagImage:'carriage3',
    name:'Spiral handbag',
    price: '$60.00'
  },

  {
    bagImage:'bab5',
    name:'Grey baby bag',
    price: '$70.65'
  }
]

// console.log(`new bags are ${neewBags.length} in number`);

// looping statement

neewBags.forEach(element => {
  // console.log(element);
});


// displaying the content of the array using the DOM

let section2cols = document.getElementById('newest');
let html = ' ';
neewBags.forEach(e => {
    html += `
        <div class="col ">
        <div class="card h-100 bg-grey border  border-4 border-warning rounded-top pe-0">
          <div class="card-img">
            <img src="./images/${e.bagImage}.jpg" class="card-img-top img-fluid" alt="bag">
          </div>
          <div class="card-body ">
            <h5 class="card-title fw-bold text-dark text-capitalize">${e.name}</h5>

            <p class=" fst-1 text-dark">${e.price}</p>

            <a href="#" class="btn btn-sm bg-bluey fw-bold text-white ">Add to Cart</a>

          </div>
        </div>
      </div>
    `

  console.log(e);

  section2cols.innerHTML =html
})


