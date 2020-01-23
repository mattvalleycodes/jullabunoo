module.exports = {
  testPathForConsistencyCheck: "some/example.spec.js",

  resolveSnapshotPath: function resolveSnapshotPath(testPath) {
    return `${testPath}.snap`;
  },

  resolveTestPath: function resolveTestPath(snapshotFilePath) {
    return snapshotFilePath.replace(".snap", "");
  },
};
