
let itemExist = function (res) {
    res.status(400);
    res.send({
        code: 400,
        message: 'Item already exists'
    });
};

let itemDoesNotExist = function (res) {
    res.status(400);
    res.send({
        code: 400,
        message: 'Item does not exist'
    });
};

let serverError = function (res) {
    res.status(500);
    res.send({
        code: 500,
        message:'Server error'
    });
};

let itemNotCreated = function (res) {
    res.status(404);
    res.status({
        code: 404,
        message: "There was a problem creating the item`."
    });
};


module.exports = {
    itemExist,
    itemDoesNotExist,
    serverError,
    itemNotCreated,

};
