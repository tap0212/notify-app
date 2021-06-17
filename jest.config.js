module.exports = {
	preset: "react-native",
	transform: {
		"^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
		"\\.(ts|tsx)$": "ts-jest",
	},
	globals: {
		"ts-jest": {
			tsConfig: "tsconfig.jest.json",
		},
	},
	moduleFileExtensions: ["ts", "tsx", "js"],
	setupFiles: ["./enzyme.setup.js"],
	testRegex: "tests/.*\\.test\\.(ts|tsx|js)$",

	moduleDirectories: ["node_modules", "src"],
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
	},
	snapshotSerializers: [],
};
