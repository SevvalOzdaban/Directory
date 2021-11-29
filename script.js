var no = 0;
var selectedRowNumber;
var newName, newLastname, newNumber, len;

function hideButton() {
  document.getElementById("editBut").style.display = "none";
  document.getElementById("submit").style.display = "block";
  $("#exampleModal .close").click();
  $(".modal-body input").val(" ");
}

function addUser() {
  var name = $("#firstName").val();
  var lastname = $("#lastName").val();
  var pnumber = $("#pNumber").val();
  no++;
  var markup = '<tr>'
    + '<td id = "name-' + no + '">' + name + '</td>'
    + '<td id = "lastname-' + no + '">' + lastname + '</td>'
    + '<td id = "pnumber-' + no + '">' + pnumber + '</td>'
    + "<td><button type='button' class='btn btn-warning' onclick='editModal(" + no + ")' data-toggle='modal' data-target='#exampleModal'>EDIT </button></td>"
    + "<td><button type='button' class='btn btn-danger' onclick='delUser()'>DELETE </button></td>"
    + '</tr>';
  $("table tbody").append(markup);

  //reset and close modal
  $("#exampleModal .close").click();
  $(".modal-body input").val(" ");
  hideButton();
}

function delUser() {  
      //Delete user
      $("#table").on('click', '.btn-danger', function () {
        $(this).closest('tr').remove();
    });}
function editModal(no) {
  //change edit and save buttons
  document.getElementById("editBut").style.display = "block";
  document.getElementById("submit").style.display = "none";
  $("#exampleModalLabel").text("EDIT PERSON");

  //get values which are edit
  var name = $("#name-" + no).text();
  var lastname = $("#lastname-" + no).text();
  var pnumber = $("#pnumber-" + no).text();
  //fill modal with that values
  $("#firstName").val(name);
  $("#lastName").val(lastname);
  $("#pNumber").val(pnumber);
  selectedRowNumber = no;

}

function edit() {
  //get new values from user
  newName = $("#firstName").val();
  newLastname = $("#lastName").val();
  newNumber = $("#pNumber").val();
  //add new values to table 
  $("#name-" + selectedRowNumber).text(newName);
  $("#lastname-" + selectedRowNumber).text(newLastname);
  $("#pnumber-" + selectedRowNumber).text(newNumber);
  //close and reset model
  $("#exampleModal .close").click();
  $(".modal-body input").val(" ");


}
