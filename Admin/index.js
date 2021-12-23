
$(function () {
  var operation = "C"; 
  var selected_index = -1; 
  var tblPersons = localStorage.getItem("tblPersons"); 
  tblPersons = JSON.parse(tblPersons); 
  if (tblPersons === null)
      tblPersons = [];

  function Create() {
    var person = JSON.stringify({
       Name: $("#Name").val(),
        Email: $("#Email").val(),
        Password: $("#Password").val(),

    }); 
    tblPersons.push(person);
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
    alert("Data has been stored"); 
    return true;
  }

  function Edit() {
    tblPersons[selected_index] = JSON.stringify({
        Name: $("#Name").val(),
        Email: $("#Email").val(),
        Password: $("Password").val(),
    });
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
    alert("The data has been edited"); 
    return true;
  }

  function Delete() {
    tblPersons.splice(selected_index, 1); 
    
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
     
  }

  function List() {
    $("#tblList").html("");
    $("#tblList").html(
            "<thead>" +
            "<tr>" +                
            "<th>Name</th>" +
            "<th>Email</th>" +
            "<th>Password</th>" +
            "<th>Edit</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
            ); 
    for (var i in tblPersons) {
        var per = JSON.parse(tblPersons[i]);
        $("#tblList tbody").append("<tr>" +                    
                "<td>" + per.Name + "</td>" +
                "<td>" + per.Email + "</td>" +
                "<td>" + per.Password + "</td>" +                                   
                 "<td><img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537879/edit_n51oto.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537882/delete_ntuxjl.png' alt='Delete" + i + "' class='btnDelete'/></td>" +                  
                
                "</tr>"
                );
    } 
  }

  $("#frmPerson").bind("submit", function () {
    if (operation === "C")
        return Create();
    else
        return Edit();
  }); 
  
  List();

  $(".btnEdit").bind("click", function () {
    operation = "E"; //
    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
    var per = JSON.parse(tblPersons[selected_index]); 
    $("#Name").val(per.Name);
    $("#Email").val(per.Email);
    $("#Password").val(per.Password);

  
  });

  $(".btnDelete").bind("click", function () {
  
    selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
    Delete(); 
    List(); 
  });
});