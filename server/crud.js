Meteor.methods({
    insert:function (obj) {
        crud.insert(obj);
    },
    update:function (id,obj) {
        crud.update({_id:id},{$set:obj});
    },
    delete:function (id) {
        crud.delete({_id:id});
    },
    select:function (id) {
        crud.select({_id:id});
    }
})