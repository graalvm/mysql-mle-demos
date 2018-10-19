var path = require('path');
var fileName = "tokens.js"

module.exports = {
    entry: path.join(__dirname, fileName),
    mode: "development",
    output: {
        filename: "main.js",
        libraryTarget: "commonjs2",
        path: path.resolve("/tmp/"),
    },
    resolve: {
      alias: {
        // aliases for default webpack configuaration
        "_stream_duplex": require.resolve('readable-stream/duplex.js'),
        "_stream_passthrough": require.resolve('readable-stream/passthrough.js'),
        "_stream_readable": require.resolve('readable-stream/readable.js'),
        "_stream_transform": require.resolve('readable-stream/transform.js'),
        "_stream_writable": require.resolve('readable-stream/writable.js'),
        "buffer": require.resolve('buffer/'),
      },
    },
    node: {
        // visit https://webpack.js.org/configuration/node/#node-process for more information
        Buffer: true,
        __dirname: true,
        __filename: true,
        _process: true,
        assert: true,
        child_process: "empty",
        cluster: "empty",
        console: true,
        constants: true,
        crypto: true,
        dgram: "empty",
        dns: "empty",
        domain: true,
        events: true,
        fs: "empty",
        global: false,
        http: true,
        https: true,
        module: "empty",
        net: "empty",
        os: true,
        path: true,
        process: true,
        punicode: true,
        querystring: true,
        readline: "empty",
        repl: "empty",
        setImmediate: "empty",
        stream: true,
        string_decoder: true,
        sys: true,
        timers: true,
        tls: "empty",
        tty: true,
        url: true,
        util: true,
        vm: true,
        zlib: true,
    },
    target: "web", // () => undefined,
    module: {
      rules: [
        {
            test: path.join(__dirname, "node_modules", "iconv-lite", "lib", "index.js"),
            use: 'ignore-loader'
        }
      ]
    }
};
