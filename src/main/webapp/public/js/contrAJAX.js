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
            document.getElementById("form").style.display="block";
            data.forEach(function(element) {
                document.getElementById("name").innerHTML=element.name;
                document.getElementById("surname").innerHTML=element.surname;
                document.getElementById("position").innerHTML=element.position;
                document.getElementById("empl_id").value = element._id;
                document.getElementById("birth").value = element.birth;
                if(typeof element.contract == "undefined"){
                    document.getElementById("details").style.display="none";
                    document.getElementById("negation").style.display="block";
                }else{
                    document.getElementById("details").style.display="block";
                    document.getElementById("negation").style.display="none";
                    document.getElementById("type").innerHTML=element.contract.type;
                    document.getElementById("sallary").innerHTML=element.contract.sallary;
                    document.getElementById("contractDate").innerHTML=element.contractDate;
                    document.getElementById("duration").innerHTML = element.contract.duration;
                }
            }, this);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown);
      	}
    });
};

function openForm(num){
    if(num === 1){
        document.getElementById("contrForm").style.display="block";
        document.getElementById("existingForm").style.display="none";
    }else if(num === 2){
        document.getElementById("existingForm").style.display="block";
        document.getElementById("contrForm").style.display="none";
    }
    
}

function durContr(){
    var ty = document.getElementById("input_type").value;
    var dur = document.getElementById("input_duration");
    if(ty === 'permanent'){
        dur.disabled = "disabled";
    }else{
        dur.disabled = "";
    }
}

function addContract(){
    var ty = document.getElementById("input_type").value;
    var dur = null;
    if(ty === 'permanent'){
        dur = null;
    }else{
        dur = document.getElementById("input_duration").value;
    }
    var contract = {
                type : ty,
                sallary : document.getElementById("input_sallary").value,
                duration : dur
    }
    $.ajax({
        type: 'POST',
        url: '/contracts/contr',
        data: contract,
        success: function(data,status){
            document.getElementById("contrForm").style.display="none";
            console.log('Success add contract in db.');
        },
        error: function(error){
            console.log(error);
        }
    });
}

function setOption(elem){
    var node = document.createElement("OPTION");
    var option = document.getElementById("contract_type").appendChild(node);
    option.value = elem._id;
    option.innerHTML = elem.type + ', ' + elem.sallary + '€/annual' + ', ' + elem.duration;
}

function setContr(){
    $.ajax({
        type: 'GET',
        url: '/contracts/get',
        success: function(data){
            var myNode = document.getElementById("contract_type");
            var fc = myNode.firstChild;
            while(fc) {
                myNode.removeChild( fc );
                fc = myNode.firstChild;
            }
            data.forEach(function(elem){
                setOption(elem);
            });
        },
        error: function(err){
            console.log('error is: ' + err);
        }
    });
}
var objEmpl = null;
function addContractToEmpl(){
    var e = document.getElementById("contract_type");
    var id = e.options[e.selectedIndex].value;
    var emplId = document.getElementById("empl_id").value;
    $.ajax({
        type: 'GET',
        url: '/employees/getone/' + emplId,
        success: function(data){
            objEmpl = data;
            objEmpl.contract = id;
            document.getElementById("confirm").style.display="block";
            document.getElementById("cancel").style.display = "block";
            document.getElementById("add").style.display = "none";
            document.getElementById("contract_type").style.display = "none";
        },
        error: function(err){
            console.log("error is " + err);
        }
    })
};

function confirmContract(){
    if(objEmpl == null){
        return;
    }
    objEmpl.contractDate = new Date();
    $.ajax({
            type: 'PUT',
            url: '/employees/update/' + objEmpl._id,
            data: objEmpl,
            success: function(data,status){
                console.log('Contract is added!');
                location.reload;
                setEmpl();
                cancelConfirmation();
            },
            error: function(err){
                console.log('Error is: ' + err);
            }
        })
};
function cancelConfirmation(){
    objEmpl = null;
    document.getElementById("confirm").style.display = "none";
    document.getElementById("cancel").style.display = "none";
    document.getElementById("add").style.display = "block";
    document.getElementById("contract_type").style.display = "block";
}