class DataService {
  constructor(Model, options) {
    this.Model = Model;
    this.options = options;
  }

  async getAll() {
    return await this.Model.findAll(this.options);
  }

  async getOne(id) {
    return await this.Model.findByPk(id, this.options);
  }

  async create(data) {
    return await this.Model.create(data);
  }

  async update(id, data) {
    const instance = await this.Model.findByPk(id);
    return instance.update(data);
  }

  async destroy(id) {
    const instance = await this.Model.findByPk(id);
    return await instance.destroy();
  }
}

export default DataService;
