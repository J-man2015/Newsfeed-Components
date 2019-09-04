/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
  
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/ 
// THIS WAS MY FIRST ATTEMPT AND I'VE REALIZED WHAT I DID WRONG, THIS TECHNICALLY WORKS BUT IT IS NOT DYNAMIC!
// function Menubuilder (arr){
// const div= document.createElement('div');
// const ul= document.createElement('ul');
// const li= document.createElement('li');
// const litwo= document.createElement('li');
// const lithree= document.createElement('li');
// const lifour= document.createElement('li');
// const lifive= document.createElement('li');
// const lisix= document.createElement('li');
// div.appendChild(ul);
// ul.appendChild(li);
// ul.appendChild(litwo);
// ul.appendChild(lithree);
// ul.appendChild(lifour);
// ul.appendChild(lifive);
// ul.appendChild(lisix);
// div.classList.add('menu');
// li.textContent= arr[0];
// litwo.textContent= arr[1];
// lithree.textContent= arr[2];
// lifour.textContent= arr[3];
// lifive.textContent= arr[4];
// lisix.textContent= arr[5];

// const menubutton= document.querySelector('.menu-button');

// menubutton.addEventListener('click',()=>{
//   div.classList.toggle('menu--open');
// });
// return div;
// }

// const menucontainer= document.querySelector(".header");

// menucontainer.appendChild(Menubuilder(menuItems));


//   console.log(Menubuilder());

function Menubuilder(){
  const menu= document.createElement('div');
  const menuList= document.createElement('ul');
  menu.classList.add('menu');
  menu.appendChild(menuList);
  menuItems.forEach((item) =>{
    const listitem= document.createElement('li');
    listitem.textContent=item;
    menuList.appendChild(listitem);
  });
  const menubtn= document.querySelector('.menu-button');
  menubtn.addEventListener('click', () =>{
    menu.classList.toggle('menu--open');
  });
  return menu;
}

const header= document.querySelector('.header');
header.prepend(Menubuilder(menuItems));