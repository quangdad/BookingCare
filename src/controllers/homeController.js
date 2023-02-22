import db from "../models/index";

let getHomePage = async(req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });

    } catch (error) {
        console.log(error);
    }
}
let getaboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getaboutPage: getaboutPage
}
