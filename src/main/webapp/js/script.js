var $button = $("#submit");

$button.on('click', function(){
    var siteName = $("#inputSite").val();
    var hours = $("#inputHours").val();
    var url = "/stalker/api/users/suspended?site="+siteName+"&hours="+hours;
    $.getJSON(url,function (data) {
        $output = ""
        $i=0
        for(item in data["items"]){
            var  userlink = '<a href="'+ item['link']+'">'+ item['username']+'</a>';
            $i+=1;
            $output+= '<div class="row"><div class="col-md-2">'+$i+'</div><div class="col-md-10">'+ userlink+'</div></div>'
        }
        $output+="<p>Quota remaining: "+data['quota']+" </p>"
        $(".output").html($output);
    })
})