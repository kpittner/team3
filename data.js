var templates = {};

templates.account = [
  '<div class="dropdown" data-id="<%=_id%>">',
    '<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true" name="<%=username%>"',
      '<span class="userNameButton"><%=username%></span>',
    '</button>',
    '<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">',
      '<li role="presentation"><a class="changeName" role="menuitem" tabindex="-1" href="#">Change Name</a></li>',
      '<li class="logOut" role="presentation"><a class="logOut" role="menuitem" tabindex="-1" href="#">Log Out</a></li>',
    '</ul>',
  '</div>'
].join("");


templates.posts = [
  '<li class="postWrap" data-id="<%= _id %>">User: <span id="userNamePost"><%= username %></span><p><%= post %></p><span id="timeStamp"><%= dt %></span><i id="deleteButton" class="fa fa-minus-circle close"></i></li>'
].join("");

templates.userStatus = [
  '<div class= "statusWrap">',
  '<i class="fa fa-coffee"></i>',
  '<span class="online-users"><%= username %></span>',
  '</div>'
].join("");
