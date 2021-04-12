function web(){
const body=document.querySelector("body");
const home= document.querySelector(".home");
const menu= document.querySelector(".menu");
const order_online= document.querySelector(".order_online");
const locations= document.querySelector(".locations");
const contact= document.querySelector(".contact");
const container=document.querySelector(".content_div");
const container_children=document.querySelector(".content_div").childNodes;

const selected_food=[];
const food=[];
const final_food=[];
container.addEventListener("click",function(e){
    const order_submission= document.querySelector(".order");

    e.stopPropagation();
    const item = e.target;
   
    if (item.classList[1] === "fa-plus" || item.classList[0] === "button") {
        if (item.classList[1] === "fa-plus") {
            const button_div = item.parentElement;
            const food_div = button_div.parentElement;
            selected_food.push(food_div.innerHTML);
            food_div.classList.toggle("selected")
        }
        else {
            const food_div = item.parentElement;
            food_div.classList.toggle("selected")
            selected_food.push(food_div.innerHTML);


        }
   
        order_submission.addEventListener("click",order)

    }

}
)
function order(){
if(selected_food.length>0){
  
var i;
var j;
var am=0;
var esp=0;
var cap=0;
var gr=0;
var jas=0;
var pan=0;
var vt=0;
var ft=0;
var che=0;
var cup=0;
    for (i in selected_food){
  
    if (selected_food[i].includes("Americano")){
        food.push("Americano");
        am++;
    }
    else if (selected_food[i].includes("Esperesso")){
        food.push("Esperesso");
        esp++;
    }
    else if (selected_food[i].includes("Cappuccino")){
        food.push("Cappuccino");
        cap++;
    }
    else if (selected_food[i].includes("Green")){
        food.push("Green");
        gr++;
    }
    else if (selected_food[i].includes("Jasmin")){
        food.push("Jasmin");
        jas++;
    }
    else if (selected_food[i].includes("Panini")){
        food.push("Panini");
        pan++;
    }
    else if (selected_food[i].includes("Veggie Toast")){
        food.push("Veggie Toast");
        vt++;
    }
    else if (selected_food[i].includes("French Toast")){
        food.push("French Toast");
        ft++;
    }
    else if (selected_food[i].includes("Cheesecake")){
        food.push("Cheesecake");
        che++;
    }
    else if (selected_food[i].includes("Cupcake")){
        food.push("Cupcake");
        cup++;
    }

    }
    food_list();
    function food_list(){
        

        if(am%2!=0){
            final_food.push(" Americano")
        }
        if(esp%2!=0){
            final_food.push(" Esperesso")
        }
        if(cap%2!=0){
            final_food.push(" Cappuccino")
        }
        if(gr%2!=0){
            final_food.push(" Green")
        }
        if(jas%2!=0){
            final_food.push(" Jasmin")
        }
        if(pan%2!=0){
            final_food.push(" Panini")
        }
        if(vt%2!=0){
            final_food.push(" Veggie Toast")
        }
        if(ft%2!=0){
            final_food.push(" French Toast")
        }
        if(che%2!=0){
            final_food.push(" Cheesecake")
        }
        if(cup%2!=0){
            final_food.push(" Cupcake")
        }
    
    console.log(final_food);
    localStorage.setItem("final_list",final_food);
    console.log(container.childNodes);



    }
    
}
}



    while(container_children.length>=4){
        if(container_children.length>=4){
            container.removeChild(container_children[3]);
        }
    }
        

loading_flow();
home.addEventListener("click",home_generator);
menu.addEventListener("click",menu_generator);
order_online.addEventListener("click",order_online_generator);
locations.addEventListener("click",locations_generator);
contact.addEventListener("click",contact_generator);
    function home_generator(event){
        event.preventDefault();
        console.log(container_children.length);
        if(container_children.length>=4){
            container.removeChild(container_children[3]);
        }
        
        const home_container = document.createElement("div");
        home_container.classList.add("content");
        const p_element = document.createElement("p");
        p_element.classList.add("text_styling");
        p_element.innerText = "People visit restaurants on various occasions. Some like celebrating birthdays there, while others consider these places as the best ones for business meetings. Couples in love also go out on romantic dates there. Many individuals visit restaurants just to have a delicious meal, especially those who don’t like cooking. A lot of dishes are quite challenging to cook at home, without proficiency in the culinary art. Even if you are a good cook, you can still take a break from buying food, preparing a lunch and washing up. In fact, eating out is not only convenient, but also gives an opportunity to get fresh ideas about the dishes to cook at home."
        home_container.appendChild(p_element);
        container.appendChild(home_container);
        highlight();
        home.classList.add("marker");
    }
    function menu_generator(event){
        event.preventDefault();
        console.log(container_children.length);
        if(container_children.length>=4){
            container.removeChild(container_children[3]);
        }
        const menu_container = document.createElement("div");
        menu_container.classList.add("content");
        const img_element = document.createElement("img");
        img_element.src="images/menu.jpg"
        img_element.classList.add("menu_image");
       
        menu_container.appendChild(img_element);
        container.appendChild(menu_container);
        highlight();
        menu.classList.add("marker");
    }
    function order_online_generator(event){
        event.preventDefault();
        console.log(container_children.length);
        if(container_children.length>=4){
            container.removeChild(container_children[3]);
        }
      


        const order_online_container = document.createElement("div");
        order_online_container.classList.add("content");

const ordering_container=document.createElement("div");
ordering_container.classList.add("ordering_container")
        const ordering_div= document.createElement("div");
        ordering_div.classList.add("ordering_div");
        ordering_div.innerHTML='<p class="text_styling menu_category_headline">COFFEE</p><div class="menu_element"> <p class="text_styling menu_element_styling">Americano</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">Esperesso</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">Cappuccino</p> <button class="button"><i class="fa fa-plus"></i></button></div>'
        ordering_container.appendChild(ordering_div);
     
        const tea= document.createElement("div");
        tea.classList.add("ordering_div");
        tea.innerHTML='<p class="text_styling menu_category_headline">TEA</p><div class="menu_element"> <p class="text_styling menu_element_styling">Green</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">Jasmin</p> <button class="button"><i class="fa fa-plus"></i></button></div>'
        ordering_container.appendChild(tea);
      
        const mini_bites= document.createElement("div");
        mini_bites.classList.add("ordering_div");
        mini_bites.innerHTML='<p class="text_styling menu_category_headline">MINI BITES</p><div class="menu_element"> <p class="text_styling menu_element_styling">Panini</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">Veggie Toast</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">French Toast</p> <button class="button"><i class="fa fa-plus"></i></button></div>'
        ordering_container.appendChild(mini_bites);
        
        const desserts= document.createElement("div");
        desserts.classList.add("ordering_div");
        desserts.innerHTML='<p class="text_styling menu_category_headline">DESSERTS</p><div class="menu_element"> <p class="text_styling menu_element_styling">Cheesecake</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">Cupcake</p> <button class="button"><i class="fa fa-plus"></i></button></div>'
        ordering_container.appendChild(desserts);
  

order_online_container.appendChild(ordering_container);
const order_page=document.createElement("a");
order_page.classList.add("order")
order_page.href="order.html"
order_page.innerHTML='<p class="text_styling order_button">Order</p>';
order_online_container.appendChild(order_page);

container.appendChild(order_online_container);

        highlight();
        order_online.classList.add("marker");
    }

    function locations_generator(event){
        console.log(container_children.length);
        if(container_children.length>=4){
            container.removeChild(container_children[3]);
        }
        const locations_container = document.createElement("div");
        locations_container.classList.add("content");

        const map_container= document.createElement("div");
        map_container.classList.add("map");
        const map_container1=document.createElement("div");
        map_container1.classList.add("map_container");
        map_container1.innerHTML= '<iframe class = "map_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54900.518350452825!2d76.7189297016791!3d30.68232965993897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec1adad1a075%3A0x19661f24b53c2fd9!2sCaf%C3%A9%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1617983813710!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>     <p class="text_styling">Mohali</p>'

        map_container.appendChild(map_container1);

        const map_container2=document.createElement("div");
        map_container2.classList.add("map_container");
        map_container2.innerHTML='<iframe class = "map_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54900.518350452825!2d76.7189297016791!3d30.68232965993897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb4102c287f%3A0xeb05ee19ceec4984!2sCafe%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1617997589031!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>      <p class="text_styling" >Chandigarh</p>'

        map_container.appendChild(map_container2);

        const map_container3=document.createElement("div");
        map_container3.classList.add("map_container");
        map_container3.innerHTML='<iframe class = "map_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7585803198563!2d76.84727241513059!3d30.697067981649568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9369dc507807%3A0xbdda6bcc4295bd79!2sCaf%C3%A9%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1617998190079!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe> <p class="text_styling">Panchkula</p>'

        map_container.appendChild(map_container3);

        locations_container.appendChild(map_container);
        container.appendChild(locations_container);
        highlight();
        locations.classList.add("marker");
    }

    function contact_generator(event){
        event.preventDefault();
        console.log(container_children.length);
        if(container_children.length>=4){
            container.removeChild(container_children[3]);
        }
        const contact_container = document.createElement("div");
        contact_container.classList.add("content_contact");
        const mail_phone_container=document.createElement("div")
        const mail= document.createElement("a");
        mail.href="mailto:gaganpreet20009@gmail.com?Subject=You are best&body=I love coffee shop"
        mail.innerHTML='<i class="fa fa-envelope fa-5x mail"></i>'
        mail_phone_container.appendChild(mail)
        const phone= document.createElement("a");
        phone.href="tel:0000000000"
        phone.innerHTML='<i class="fa fa-phone fa-5x phn"></i>'
        mail_phone_container.appendChild(phone)
        const p_element = document.createElement("p");
        p_element.classList.add("text_styling");
        p_element.classList.add("contact_specific_styling");
        p_element.innerText = "FOLLOW US ON"
        const social_media_container=document.createElement("div")
        
        social_media_container.innerHTML='<a href="#"><i class="fa fa-facebook fa-5x icon_styling"></i></a> <a href="#"><i class="fa fa-instagram fa-5x icon_styling"></i></a> <a href="#"><i class="fa fa-twitter fa-5x icon_styling"></i></a>'
        contact_container.appendChild(mail_phone_container)
        contact_container.appendChild(p_element);
        contact_container.appendChild(social_media_container);
        container.appendChild(contact_container);
        highlight();
        contact.classList.add("contact_marker");
    
    }


    function highlight(){
        home.classList.remove("marker");
        menu.classList.remove("marker");
        order_online.classList.remove("marker");
        locations.classList.remove("marker");
        contact.classList.remove("contact_marker");
    }
}

