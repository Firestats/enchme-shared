module.exports = {
  required: true,
  type: 'object',
  properties: {
    globalSettings: {
      required: true,
      type: 'object'
    },
    components: {
      required: true,
      type: 'array'
    }
  }
};