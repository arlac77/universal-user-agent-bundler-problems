

```sh
node dist/bundeled-with-rollup-cjs-not-working
```

```
/Users/markus/build/universal-user-agent-bundler-problems/dist/bundeled-with-rollup-cjs-not-working:4
    return navigator.userAgent;
    ^

ReferenceError: navigator is not defined
    at getUserAgent (/Users/markus/build/universal-user-agent-bundler-problems/dist/bundeled-with-rollup-cjs-not-working:4:5)
    at Object.<anonymous> (/Users/markus/build/universal-user-agent-bundler-problems/dist/bundeled-with-rollup-cjs-not-working:7:13)
    at Module._compile (internal/modules/cjs/loader.js:936:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)
    at Module.load (internal/modules/cjs/loader.js:790:32)
    at Function.Module._load (internal/modules/cjs/loader.js:703:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:999:10)
    at internal/main/run_main_module.js:17:11
```



```sh
node dist/bundeled-with-rollup-cjs-external-workaround
```

```
Node.js/12.10.0 (macOS Mojave; x64)
```

after patchin with (and rollup rerun)
```
./patch-univeral-user-agent.mjs
```

```sh
node dist/bundeled-with-rollup-cjs-not-working
```

is working fine
```
mbpMarkus:universal-user-agent-bundler-problems markus$ node dist/bundeled-with-rollup-cjs-not-working 
Node.js/12.11.1 (macOS Mojave; x64)
```





calling as esm directly without bundler also does not work
```sh
node --experimental-modules index.mjs
```

```
import { getUserAgent } from "universal-user-agent";
         ^^^^^^^^^^^^
SyntaxError: The requested module 'universal-user-agent' does not provide an export named 'getUserAgent'
    at ModuleJob._instantiate (internal/modules/esm/module_job.js:93:21)
    at async ModuleJob.run (internal/modules/esm/module_job.js:108:20)
    at async Loader.import (internal/modules/esm/loader.js:137:24)
```