function loading_flow(){
    const body=document.querySelector("body");
const home= document.querySelector(".home");
const menu= document.querySelector(".menu");
const order_online= document.querySelector(".order_online");
const locations= document.querySelector(".locations");
const contact= document.querySelector(".contact");
const container=document.querySelector(".content_div");
const container_children=document.querySelector(".content_div").childNodes;
    while(container_children.length>=4){
        if(container_children.length>=4){
            container.removeChild(container_children[3]);
        }
 
    }
    const home_container = document.createElement("div");
    home_container.classList.add("content");
    const p_element = document.createElement("p");
    p_element.classList.add("text_styling");
    p_element.innerText = "People visit restaurants on various occasions. Some like celebrating birthdays there, while others consider these places as the best ones for business meetings. Couples in love also go out on romantic dates there. Many individuals visit restaurants just to have a delicious meal, especially those who don’t like cooking. A lot of dishes are quite challenging to cook at home, without proficiency in the culinary art. Even if you are a good cook, you can still take a break from buying food, preparing a lunch and washing up. In fact, eating out is not only convenient, but also gives an opportunity to get fresh ideas about the dishes to cook at home."
    home_container.appendChild(p_element);
    container.appendChild(home_container);
    highlight();


    function highlight(){
        home.classList.remove("marker");
        menu.classList.remove("marker");
        order_online.classList.remove("marker");
        locations.classList.remove("marker");
        contact.classList.remove("contact_marker");
    }
}

