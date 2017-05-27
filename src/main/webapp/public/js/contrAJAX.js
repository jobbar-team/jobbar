function setEmpl(){
    var n = document.getElementById("em").value;
    var arr = n.split(" ");
    var name = arr[0];
    if(arr.length > 1){
        var surname = arr[1];
    }
    $.ajax({
        type: 'GET',
        url: '/contracts/?name='+name+'&surname='+surname,
        success: function(data){
			console.log(data);
            document.getElementById("form").style.display="block";
            data.forEach(function(element) {
                document.getElementById("name").innerHTML=element.name;
                document.getElementById("surname").innerHTML=element.surname;
                document.getElementById("position").innerHTML=element.position;
                if(element.contract == null){
                    document.getElementById("details").style.display="none";
                    document.getElementById("negation").style.display="block";
                }else{
                    document.getElementById("details").style.display="block";
                    document.getElementById("negation").style.display="none";
                }
            }, this);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown);
      	}
    });
};

function openForm(){
    document.getElementById("contrForm").style.display="block";
}
function addContract(){
    
}