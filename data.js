var templates = {};

templates.account = [
  '<li>',
  '<a class="name" href="kpittner">',
  '</a>',
  '<button class="btn btn-default dropdown-toggle" name="<%=username%>" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">',
    '<%=username%>',
    '<span class="caret"></span>',
  '</button>',
  '</li>'
].join("");

templates.posts = [
  '<li>User:<span id="userNamePost"><%= username %></span><p><%= post %></p><span id="timeStamp"><%= dt %></span><i class="fa fa-minus-circle close"></i></li>'
].join("");
