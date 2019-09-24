class ApplicationController {
    constructor(applicationService, httpSatus) {
        this.applicationService = applicationService;
        this.httpSatus = httpSatus;
    }

    async create(req, res) {
        try {
            const { body } = req;
            const result = await this.applicationService.create(body);

            res.send(result);
        } catch (err) {
            console.log(err.message);
            res.send(err);
        }
    }

    async get(req, res) {
        try{
            const { id } = req.params;
            const result = await this.applicationService.get(id);

            res.send(result);
        } catch (err) {
            console.log(err.message);
            res.send(err);
        }
    }

}

module.exports = ApplicationController;