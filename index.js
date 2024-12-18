// Assignments #1 - Create a cli
// Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it.

import { readFile } from 'fs';
import { Command } from 'commander';
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
 
  .action((file) => {
    readFile(file,'utf-8', (err,data)=>{
        if(err){
            console.log(err)
        }else{
            const words = data.split(' ').length;
            console.log(`There are ${words} words in ${file}`);
        }
    })
  });

program.parse();

