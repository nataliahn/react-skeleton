// llamar a objeto React
var React = require('react');
var ListItem = require('./ListItem.jsx');
var createReactClass = require('create-react-class');

//array ingredientes
var ingredients = [
    {"id":1, "text":"ham"}, 
    {"id":2,"text":"vegan cheese"}, 
    {"id":3, "text":"tomatoe"},
    {"id":4, "text":"ketchup"}
]; 

var List = createReactClass({
    //imprimir
    render: function() {
        var ListItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{ListItems}</ul>);
    }
});

module.exports = List;