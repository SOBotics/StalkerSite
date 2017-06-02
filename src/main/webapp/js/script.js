var $button = $("#submit");

$button.on('click', function(){
    var siteName = $("#inputSite").val();
    var hours = $("#inputHours").val();
    var url = "/stalker/api/users/suspended?site="+siteName+"&hours="+hours;
    $.getJSON(url,function (data) {
        $output = ""
        $i=0
        for($i=0; $i<data["items"].length; $i++){
            var item = data["items"][$i]
            var  userlink = '<a href="'+ item['link']+'">'+ item['username']+'</a>';
            $output+= '<div class="row"><div class="col-md-2">'+($i+1)+'</div><div class="col-md-10">'+ userlink+'</div></div>'
        }
        $output+="<p>Quota remaining: "+data['quota']+" </p>"
        $(".output").html($output);
    })
})