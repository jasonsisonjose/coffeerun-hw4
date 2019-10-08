(function (window) {
  'use strict';
  var App = window.App || {};

  var Validation = {
    isCompanyEmail: function(email) {
      // The expression pattern is in between the "/"
      // .+ means that a string consists of one or more characters
      // \. means to treat the "." as literal period to make @bignerdranch.com
      // $ means that after @bignerdranch.com, there should me no more characters after that
      return /.+@bignerdranch\.com$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
