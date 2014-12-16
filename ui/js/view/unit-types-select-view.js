var UT = window.UT || {};

UT.UnitTypesSelectView = Backbone.View.extend({
	events: {
		'click #mainSelectIncidentType': 'selectOption',
		'click .select-option': 'showOptions'
	},
	initialize: function(){
		var that = this;
		this.model = new UT.UnitTypesCollection();
		this.model.fetch({
			success: function() {
				that.render();
			}
		});
	},
	render: function(){
		var that = this,
			types = [];

		_.map(this.model.models, function(model){
			types.push(model.attributes);
		});

		$.get('templates/unit-types-select-template.html', function (data) {
			var template =_.template(data, {types: types});
			that.$el.html(template);
		}, 'html');
	},
	selectOption: function(ev) {
		this.$('#optionsIncidentType').toggle();
	},
	showOptions: function(ev) {
		var typeName = $(ev.currentTarget).find('.unit-type-name').text();
		this.$('#selectedValue').text(typeName).removeClass('placeholder');
		this.$('#optionsIncidentType').toggle();
		$('#hiddenIncidentType').attr('value', typeName);
	},
	destroy: function() {
		this.$el.remove();
		this.model.destroy();
		this.remove();
	}
});