

´´´sh
node dist/bundeled-with-wollup-cjs-not-working
´´´

´´´
    return navigator.userAgent;
    ^

ReferenceError: navigator is not defined
    at getUserAgent (/Users/markus/build/universal-user-agent-bundler-problems/dist/bundeled-with-wollup-cjs-not-working:4:5)
    at Object.<anonymous> (/Users/markus/build/universal-user-agent-bundler-problems/dist/bundeled-with-wollup-cjs-not-working:7:13)
    at Module._compile (internal/modules/cjs/loader.js:936:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)
    at Module.load (internal/modules/cjs/loader.js:790:32)
    at Function.Module._load (internal/modules/cjs/loader.js:703:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:999:10)
    at internal/main/run_main_module.js:17:11
´´´



´´´sh
node dist/bundeled-with-wollup-cjs-external-workaround
´´´

```
Node.js/12.10.0 (macOS Mojave; x64)
```