for (var i = 0; i < teamMembers.length; i++) {
       document.getElementsByClassName("kittyname")[i].innerHTML = teamMembers[i].name;
       document.getElementsByClassName("kittymail")[i].innerHTML = teamMembers[i].email;
   }