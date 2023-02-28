const strictEqual = require('chai').assert.strictEqual;

const swap = requare('../../src/kyu8/changingletters').swap

function doTest (input, expected) {
	const actual = swap(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", () => {
	it("sample tests", () => {
		doTest("", "");
		doTest("   @@@", "   @@@");
		doTest("HelloWorld!", "HEllOWOrld!");
		doTest("Sunday", "SUndAy");
		doTest("Codewars", "COdEwArs");
		doTest("Monday", "MOndAy");
		doTest("Friday", "FrIdAy");
		doTest("abracadabra", "AbrAcAdAbrA");
		doTest("AbrAcAdAbrA", "AbrAcAdAbrA");
		doTest("ABRACADABRA", "ABRACADABRA");
		doTest("aBRaCaDaBRa", "ABRACADABRA");
	});
});