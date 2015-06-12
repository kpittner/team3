
$(document).ready (function() {
  page.init();
});



var page = {


  accountUrl: 'http://tiy-fee-rest.herokuapp.com/collections/chattycathyaccount',


  init: function() {
    page.initEvents();
  },

  initStyles: function () {

  },

  initEvents: function() {
    $('.signUpWrap').on('click', "#signUpButton", page.addAccount);
    $('.signUpWrap').on('click', "#logInButton", function(event) {
      event.preventDefault();
      page.loadAccount();
    });
  },


  //////////////////////
  // AJAX & FUNCTIONS //
  //////////////////////

  addAccountToDOM: function (post) {
    console.log("hello");
    page.loadAccountToPage("account", post, $('.username'));
  },

  addAccount: function (event) {
    event.preventDefault();
    var newAccount = {
        username: $('input[name="user"]').val(),
        password: $('input[name="pass"]').val(),
      };
    page.createAccount(newAccount);
    $('input[name="user"]').val("");
    $('input[name="pass"]').val("")
  },

  createAccount: function (newAccount) {

    $.ajax({
      url: page.accountUrl,
      method: 'POST',
      data: newAccount,
      success: function (data) {
        console.log("success!!: added accounts", data);
      },
      error: function (err) {
        console.log("error ", err);
      }
    });

  },

  loadAccount: function(event) {
    $.ajax({
      url: page.accountUrl,
      method: 'GET',
      success: function (data) {
        page.addAccountToDOM(data);
      },
      error: function (err) {

      }
    });
  },

  loadTmpl: function (tmplName, data, $target) {
  var compiledTmpl = _.template(page.getTmpl(tmplName));

  $target.append(compiledTmpl(data));
  },

  loadAccountToPage: function (tmplName, data, $target) {
    var compiledTmpl = _.template(page.getTmpl(tmplName));
    _.each(data, function (el){
      console.log(el);
      $target.html(compiledTmpl(el));
    })
  },

  getTmpl: function (name) {
    return templates[name];
  },

}
