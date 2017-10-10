console.log('script sourced');
$(document).ready(readyNow);

function readyNow(){
  console.log('ready');
  $('#submit').on('click',submitClick);
  appendDom();

}

function submitClick(){
  console.log('click');
  appendTable();
  $('.salaryCost').append('<h1>'+ Math.round(sum) +'</h1>');
  $('input').val('');

  // console.log(id=sum);
}
function appendDom(){
  $header = $('<h1>List of Employees</h1>');
  $('.bodyContainer').append($header);


  $table = $('<table></table>');
  $table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID Number</th><th>Job Title</th><th>Annual Salary<th></thead>');



  $('.inputContainer').append($table);
}
function appendTable(){
  $('.bodyContainer').append('<thead><tr><th>'+  $("#firstName").val()+
  '</th><th>' + $('#lastName').val() +'</th><th>' + $('#IDnumber').val() +
  '</th><th>' + $('#jobTitle').val() + '</th><th id="salaryval">' +
  $('#anualSalary').val() + '</th></tr></thead>');
  id=salaryval = $('#anualSalary').val();

  salarys.push(parseInt(id=salaryval));
  console.log(salarys);

  $tbody = $('<tbody id="tableBody"></tbody>');
  $table.append($tbody);
  calSum();

}
//this whole section dosent work and im not sure why.

function calSum(){


for(var i =0; i< salarys.length; i+=1 ){
  sum += salarys[i] ;

  console.log(sum);
  break;
}
sum /= 12;
}
var salarys=[];
var sum =0;
