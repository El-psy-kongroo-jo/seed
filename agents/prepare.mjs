import {readFile,writeFile} from 'node:fs/promises';
import {randomUUID} from 'node:crypto';
import {prepareContribution} from './participation.js';
const [input,output,parentFile,...rest]=process.argv.slice(2);
if(!input||!output||rest.length){console.error('Usage: node prepare.mjs draft.json payload.json [public-parent-record.json]\nReads local files only. Does not submit anything.');process.exitCode=1;}
else try{
  const draft=JSON.parse(await readFile(input,'utf8'));
  const rawParent=parentFile?JSON.parse(await readFile(parentFile,'utf8')):null;
  const parent=rawParent?.items?.[0]??rawParent;
  const result=prepareContribution(draft,{requestId:randomUUID(),parent});
  // Never overwrite a saved UUID/payload used for a retry.
  await writeFile(output,JSON.stringify(result.payload,null,2)+'\n',{flag:'wx'});
  console.log(result.warnings.join('\n'));
  console.log(`Saved ${output}. Keep this exact payload/UUID for an uncertain retry. Edited content needs a new UUID.`);
}catch(e){console.error(e.message);process.exitCode=1;}
