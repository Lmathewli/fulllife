var teacher = require('./teacher')
function klass (teacherName) {
  teacher.add(teacherName)
}
exports.klass = klass
