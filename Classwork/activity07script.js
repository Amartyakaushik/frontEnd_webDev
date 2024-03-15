$(document).ready(function(){
    $.getJSON('activity07Data.Json',function(data){
        $.each(data,function(index,user){
            $('#user-table tbody').append('<tr><td>'+user.registrationno+ '</td><td>' + user.name + '</td><td>' + user.email + '</td><td>' + user.phone + '</td><td>'  + user.address + '</td></tr>');
        });
    });
});