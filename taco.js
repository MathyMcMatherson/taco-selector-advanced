/*
YOUR TASK - Add event listeners such that:
    --When you click on an element, it toggles the 'active' class
    --When your mouse enters a taco, it adds an animation (you pick the animation)
    --When your mouse leaves a taco, it removes the animation
    
Hint: Check out this website to see other mouse event types other than click:
https://developer.mozilla.org/en-US/docs/Web/Events (then scroll down to Mouse Events)

*/

let taco1 = document.querySelector("#taco1");

taco1.addEventListener("click", e => {
    taco1.classList.toggle('active');
})

taco1.addEventListener("mouseenter", e => {
    taco1.classList.add('scale');
})

taco1.addEventListener("mouseout", e => {
    taco1.classList.remove('scale');
})