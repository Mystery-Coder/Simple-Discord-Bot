const print = console.log;


const sin = Math.sin;
const cos = Math.cos;
const PI = Math.PI;
// const circle_area = r => PI * (r)
function Calculate(msg, args) {
	
	if((args[0] === undefined && args.length === 0) || args[0].includes("console.log") || args[0].includes("function") || args[0].includes("=>") || args[0].includes("let") 
	|| args[0].includes("const") || args[0].includes("var")){
		msg.channel.send("You forgot to give an expression");
		return;
	} 


	let result = eval(args[0]);
	let s = `${args[0]} = ${result}`;
	msg.channel.send("```" + s + "```");

	``


}






//Exports
module.exports.func = Calculate;
module.exports.help = `$calc calculates a mathematical expression.
The expression to be calculted should be the 2nd argument in the message,
Ex: $calc 2+(2/2)

+ -> add
- -> subtract
* -> multiply
/ -> divide
`

