module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
export const ${componentName.toUpperCase()} = 'const_value'
`,
  extension: `.ts`,
});
