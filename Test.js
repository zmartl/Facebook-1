<script>
    FB.api('/me', {fields: 'last_name'}, function(response) {
    console.log(response);
  });
</script>

    FB.api("/me/posts?fields=created_time,message,story,description,picture&locale=de&access_token=" + accessToken,
          function (response) {
              document.getElementById('header').innerHTML += '<h1>Deine Facebook-Posts</h1>';  
              _.forEach(response.data, function(value) {
                if(value.message == null){ 
                  value.message = "";
                }  
                if(value.story == null){ 
                  value.story = "";
                } 
                if(value.description == null){ 
                  value.description = "";
                }      
                  document.getElementById('log').innerHTML += '<div class="jumbotron"><small>' + moment(value.created_time).format('DD.MM.YYYY - HH:mm') + '</small><h3>' + value.story + '</h3><p>' + value.message + '</p><p>' + value.description + '</p><img src="' + value.picture + '"/></div>';               
                   NProgress.inc()
              });
              NProgress.done();
          }
        );