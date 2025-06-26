// vue中的插值语法

function compileTemplate(template: string, data: any) {
  return template.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (match, expression) => {
    const value = data[expression];
    return value !== undefined ? String(value) : '';
  });
}

// 使用示例
const data = {
  message: 'Hello Cookie!',
};

const template = `<div><h1>{{ message }}</h1></div>`;

console.log(compileTemplate(template, data)); //  Hello Cookie!
