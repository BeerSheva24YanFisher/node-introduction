
import logger from './logger.mjs';
import {readFile, writeFile} from 'node:fs/promises'
const data = await readFile('./file.txt','utf-16le')
console.log(data)
writeFile('./file.txt', ["kuku", "kukureku", "שלום"].join('\n'), 'utf-16le')
logger.info("function finished");