const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose
        .connect(
            `mongodb://localhost:27017/event-booking`
        ).then(() => console.log("Mongodb connected.."))
        .catch(err => {
            console.log(err);
        });
}

module.exports = dbConnect;