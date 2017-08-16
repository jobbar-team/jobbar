function getAll(){
    $.ajax({
        type: 'GET',
        url: '/employees/',
        success: function(data){
            console.log('Successful request.');
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown);
      }         
    });
};

function deleteRow(p,em){
    //console.log(em);
    //console.log(em[p.parentNode.parentNode.rowIndex-1].value);
    var empl;
    if(em.constructor.name==='HTMLCollection'){
        empl = em[p.parentNode.parentNode.rowIndex-1].value;
    }else{
        empl=em.value;
    }
    $.ajax({
        type: 'DELETE',
        url: '/employees/delete/'+empl,
        success: function(data){
            location.reload();
        }
    });
};

function edit(p,em){
    var empl;
    if(em.constructor.name==='HTMLCollection'){
        empl = em[p.parentNode.parentNode.rowIndex-1].value;
    }else{
        empl=em.value;
    }
    
    $.ajax({
        type: 'GET',
        url: '/employees/empl/'+empl,
        success: function(data){
            console.log('Successful request.' + data);
            location.replace('/employees/empl/'+ empl);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown);
      }         
    });
};

function saveEdited(){
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    $.ajax({
        type: 'PUT',
        url: '/employees/update/'+id, // + id,
        data:{
            name: $('[name="name"]').val(),
            surname: $('[name="surname"]').val(),
            position: $('[name="position"]').val(),
            birth: $('[name="birth"]').val()
        },
        success: function(data){
            console.log('Great job!');
            location.replace('/employees/');
        },
        error: function(jqXHR,textStatus){
            console.log(textStatus);
        }
    });
};

function create(){
    $.ajax({
        type: 'POST',
        url: '/employees/empl',
        dataType: "json",
        data: {
            name: $('[name="name"]').val(),
            surname: $('[name="surname"]').val(),
            position: $('[name="position"]').val(),
            birth: $('[name="birth"]').val(),
            contract: {}
        },
        success: function(data){
            console.log('Employee is created.');
            location.replace('/employees/');
        },
        error: function(jqXHR,textStatus,errorThrown){
            console.log(jqXHR.status);
            console.log(textStatus);
        }
    });
};


function showHide(){
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
        if(url=="/employees/empl"){
            document.getElementById('create_button').style.display = 'block';
            document.getElementById('edit_button').style.display = 'none';
        }if(url=="/employees/empl/" +id){
            document.getElementById('create_button').style.display = 'none';
            document.getElementById('edit_button').style.display = 'block';
        }
};
showHide();

