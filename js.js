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