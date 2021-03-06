const Multer = require('multer')

class uploadService {

    constructor() {
        this.storage = Multer.diskStorage({
            destination: (req, file, cb) => {

                return cb(null, 'public/csv');
            },
            filename: (req, file, cb) => {
                return cb(null, file.originalname);
            },

        });

    }
    up() {
        let storage = this.storage
        var upload = Multer({
            storage
        })
        return upload
    }
}
module.exports = uploadService;