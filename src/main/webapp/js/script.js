var $button = $("#submit");

$button.on('click', function(){
    $(".output").html("");
    var siteName = $("#inputSite").val();
    var hours = $("#inputHours").val();
    var url = "/stalker/api/users/suspended?site="+siteName+"&hours="+hours;
    $.getJSON(url,function (data) {
        $output = ""
        $i=0
        if (data["items"].length==0){
            $output+= "<p>No suspended users found</p>";
        }
        for($i=0; $i<data["items"].length; $i++){
            var item = data["items"][$i]
            var  userlink = '<a href="'+ item['link']+'">'+ item['username']+'</a>';
            $output+= '<div class="row"><div class="col-md-4">'+($i+1)+'</div><div class="col-md-8">'+ userlink+'</div></div>'
        }
        $output+="<br /><br /><p>Quota remaining: "+data['quota']+" </p>"
        $(".output").html($output);
    })
})