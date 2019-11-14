module.exports = {
  name: 'frontend-angular',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/frontend-angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
