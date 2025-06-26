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

/**
 * 处理 v-bind 指令的主函数
 * @param {string} template - HTML 模板字符串
 * @param {object} data - 数据对象
 * @returns {string} 处理后的 HTML 字符串
 */
function processVBind(template: any, data: any) {
  // 使用正则表达式匹配所有的 HTML 标签（包括开始标签和自闭合标签）
  // <([^>]+)> 匹配 < 和 > 之间的所有内容
  return template.replace(/<([^>]+)>/g, (match: any, tagContent: any) => {
    // match: 完整匹配的标签，如 "<div class='test'>"
    // tagContent: 标签内容，如 "div class='test'"
    return '<' + processAttributes(tagContent, data) + '>'
  })
}

/**
 * 处理单个标签内的所有属性
 * @param {string} tagContent - 标签内容（不包括 < >）
 * @param {object} data - 数据对象
 * @returns {string} 处理后的标签内容
 */
function processAttributes(tagContent: any, data: any) {
  // 正则表达式解释：
  // (v-bind:|:) - 匹配 "v-bind:" 或 ":" （分组1）
  // (\w+) - 匹配属性名，如 href、class、title （分组2）
  // =["'] - 匹配等号和引号开始
  // ([^"']+) - 匹配引号内的表达式内容 （分组3）
  // ["'] - 匹配引号结束
  return tagContent.replace(
    /(v-bind:|:)(\w+)=["']([^"']+)["']/g,
    (match: any, prefix: any, attrName: any, expression: any) => {
      // match: 完整匹配，如 'v-bind:href="url"' 或 ':class="buttonClass"'
      // prefix: 'v-bind:' 或 ':'
      // attrName: 属性名，如 'href', 'class', 'title'
      // expression: 表达式，如 'url', 'buttonClass', 'user.name'

      // 从数据对象中获取表达式的值
      const value = data[expression]

      return `${attrName}="${value}"`
    }
  )
}

// 使用示例
const data1 = {
  url: 'https://juejin.cn/user/3263006241480605',
  title: 'cookie'
}

const template1 = `<a v-bind:href="url" :title="title">链接</a>`

console.log(processVBind(template1, data1))
// <a href="https://juejin.cn/user/3263006241480605" title="cookie">链接</a>


