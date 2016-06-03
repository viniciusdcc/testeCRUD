Template.home.events({
    'submit form':function (e) {
        e.preventDefault();//not refresh page
        var title=e.target.title.value;
        var description=e.target.description.value;
        //alert('Title: '+title+', '+'description: '+description);
        var obj= {
            title: title,
            description: description
        }
        Meteor.call('insert',obj);//chama metodo de server/crud.js
        alert('Insertion sucess');
    }
});
Template.home.helpers({
    getData:function () {
        return crud.find();
    }
})