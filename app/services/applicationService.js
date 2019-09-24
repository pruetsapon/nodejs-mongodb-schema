class ApplicationService {
    constructor(mongoose, httpStatus, errs) {
      this.mongoose = mongoose;
      this.httpStatus = httpStatus;
      this.errs = errs;
    }
  
    async create(body) {
      const Application = this.mongoose.model('Application');
      let newApp = new Application();
      newApp.id = newApp._id;
      newApp.other = body;
      newApp = await newApp.save();
  
      console.log('Application Created Successfully');
      return newApp;
    }

    async get(id) {
      const Application = this.mongoose.model('Application');
      const application = await Application.findOne({_id: id});
  
      if (!application) {
        const err = new this.errs.NotFoundError(
          `Application with id - ${id} does not exists`
        );
        return err;
      }
  
      console.log('Application fetched Successfully');
      return application.data;
    }
  }
  
  module.exports = ApplicationService;