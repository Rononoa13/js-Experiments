function clean(){
  document.form.textview.value = null;

}

function insert(num) 
{
  document.form.textview.value = document.form.textview.value + num;

  
    //document.getElementById('demo').value;

    //alert("Hello! I am an alert box!");

    //return num;
    
}

function back()
{
  let i = document.form.textview.value;
  document.form.textview.value = i.substring(0,i.length-1);
}


//document.getElementById('demo').onclick = insert;
