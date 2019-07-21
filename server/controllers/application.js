import { asyncWrapper, respondWith } from '../utils/helpers';

class ApplicationController {
  constructor(name, dataService, createSchema, updateSchema, context) {
    this.name = name;
    this.dataService = dataService;
    this.createSchema = createSchema;
    this.updateSchema = updateSchema;
    this.context = context;
  }

  index() {
    return asyncWrapper(async (req, res) => {
      const data = await this.dataService.getAll();
      return respondWith(res, 200, { [this.name + 's']: data });
    });
  }

  show() {
    return asyncWrapper(async (req, res) => {
      const data = await this.dataService.getOne(req.params.id);
      return respondWith(res, 200, { data });
    });
  }

  create() {
    return asyncWrapper(async (req, res) => {
      await this.createSchema.validate(req.body);
      const data = await this.dataService.create(
        this.createSchema.cast(req.body, { context: { authorId: req.user.id } })
      );
      return respondWith(res, 201, { data });
    });
  }

  update() {
    return asyncWrapper(async (req, res) => {
      await this.updateSchema.validate(req.body);
      const data = await this.dataService.update(
        req.params.id,
        this.updateSchema.cast(req.body)
      );
      return respondWith(res, 200, { data });
    });
  }

  destroy() {
    return asyncWrapper(async (req, res) => {
      await this.dataService.destroy(req.params.id);
      return respondWith(res, 204);
    });
  }
}

export default ApplicationController;