let i=1;

const media=window.matchMedia("(max-width: 38em)");
if(media.matches){
    console.log("lkjhgfdsa");

    mobile();
    media.addEventListener("change",function(){
        console.log("zxcvbnm");
        console.log(i)
        if(i%2===0){
            console.log("mobile")
            location.reload();
            mobile();
        }
        else{
            console.log("web")
            location.reload();


web();
        }
        i++

    })
}

else{
   

    web();
    console.log("1234567890");


    media.addEventListener("change",function(){
        console.log("zxcvbnm");
        console.log(i)
        if(i%2===0){
            location.reload();

            console.log("web")
      
        web();
        }
        else{
            location.reload();
            console.log("mobile")
            mobile();
        }
        i++

    })
}




function mobile(){
   
    const home= document.querySelector(".home");
    const menu= document.querySelector(".menu");
    const order_online= document.querySelector(".order_online");
    const locations= document.querySelector(".locations");
    const contact= document.querySelector(".contact");
    const container=document.querySelector(".content_div");
    const body=document.querySelector("body");
const container_children=document.querySelector(".content_div").childNodes;



const selected_food=[];
const food=[];
const final_food=[];
container.addEventListener("click",function(e){
    const order_submission= document.querySelector(".order");

    e.stopPropagation();
    const item = e.target;

    if (item.classList[1] === "fa-plus" || item.classList[0] === "button") {
        if (item.classList[1] === "fa-plus") {
            const button_div = item.parentElement;
            const food_div = button_div.parentElement;
            selected_food.push(food_div.innerHTML);
            food_div.classList.toggle("selected")
        }
        else {
            const food_div = item.parentElement;
            food_div.classList.toggle("selected")
            selected_food.push(food_div.innerHTML);


        }
    
    
    }
    order_submission.addEventListener("click",order)

}
)
function order(){
if(selected_food.length>0){
  
var i;
var j;
var am=0;
var esp=0;
var cap=0;
var gr=0;
var jas=0;
var pan=0;
var vt=0;
var ft=0;
var che=0;
var cup=0;
    for (i in selected_food){
   
    if (selected_food[i].includes("Americano")){
        food.push("Americano");
        am++;
    }
    else if (selected_food[i].includes("Esperesso")){
        food.push("Esperesso");
        esp++;
    }
    else if (selected_food[i].includes("Cappuccino")){
        food.push("Cappuccino");
        cap++;
    }
    else if (selected_food[i].includes("Green")){
        food.push("Green");
        gr++;
    }
    else if (selected_food[i].includes("Jasmin")){
        food.push("Jasmin");
        jas++;
    }
    else if (selected_food[i].includes("Panini")){
        food.push("Panini");
        pan++;
    }
    else if (selected_food[i].includes("Veggie Toast")){
        food.push("Veggie Toast");
        vt++;
    }
    else if (selected_food[i].includes("French Toast")){
        food.push("French Toast");
        ft++;
    }
    else if (selected_food[i].includes("Cheesecake")){
        food.push("Cheesecake");
        che++;
    }
    else if (selected_food[i].includes("Cupcake")){
        food.push("Cupcake");
        cup++;
    }

    }
    food_list();
    function food_list(){
        

        if(am%2!=0){
            final_food.push("Americano")
        }
        if(esp%2!=0){
            final_food.push(" Esperesso")
        }
        if(cap%2!=0){
            final_food.push(" Cappuccino")
        }
        if(gr%2!=0){
            final_food.push(" Green")
        }
        if(jas%2!=0){
            final_food.push(" Jasmin")
        }
        if(pan%2!=0){
            final_food.push(" Panini")
        }
        if(vt%2!=0){
            final_food.push(" Veggie Toast")
        }
        if(ft%2!=0){
            final_food.push(" French Toast")
        }
        if(che%2!=0){
            final_food.push(" Cheesecake")
        }
        if(cup%2!=0){
            final_food.push(" Cupcake")
        }
    
    console.log(final_food);
    localStorage.setItem("final_list",final_food);
    console.log(container.childNodes);

    }
    
}
}



    while(container_children.length>=4){
        if(container_children.length>=4){
            container.removeChild(container_children[3]);
        }  
        console.log("web_cleaning");
    }


    const home_container = document.createElement("div");
    home_container.classList.add("content_home");
    const p1_element = document.createElement("p");
    p1_element.classList.add("text_styling");
    p1_element.innerText = "People visit restaurants on various occasions. Some like celebrating birthdays there, while others consider these places as the best ones for business meetings. Couples in love also go out on romantic dates there. Many individuals visit restaurants just to have a delicious meal, especially those who don’t like cooking. A lot of dishes are quite challenging to cook at home, without proficiency in the culinary art. Even if you are a good cook, you can still take a break from buying food, preparing a lunch and washing up. In fact, eating out is not only convenient, but also gives an opportunity to get fresh ideas about the dishes to cook at home."
    home_container.appendChild(p1_element);
    container.appendChild(home_container);

    const menu_container = document.createElement("div");
    menu_container.classList.add("content_menu");
    const menu_headline=document.createElement("p");
    menu_headline.classList.add("text_styling");
    menu_headline.classList.add("headline")
    menu_headline.innerText="MENU"
menu_container.appendChild(menu_headline);
    const img_element = document.createElement("img");
        img_element.src="images/menu_mob.jpg"
        img_element.classList.add("menu_image");
        menu_container.appendChild(img_element);
        container.appendChild(menu_container);


const order_online_container = document.createElement("div");
    order_online_container.classList.add("content_order_online");
    const order_online_headline=document.createElement("p");
    order_online_headline.classList.add("text_styling")
    order_online_headline.classList.add("headline")
    order_online_headline.innerText="ORDER ONLINE"
    order_online_container.appendChild(order_online_headline);


const ordering_container=document.createElement("div");
ordering_container.classList.add("ordering_container")
    const ordering_div= document.createElement("div");
    ordering_div.classList.add("ordering_div");
    ordering_div.innerHTML='<p class="text_styling menu_category_headline">COFFEE</p><div class="menu_element"> <p class="text_styling menu_element_styling">Americano</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">Esperesso</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">Cappuccino</p> <button class="button"><i class="fa fa-plus"></i></button></div>'
    ordering_container.appendChild(ordering_div);
 
    const tea= document.createElement("div");
    tea.classList.add("ordering_div");
    tea.innerHTML='<p class="text_styling menu_category_headline">TEA</p><div class="menu_element"> <p class="text_styling menu_element_styling">Green</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">Jasmin</p> <button class="button"><i class="fa fa-plus"></i></button></div>'
    ordering_container.appendChild(tea);
  
    const mini_bites= document.createElement("div");
    mini_bites.classList.add("ordering_div");
    mini_bites.innerHTML='<p class="text_styling menu_category_headline">MINI BITES</p><div class="menu_element"> <p class="text_styling menu_element_styling">Panini</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">Veggie Toast</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">French Toast</p> <button class="button"><i class="fa fa-plus"></i></button></div>'
    ordering_container.appendChild(mini_bites);
    
    const desserts= document.createElement("div");
    desserts.classList.add("ordering_div");
    desserts.innerHTML='<p class="text_styling menu_category_headline">DESSERTS</p><div class="menu_element"> <p class="text_styling menu_element_styling">Cheesecake</p> <button class="button"><i class="fa fa-plus"></i></button></div><div class="menu_element"> <p class="text_styling menu_element_styling">Cupcake</p> <button class="button"><i class="fa fa-plus"></i></button></div>'
    ordering_container.appendChild(desserts);


order_online_container.appendChild(ordering_container);
const order_page=document.createElement("a");
order_page.classList.add("order")
order_page.href="order.html"
order_page.innerHTML='<p class="text_styling order_button">Order</p>';
order_online_container.appendChild(order_page);

container.appendChild(order_online_container);

 




    const locations_container = document.createElement("div");
    locations_container.classList.add("content_locations");
    const locatioms_headline=document.createElement("p");
    locatioms_headline.classList.add("text_styling")
    locatioms_headline.classList.add("headline")
    locatioms_headline.innerText="LOCATIONS"
    locations_container.appendChild(locatioms_headline);
    const map_container= document.createElement("div");
    map_container.classList.add("map");
    const map_container1=document.createElement("div");
    map_container1.classList.add("map_container");
    map_container1.innerHTML= '<iframe class = "map_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54900.518350452825!2d76.7189297016791!3d30.68232965993897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec1adad1a075%3A0x19661f24b53c2fd9!2sCaf%C3%A9%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1617983813710!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>     <p class="text_styling">Mohali</p>'
    map_container.appendChild(map_container1);

    const map_container2=document.createElement("div");
    map_container2.classList.add("map_container");
    map_container2.innerHTML='<iframe class = "map_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54900.518350452825!2d76.7189297016791!3d30.68232965993897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb4102c287f%3A0xeb05ee19ceec4984!2sCafe%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1617997589031!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>      <p class="text_styling" >Chandigarh</p>'

    map_container.appendChild(map_container2);

    const map_container3=document.createElement("div");
    map_container3.classList.add("map_container");
    map_container3.innerHTML='<iframe class = "map_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7585803198563!2d76.84727241513059!3d30.697067981649568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9369dc507807%3A0xbdda6bcc4295bd79!2sCaf%C3%A9%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1617998190079!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe> <p class="text_styling">Panchkula</p>'

    map_container.appendChild(map_container3);

    locations_container.appendChild(map_container);
    container.appendChild(locations_container);


const contact_container = document.createElement("div");
    contact_container.classList.add("content_contact");
    const contact_headline=document.createElement("p");
    contact_headline.classList.add("text_styling")
    contact_headline.classList.add("headline")
    contact_headline.innerText="CONTACT US"
    contact_container.appendChild(contact_headline);
    const mail_phone_container=document.createElement("div")
    mail_phone_container.classList.add("social_media_container_styling")
    const mail= document.createElement("a");
    mail.href="mailto:gaganpreet20009@gmail.com?Subject=You are best&body=I love coffee shop"
    mail.innerHTML='<i class="fa fa-envelope fa-3x mail"></i>'
    mail_phone_container.appendChild(mail)
    const phone= document.createElement("a");
    phone.href="tel:0000000000"
    phone.innerHTML='<i class="fa fa-phone fa-3x phn"></i>'
    mail_phone_container.appendChild(phone)
    const p_element = document.createElement("p");
    p_element.classList.add("text_styling");
    p_element.classList.add("contact_specific_styling");
    p_element.innerText = "FOLLOW US ON"
    const social_media_container=document.createElement("div")
    social_media_container.classList.add("social_media_container_styling")
  
    social_media_container.innerHTML='<a href="#"><i class="fa fa-facebook fa-3x icon_styling"></i></a> <a href="#"><i class="fa fa-instagram fa-3x icon_styling"></i></a> <a href="#"><i class="fa fa-twitter fa-3x icon_styling"></i></a>'
    contact_container.appendChild(mail_phone_container)
    contact_container.appendChild(p_element);
    contact_container.appendChild(social_media_container);
    container.appendChild(contact_container);

const h=document.querySelector(".content_home");
const m=document.querySelector(".content_menu");
const oo=document.querySelector(".content_order_online");
const l=document.querySelector(".content_locations");
const c=document.querySelector(".content_contact");


home.addEventListener("click",home_)
function home_(){
    mobile_highlight()
    home.classList.add("marker")
    h.scrollIntoView({
        behavior:"smooth"
    });
}
menu.addEventListener("click",menu_)
function menu_(){
    mobile_highlight()
    menu.classList.add("marker")
    m.scrollIntoView({
        behavior:"smooth"
    });
}

order_online.addEventListener("click",order_online_)
function order_online_(){
    mobile_highlight()
    order_online.classList.add("marker")
    oo.scrollIntoView({
        behavior:"smooth"
    });
}

locations.addEventListener("click",locations_)
function locations_(){
    mobile_highlight()
    locations.classList.add("marker")
    l.scrollIntoView({
        behavior:"smooth"
    });
}

contact.addEventListener("click",contact_)
function contact_(){
    mobile_highlight()
    contact.classList.add("contact_marker")
    

    c.scrollIntoView({
        behavior:"smooth"

    });
}

function mobile_highlight(){
    home.classList.remove("marker");
    menu.classList.remove("marker");
    order_online.classList.remove("marker");
    locations.classList.remove("marker");
    contact.classList.remove("contact_marker");
}

}

