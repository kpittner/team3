
var accountData;
var array = [];

$(document).ready (function() {
  page.init();

});



var page = {


  accountUrl: 'http://tiy-fee-rest.herokuapp.com/collections/chatty_cathys_accounts',
  postUrl: 'http://tiy-fee-rest.herokuapp.com/collections/chatty_cathys_post',

  init: function() {
    page.initEvents();
    page.loadPosts();
    page.initStyles();
    page.getAccounts();
    page.loadAccountStatus();
  },

  initStyles: function () {
  },

  initEvents: function() {
    $('.signUpWrap').on('click', "#signUpButton", function(event) {
      event.preventDefault();
      var inputUserName = $('input[name="user"]').val();
      var inputPassword = $('input[name="pass"]').val();
      if(_.contains(array, inputUserName) !== true && inputPassword.length >= 6) {
          page.addAccount();
          page.getAccounts();
        }
      });
    $('.signUpWrap').on('click', "#logInButton", function(event) {
      event.preventDefault();
      page.loadAccount();
    });
    $('.input-post').on('click', '#postButton', function(event){
      event.preventDefault();
      page.addPost();
    });
    $('.outputs-IM').on('click', '#deleteButton', function(event){
      var postId = $(this).closest('.postWrap').data('id');
      console.log(postId);
      if ($('#dropdownMenu1').attr('name') === $('#userNamePost').html()) {
      page.deletePost(postId);
      }
    });
  },


  //////////////////////
  // AJAX & FUNCTIONS //
  //////////////////////

  addAccountToDOM: function (post) {
    page.loadAccountToPage("account", post, $('.username'));
  },

  addAccountStatus: function (post) {
    page.loadTmplStatus("userStatus", post, $('.individUser'));
  },

  addOnePostToDOM: function (post) {
    page.loadTmpl("posts", post, $('.outputs-IM'));
  },

  addAllPostsToDOM: function (allPosts) {
  _.each(allPosts, page.addOnePostToDOM);
  },



loadPosts: function () {

  // setInterval (function() {
    $.ajax({
      url: page.postUrl,
      method: 'GET',
      success: function (data) {
        $('.outputs-IM').html('');
        page.addAllPostsToDOM(data);
      },
      error: function (err) {

      }
    });
  // }) ;

},

  addAccount: function (event) {
    var newAccount = {
        username: $('input[name="user"]').val(),
        password: $('input[name="pass"]').val(),
      };
    page.createAccount(newAccount);
    $('input[name="user"]').val("");
    $('input[name="pass"]').val("")
  },

  addPost: function (event) {
  var newPost = {
    post: $('#post').val(),
    username: $('#dropdownMenu1').attr('name'),
    dt: moment().format('MMMM Do, h:mm a')
  };
  page.createPost(newPost);
  $('#post').val("");
  },

  createPost: function (newPost) {

  $.ajax({
    url: page.postUrl,
    method: 'POST',
    data: newPost,
    success: function (data) {
      page.addOnePostToDOM(data)
      console.log("success!!: ", data);
    },
    error: function (err) {
      console.log("error ", err);
    }
  });

},

  deletePost: function(postId) {
    $.ajax({
      url: page.postUrl + "/" + postId,
      method: 'DELETE',
      success: function (data) {
        console.log(page.postUrl + "/" + $(this).closest('.postWrap').data('id'));
        console.log(data);
        $('.outputs-IM').html('');
        page.loadPosts();
      }
    });
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
        $('input[name="user"]').val("");
        $('input[name="pass"]').val("");
      },
      error: function (err) {

      }
    });
  },

  loadAccountStatus: function(event) {
    $.ajax({
      url: page.accountUrl,
      method: 'GET',
      success: function (data) {
        page.addAccountStatus(data);
      },
      error: function (err) {

      }
    });
  },

  getAccounts: function(event) {
    $.ajax({
      url: page.accountUrl,
      method: 'GET',
      success: function (data) {
        accountData = data;
        array = [];
        _.each(accountData, function(el){
              array.push(el.username);
            });
      },
      error: function (err) {

      }
    });
  },

  loadTmpl: function (tmplName, data, $target) {
  var compiledTmpl = _.template(page.getTmpl(tmplName));

  $target.prepend(compiledTmpl(data));

  },

  loadTmplStatus: function (tmplName, data, $target) {
  var compiledTmpl = _.template(page.getTmpl(tmplName));
  console.log(data);
  console.log('I maybe possibly am working')

  _.each(data, function (el) {
    $target.append(compiledTmpl(el));
  });

  },


  loadAccountToPage: function (tmplName, data, $target) {
    var compiledTmpl = _.template(page.getTmpl(tmplName));
    _.each(data, function (el){
      if ($('#userNameInput').val() === el.username && $('#passwordInput').val() === el.password){
      $target.html(compiledTmpl(el));
    }
    })
  },

  getTmpl: function (name) {
    return templates[name];
  },


}
