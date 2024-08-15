// Common Modules
const obj = require('./1-Modules');
console.log(obj["name"]);
console.log(obj.Data());

// Es6 modules
import {Print} from './2-Es6Modules.mjs'
console.log(Print());