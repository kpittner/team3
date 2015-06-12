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
