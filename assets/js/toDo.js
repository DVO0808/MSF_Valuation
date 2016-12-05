//$("#sortable").sortable();
//$("#sortable").disableSelection();

//countTodos();

// all done btn
$("#checkAll").click(function(){
    AllDone();
});

//create todo
$('.add-todo').on('keypress',function (e) {
      e.preventDefault
      if (e.which == 13) {
           if($(this).val() != ''){
           var todo = $(this).val();
//HERE LOLA
          addToDoList(todo);
          $('.add-todo').val('');
          setFBList();
            //createTodo(todo); 
            //countTodos();
           }else{
               // some validation
           }
      }
      
      
});
// mark task as done
$('.todolist').on('change','#sortable li input[type="checkbox"]',function(){
    if($(this).prop('checked')){
        var doneItem = $(this).parent().parent().find('label').text();
        $(this).parent().parent().parent().addClass('remove');
        done(doneItem);
        countTodos();
    }
});

//delete done task from "already done"
$('.todolist').on('click','.remove-item',function(){
    removeItem(this);
});

// count tasks
function countTodos(){
    var count = $("#sortable li").length;
    $('.count-todos').html(count);
};

//HERE LOLA
function updateUIGetToDoList(list){
  console.log("Lola something is working");
    $("#sortable").empty();
    list.forEach(function (item) {
        addTask(item);
    });
    if (list.length == 0) {
        $(".count-todos").html('');
    } else {
        $(".count-todos").html(list.length);   
    }
};




 

function addTask(item) {
      var markup = '<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" />'+ item +'</label></div></li>';
    $('#sortable').append(markup)
}



//create task
function createTodo(text){
    var markup = '<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" />'+ text +'</label></div></li>';
    //$('#sortable').append(markup);

    //HERE LOLA

    addToDoList(markup);

    $('.add-todo').val('');


}

//mark task as done
function done(doneItem){

  addToDoListCompleted(doneItem);
  console.log(doneItem + "I'm done");
    $('.remove').remove();
    setFBListCompleted();
    setFBListRemove();
}

 function updateUIGetToDoListRemoved (list){
    $('#done-items').empty();
  list.forEach(function (item) {
        removeTask(item);
    });


 }


 function removeTask(item){
  var done = item;
    var markup = '<li>'+ done +'<button class="btn btn-default btn-xs pull  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>';
    $('#done-items').append(markup);
 }



//mark all tasks as done
function AllDone(){
    var myArray = [];

    $('#sortable li').each( function() {
         myArray.push($(this).text());   
    });
    
    // add to done
    for (i = 0; i < myArray.length; i++) {
        $('#done-items').append('<li>' + myArray[i] + '<button class="btn btn-default btn-xs pull  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
    }
    
    // myArray
    $('#sortable li').remove();
    countTodos();
}

//remove done task from list
function removeItem(element){
    $(element).parent().remove();
}
