const methods = require('./methods.js')
const yargs = require('yargs')
const chalk = require('chalk')

yargs.command(
    {
        command: 'add',
        describe: 'Add a new item',
        builder:{
            name: {
                describe: 'Defines a title',
                demandOption: true,
                type: 'string'

            },
            planet: {
                describe: 'This is the planet where you came from',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv){
            methods.add({name: argv.name, planet: argv.planet})
        }
    }
)


yargs.command(
    {
        command: 'list',
        describe: 'List all notes',
        handler: function(){
            methods.list()
        }
    }
)

yargs.command(
    {
        command: 'remove',
        describe: 'Remove notes by index',
        builder: {
            index: {
                describe: 'Defines the index of a given note to remove',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv){
            methods.remove(argv.index)
        }
    }
)

console.log(yargs.argv)