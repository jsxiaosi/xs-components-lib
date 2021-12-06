module.exports = {
	'*.{js,ts}': ['eslint --fix', 'prettier --write'],
	'package.json': ['prettier --write'],
	'*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
	'*.scss': ['stylelint --fix', 'prettier --write'],
	'*.md': ['prettier --write'],
}
