function newItem(){


//Add a new item
  let list = $('#list');
  let li = $('<li></li>');
  let textInput = document.createTextNode($('#input').val());
  console.log(textInput);
  li.append(textInput);
  console.log(li);

  if ($('#input').val() === '') {
    alert("You must write something!");
  } else {
    list.append(li);
    console.log('added to list');
    console.log(list);
  }

 //Cross out an item
  li.on('dblclick', function (){
    li.toggleClass('strike');
  });

 //Delete button 
  let crossOutButton = $('<crossOutButton>X</crossOutButton>');  //document.createElement('crossOutButton');
 	li.append(crossOutButton);

 	crossOutButton.on('click', function() {
    li.hide()
  });
 //Add class to delete from list [Display:none] from the css:

 //Reordering items
   $('#list').sortable();
   $('input').val('');
}

$('#input').keypress(function(e) {
  if (e.keyCode == '13') {
    e.preventDefault();
    newItem();
    $('#input').val('');
  }
});