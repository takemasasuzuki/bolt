function changeDisplay(){
  var str = document.getElementsByClassName("header__right__btn")[0];
  if(str.style.display == "none"){
    str.style.display = "block";
  }else{
    str.style.display = "none";
  }
};