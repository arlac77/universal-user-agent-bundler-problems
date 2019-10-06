#!/bin/sh
":" //# comment; exec /usr/bin/env node --experimental-modules "$0" "$@"


import fs from "fs";

const utf8Options = {encoding:"utf8"}
const packageFile = "node_modules/universal-user-agent/package.json";
const pj = JSON.parse(fs.readFileSync(packageFile,utf8Options));

pj.browser = pj.module;
pj.module = pj.main;
//pj.main = ?

fs.writeFileSync(packageFile,JSON.stringify(pj,undefined,2),utf8Options);
