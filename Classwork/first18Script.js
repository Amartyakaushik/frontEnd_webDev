$(document).ready(function(){
    $.getJSON('data.Json',function(data){
        $.each(data,function(index,user){
            $('#user-table tbody').append('<tr><td>'+user.id + '</td><td>' + user.name + '</td><td>' + user.age + '</td><td>' + user.Dep + '</td><td>'  + user.Add + '</td></tr>');
        });
    });
});