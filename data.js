var templates = {};

templates.account = [
  '<ul class="no-js">',
  '<li>',
  '<a href="kpittner" name="<%=username%>" id="dropdownMenu1"class="clicker"><%=username%></a>',
  '<ul class ="submenu">',
  '<li><a href="#">Settings</a></li>',
  '<li><a href="#">Sign out</a></li>',
  '</ul>',
  '</li>',
  '</ul>'
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
