const parametersSection = document.getElementsByName("parameters");
const everyParams = document.getElementsByName("parameter");

const newbtn = document.createElement("button");
newbtn.setAttribute("type","button");
newbtn.innerHTML = "全選択/全解除";

newbtn.onclick = () => {
  everyParams.forEach(function(element){
    element.childNodes[1].checked = element.childNodes[1].checked == false
  })
}

parametersSection[0].appendChild(newbtn);
