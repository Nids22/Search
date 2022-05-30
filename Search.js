document.getElementById("b1").onclick=func;

function func(){

var search=document.getElementById("i1").value;
var pn=document.getElementById("i2").value;
var ps=document.getElementById("i3").value;
var check=document.getElementById("choose").value.toLowerCase();


// const myArray =search.split(" ");
// const t_join="hello";


// for(let i=0;i<myArray.length;i++){
//    if(i<myArray.length-1){
       
//       t_join.concat(myArray[i],"%20");
//    }else{
//     t_join.concat(myArray[i]);

//    }
// }
t_join=search.replace(" ","%20");
console.log(t_join);

url='https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q='+t_join+'&pageNumber='+pn+'&pageSize='+ps+'&autoCorrect='+check;
func1(url);
}



function func1(url){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
		'X-RapidAPI-Key': '5fb6cd0eaemsh07d74ba41c1436bp17ee3bjsnc0ce62eebc04'
	}
};

fetch(url, options)
	.then(response => response.json())
	.then(response => {
        var res=response["value"];
        const data=[];

        for(let i=0;i<res.length;i++){
           data.push(response["value"][i]["url"]);
        }

        let list = document.getElementById("myList");
  
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  
  list.appendChild(li);
})
        
        // document.getElementById("myList").innerHTML=data;
       console.log(response);
       
    })
	.catch(err => console.error(err));
}