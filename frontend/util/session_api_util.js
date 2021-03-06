var SessionActions = require('./../actions/session_actions');
var ErrorActions = require('./../actions/error_actions');

var SessionApiUtil = {
  login: function (credentials, callback) {
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: {user: credentials},
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
        callback && callback();
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
	      ErrorActions.setErrors("login", errors);
			}
    });
  },

  logout: function () {
    $.ajax({
      url: "/api/session",
      method: 'DELETE',
      success: function () {
        SessionActions.removeCurrentUser();
      }
    });
  },

  fetchCurrentUser: function (complete) {
    $.ajax({
      url: "/api/session",
      method: "GET",
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
        if (complete) {
          complete();
        }
      }
    });
  }
};

module.exports = SessionApiUtil;
