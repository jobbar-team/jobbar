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
        url: '/employees/update/'+id, // + id
        success: function(data){
            console.log('Great job!');
            location.replace('/employees/');
        },
        error: function(jqXHR,textStatus){
            console.log(textStatus);
        }
    });
};
