(function () {
  var people = {
    people: [],
    init: function () {
      this.cacheDOM();
      this.bindEvents();
      this.render();
    },
    cacheDOM: function () {
      this.$el = $('#peopleModule');
      this.template = this.$el.find('#people-template').html();
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
    },
    bindEvents: function () {
      this.$button.on('click', this.addPerson.bind(this));
      this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
    },
    render: function () {
      var data = {
        people: this.people
      };

      this.$ul.html(Mustache.render(this.template, data));
    },
    addPerson: function () {
      this.people.push(this.$input.val());
      this.$input.val('');

      this.render();
    },
    deletePerson: function (e) {
      var $self = $(e.currentTarget).closest('li');
      var index = this.$ul.find('li').index($self);
      
      this.people.splice(index, 1);   
      this.render();
    }
  }

  people.init();
})();