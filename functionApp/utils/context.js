import os from 'os'
import { LEVEL, MESSAGE } from 'triple-beam'
import TransportStream from 'winston-transport'

/**
 * Transport for outputting to the this.Context.
 * @type {Context}
 * @extends {TransportStream}
 */
export default class Context extends TransportStream {
  /**
   * Constructor function for the Context transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [options={}] - Options for this instance.
   */
  constructor(options = {}) {
    super(options)

    // Expose the name of this Transport on the prototype
    this.name = options.name || 'Context'

    this.eol = typeof options.eol === 'string' ? options.eol : os.EOL

    this.setMaxListeners(30)
    this.Context = options.context
  }

  /**
   * Core logging method exposed to Winston.
   * @param {Object} info - TODO: add param description.
   * @param {Function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback) {
    setImmediate(() => this.emit('logged', info))

    if (this.Context._stdout) {
      // Node.js maps `process.stdout` to `this.Context._stdout`.
      this.Context._stdout.write(`${info[MESSAGE]}${this.eol}`)
    } else {
      // this.Context.log adds a newline.
      if (this.Context.log[info[LEVEL]]) {
        this.Context.log[info[LEVEL]](`${info[MESSAGE]}${this.eol}`)
      } else {
        this.Context.log(info[MESSAGE])
      }
    }

    if (callback) {
      callback() // eslint-disable-line callback-return
    }
  }
}
