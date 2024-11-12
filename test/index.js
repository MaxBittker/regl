// set minimal stacktrace to reduce obsessive logs
if (process.env['GITHUB_ACTIONS'] === "true") Error.stackTraceLimit = 0

require('./destroy-bound-buffer')
require('./flatten')
require('./context-loss')
require('./constructor')
require('./projection')
require('./projection-lines')
require('./frame')
require('./frame-destroy')
require('./resize')
require('./accessor')
require('./half-float')
require('./read')
require('./clear')
require('./buffer')
require('./element-parse')
require('./context')
require('./triangle')
require('./elements')
require('./subdata')
require('./line')
require('./batch')
require('./draw')
require('./batch-attributes')
require('./dynamic-elements')
require('./this')
require('./scope')
require('./scope-batch')
require('./attributes')
require('./texture-simple')
require('./uniforms')
require('./element-more')
require('./depth')
require('./blend')
require('./stencil')
require('./polygon-offset')
require('./culling')
require('./misc')
require('./sample')
require('./scissor')
require('./viewport')
require('./texture2d')
require('./textureCube')
require('./renderbuffer')
require('./framebuffer-parse')
require('./framebuffer-simple')
require('./framebuffer-ref-count')
require('./framebuffer-resize')
require('./framebuffer-depth-stencil')
require('./framebuffer-codegen')
require('./framebuffer-mrt')
require('./stats')
require('./stats-commands')
// require('./stats-gputime')
require('./instance')
require('./cube-fbo-resize')
require('./dynamic-cube-fbo')
require('./dynamic-scissor')
require('./dynamic-viewport')
require('./missing-shader')
require('./attribute-constants')
require('./attributes-nested')
require('./buffer-update')
require('./elements-update')
require('./elements-length')
require('./vao')
require('./destroy-command')
