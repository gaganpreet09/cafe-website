var final_list=localStorage.getItem("final_list");
console.log(final_list);
// for (i in v){
// console.log(i);
// if(v[i]===","){
//     v[i]=" ";
//     console.log("llllll")
// }
// console.log(v[i])
// }

required_info();
function required_info(){
const info_container= document.querySelector(".content_");
const headline=document.createElement("p");
headline.classList.add("text_styling");
headline.classList.add("headline")
headline.innerText="Your Order"
const order=document.createElement("p");
order.classList.add("text_styling");
order.classList.add("centering_order")
order.innerText=final_list;
info_container.appendChild(headline);
info_container.appendChild(order);
const form=document.createElement("form")
form.classList.add("form");
form.innerHTML='<label class="text_styling form_specific" for="f1name">First name:</label><br> <input class="input" type="text" name="f1name"><br> <label class="text_styling form_specific" for="f2name">Last name:</label><br> <input class="input" type="text" name="f2name"><br> <label class="text_styling form_specific" for="fname">Phone No.:</label><br> <input class="input" type="text" name="f3name"><br> <label class="text_styling form_specific" for="f3name">Address:</label><br> <input class="input" type="text" name="fname"><br><br> <input class="submit" type="submit" value="Submit">'
info_container.appendChild(form);
}