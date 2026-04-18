/*
Cookies
    small pieces of data stored in the browser
    sent automatically to the server with every HTTP request
    
    expires - expiry date
    path - where cookie is accessible
    secure - only HTTPS
*/
document.cookie = "username=John";
document.cookie = "username=John; expires=Fri, 31 Dec 2026 12:00:00 UTC; path=/";
console.log(document.cookie);
/*
LocalStorage
    stored data permanently (until manually cleared)
    stored in browser only (NOT sent to server)
*/
localStorage.setItem("username", "John");
localStorage.getItem("username");
localStorage.removeItem("username");
localStorage.clear(); //clear all

//store Objects
const user = { name: "John", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
const data = JSON.parse(localStorage.getItem("user"));
/*
SessionStorage
    same as localstorage but data is deleted when tab is closed

*/
sessionStorage.setItem("token", "abc123");
sessionStorage.getItem("token"); 

/*
IndexedDB
    A full database inside browser
    store large data,structured objects, files/blobs
    work like NoSQL database
    handle large data(100MB+)
    works asynchronously (non-blocking)

*/

/*
Bezier curve
    Controls speed of animation
    Makes motion smooth (not robotic)
CSS Animations
    Used for simple animations
JavaScript Animations
    Used for complex or interactive animations
*/

/*
Web Components
    a way of create own reusable HTML elements
    <my-card></my-card>
    the data in this elements are private not change by comman styles

Custom Elements
    define a new HTML element using js 
        class MyCard extend HTMLElement{
        connectedCallback(){
        this.innerHTML = "<h2>Hello!</h2>";
        }
        }
        customElements.define("my-card",MyCard);

    after define class and register it, then use it like normal HTML element
    
shadow DOM
    encapsulated DOM inside an element/ isolate structure and style
    it hides HTML structure and CSS styles from the outside world
    style inside do not affect outside likewise for outside

template Element
    it store HTML  invisible in the DOM untile use it
    not display on page,excuted
    used as a blueprint for creating elements
    




*/