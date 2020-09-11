amis.define('docs/components/dialog.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Dialog 对话框",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Dialog 对话框",
    "icon": null,
    "order": 41,
    "html": "<p>Dialog 弹框 主要由 <a href=\"./action\">Action</a> 触发，主要展示一个对话框以供用户操作。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"label\": \"点击弹框\",\n    \"type\": \"button\",\n    \"actionType\": \"dialog\",\n    \"dialog\": {\n      \"title\": \"弹框标题\",\n      \"body\": \"这是一个弹框\"\n    }\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E5%B0%BA%E5%AF%B8\" href=\"#%E9%85%8D%E7%BD%AE%E5%B0%BA%E5%AF%B8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置尺寸</h2><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"type\": \"button-toolbar\",\n    \"buttons\": [\n        {\n            \"type\": \"button\",\n            \"label\": \"较小的弹框\",\n            \"actionType\": \"dialog\",\n            \"dialog\": {\n                \"size\": \"sm\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"标准弹框\",\n            \"actionType\": \"dialog\",\n            \"dialog\": {\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"较大的弹框\",\n            \"actionType\": \"dialog\",\n            \"dialog\": {\n                \"size\": \"lg\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"很大的弹框\",\n            \"actionType\": \"dialog\",\n            \"dialog\": {\n                \"size\": \"xl\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"占满屏幕的弹框\",\n            \"actionType\": \"dialog\",\n            \"dialog\": {\n                \"size\": \"full\",\n                \"title\": \"全屏弹框\",\n                \"body\": \"弹框尽可能占满，内容部分滚动。\"\n            }\n        }\n    ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E5%A4%9A%E7%BA%A7%E5%BC%B9%E6%A1%86\" href=\"#%E5%A4%9A%E7%BA%A7%E5%BC%B9%E6%A1%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>多级弹框</h2><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"多级弹框\",\n    \"actionType\": \"dialog\",\n    \"dialog\": {\n        \"title\": \"提示\",\n        \"body\": \"这是个简单的弹框\",\n        \"actions\": [\n            {\n                \"type\": \"button\",\n                \"actionType\": \"confirm\",\n                \"label\": \"确认\",\n                \"primary\": true\n            },\n            {\n                \"type\": \"button\",\n                \"actionType\": \"dialog\",\n                \"label\": \"再弹一个\",\n                \"dialog\": {\n                    \"title\": \"弹框中的弹框\",\n                    \"body\": \"如果你想，可以无限弹下去\",\n                    \"actions\": [\n                        {\n                            \"type\": \"button\",\n                            \"actionType\": \"dialog\",\n                            \"label\": \"来吧\",\n                            \"level\": \"info\",\n                            \"dialog\": {\n                                \"title\": \"弹框中的弹框\",\n                                \"body\": \"如果你想，可以无限弹下去\",\n                                \"actions\": [\n                                    {\n                                        \"type\": \"button\",\n                                        \"actionType\": \"confirm\",\n                                        \"label\": \"不弹了\",\n                                        \"primary\": true\n                                    }\n                                ]\n                            }\n                        }\n                    ]\n                }\n            }\n        ]\n    }\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E8%A1%8C%E4%B8%BA%E5%90%8E%E5%85%B3%E9%97%AD%E5%BC%B9%E6%A1%86\" href=\"#%E8%A1%8C%E4%B8%BA%E5%90%8E%E5%85%B3%E9%97%AD%E5%BC%B9%E6%A1%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>行为后关闭弹框</h2><p>在弹框中配置行为按钮，可以在按钮上配置<code>&quot;close&quot;: true</code>，在行为完成后，关闭当前弹框。</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"弹个框\",\n    \"actionType\": \"dialog\",\n    \"dialog\": {\n        \"title\": \"弹框\",\n        \"body\": [\n          {\n            \"type\": \"action\",\n            \"label\": \"默认的 ajax 请求\",\n            \"actionType\": \"ajax\",\n            \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=1\"\n          },\n          {\n            \"type\": \"action\",\n            \"label\": \"ajax 请求成功后关闭弹框\",\n            \"actionType\": \"ajax\",\n            \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=1\",\n            \"close\": true\n          }\n        ]\n    }\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E5%BC%B9%E6%A1%86%E4%B8%AD%E9%85%8D%E7%BD%AE%E8%A1%A8%E5%8D%95\" href=\"#%E5%BC%B9%E6%A1%86%E4%B8%AD%E9%85%8D%E7%BD%AE%E8%A1%A8%E5%8D%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>弹框中配置表单</h2><h3><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h3><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"弹个表单\",\n    \"actionType\": \"dialog\",\n    \"dialog\": {\n        \"title\": \"在弹框中的表单\",\n        \"body\": {\n            \"type\": \"form\",\n            \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2\",\n            \"controls\": [\n                {\n                    \"type\": \"text\",\n                    \"name\": \"username\",\n                    \"required\": true,\n                    \"placeholder\": \"请输入用户名\",\n                    \"label\": \"用户名\"\n                },\n                {\n                    \"type\": \"password\",\n                    \"name\": \"password\",\n                    \"label\": \"密码\",\n                    \"required\": true,\n                    \"placeholder\": \"请输入密码\"\n                },\n                {\n                    \"type\": \"checkbox\",\n                    \"name\": \"rememberMe\",\n                    \"label\": \"记住登录\"\n                }\n            ]\n        }\n    }\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95-%E6%88%96-ajax-%E8%AF%B7%E6%B1%82\" href=\"#%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95-%E6%88%96-ajax-%E8%AF%B7%E6%B1%82\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>提交表单 或 ajax 请求</h3><p>弹框中通过配置<code>form</code>或<code>ajax</code>行为按钮，可以实现<code>form</code>提交和<code>ajax</code>请求操作。</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"弹个表单\",\n    \"actionType\": \"dialog\",\n    \"dialog\": {\n        \"title\": \"在弹框中的表单\",\n        \"actions\": [\n            {\n                \"label\": \"提交表单\",\n                \"actionType\": \"submit\",\n                \"primary\": true,\n                \"type\": \"button\"\n            },\n            {\n                \"label\": \"ajax请求\",\n                \"actionType\": \"ajax\",\n                \"primary\": true,\n                \"type\": \"button\",\n                \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2\"\n            }\n        ],\n        \"body\": {\n            \"type\": \"form\",\n            \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2\",\n            \"controls\": [\n                {\n                    \"type\": \"text\",\n                    \"name\": \"text\",\n                    \"required\": true,\n                    \"label\": \"用户名\",\n                    \"placeholder\": \"请输入用户名\"\n                },\n                {\n                    \"type\": \"password\",\n                    \"name\": \"password\",\n                    \"label\": \"密码\",\n                    \"placeholder\": \"请输入密码\",\n                    \"required\": true\n                },\n                {\n                    \"type\": \"checkbox\",\n                    \"name\": \"rememberMe\",\n                    \"label\": \"记住登录\"\n                }\n            ]\n        }\n    }\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95-%E6%88%96-ajax-%E8%AF%B7%E6%B1%82-%E5%90%8E%E4%B8%8D%E5%85%B3%E9%97%AD%E5%BC%B9%E6%A1%86\" href=\"#%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95-%E6%88%96-ajax-%E8%AF%B7%E6%B1%82-%E5%90%8E%E4%B8%8D%E5%85%B3%E9%97%AD%E5%BC%B9%E6%A1%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>提交表单 或 ajax 请求 后不关闭弹框</h3><p>默认情况下，当弹框中配置了 form 并进行了<strong>提交表单操作（confirm）</strong>或进行了**<code>ajax</code>请求**，请求成功后，会自动关闭当前弹框，你可以通过手动设置<code>&quot;close&quot;: true</code> 来禁止该默认特性。</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"弹个表单\",\n    \"actionType\": \"dialog\",\n    \"dialog\": {\n        \"title\": \"在弹框中的表单\",\n        \"actions\": [\n            {\n                \"label\": \"提交表单后不关闭\",\n                \"actionType\": \"submit\",\n                \"close\": false,\n                \"primary\": true,\n                \"type\": \"button\"\n            },\n            {\n                \"label\": \"ajax请求后不关闭\",\n                \"actionType\": \"ajax\",\n                \"primary\": true,\n                \"type\": \"button\",\n                \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2\"\n            }\n        ],\n        \"body\": {\n            \"type\": \"form\",\n            \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2\",\n            \"controls\": [\n                {\n                    \"type\": \"text\",\n                    \"name\": \"text\",\n                    \"required\": true,\n                    \"label\": \"用户名\",\n                    \"placeholder\": \"请输入用户名\"\n                },\n                {\n                    \"type\": \"password\",\n                    \"name\": \"password\",\n                    \"label\": \"密码\",\n                    \"required\": true,\n                    \"placeholder\": \"请输入密码\"\n                },\n                {\n                    \"type\": \"checkbox\",\n                    \"name\": \"rememberMe\",\n                    \"label\": \"记住登录\"\n                }\n            ]\n        }\n    }\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"feedback-%E5%8F%8D%E9%A6%88%E5%BC%B9%E6%A1%86\" href=\"#feedback-%E5%8F%8D%E9%A6%88%E5%BC%B9%E6%A1%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>feedback 反馈弹框</h2><p>feedback 反馈弹框是指，在 ajax 请求后，可以显示一个弹框，进行反馈操作</p>\n<h3><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h3><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"Feedback\",\n    \"actionType\": \"ajax\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/initData?waitSeconds=2\",\n    \"tooltip\": \"点击我后会发送一个请求，请求回来后，弹出一个框。\",\n    \"feedback\": {\n        \"title\": \"操作成功\",\n        \"body\": \"xxx 已操作成功\"\n    }\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E5%BC%B9%E6%A1%86%E4%B8%AD%E9%85%8D%E7%BD%AE-feedback\" href=\"#%E5%BC%B9%E6%A1%86%E4%B8%AD%E9%85%8D%E7%BD%AE-feedback\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>弹框中配置 feedback</h3><h4><a class=\"anchor\" name=\"%E5%85%B3%E9%97%AD-feedback-%E5%BC%B9%E6%A1%86%E6%97%B6-%E5%90%8C%E6%97%B6%E5%85%B3%E9%97%AD%E4%B8%8A%E5%B1%82%E5%BC%B9%E6%A1%86\" href=\"#%E5%85%B3%E9%97%AD-feedback-%E5%BC%B9%E6%A1%86%E6%97%B6-%E5%90%8C%E6%97%B6%E5%85%B3%E9%97%AD%E4%B8%8A%E5%B1%82%E5%BC%B9%E6%A1%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>关闭 feedback 弹框时，同时关闭上层弹框</h4><p>当你在弹框中配置了 feedback，操作之后，你希望关闭当前 feedback 弹框同时，关闭上层的弹框，具体有两种方式</p>\n<h5><a class=\"anchor\" name=\"1-%E4%B8%8D%E8%AF%B7%E6%B1%82%E6%8E%A5%E5%8F%A3-%E7%9B%B4%E6%8E%A5%E5%85%B3%E9%97%AD\" href=\"#1-%E4%B8%8D%E8%AF%B7%E6%B1%82%E6%8E%A5%E5%8F%A3-%E7%9B%B4%E6%8E%A5%E5%85%B3%E9%97%AD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>1. 不请求接口，直接关闭</h5><p><code>feedback</code>的<code>actions</code>中配置 <code>&quot;actionType&quot;: &quot;close&quot;</code> 的按钮</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n  \"type\": \"button\",\n  \"label\": \"弹一个框\",\n  \"actionType\": \"dialog\",\n  \"dialog\": {\n    \"title\": \"提示\",\n     \"body\": {\n            \"type\": \"form\",\n            \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2\",\n            \"controls\": [\n                {\n                    \"type\": \"text\",\n                    \"name\": \"text\",\n                    \"required\": true,\n                    \"label\": \"用户名\",\n                    \"placeholder\": \"请输入用户名\"\n                },\n                {\n                    \"type\": \"password\",\n                    \"name\": \"password\",\n                    \"label\": \"密码\",\n                    \"required\": true,\n                    \"placeholder\": \"请输入密码\"\n                },\n                {\n                    \"type\": \"checkbox\",\n                    \"name\": \"rememberMe\",\n                    \"label\": \"记住登录\"\n                }\n            ]\n        },\n    \"actions\": [\n      {\n        \"type\": \"button\",\n        \"label\": \"提交表单 Feedback\",\n        \"actionType\": \"confirm\",\n        \"feedback\": {\n          \"body\": \"feedback弹框中，不请求接口了，直接点击按钮关闭\",\n          \"actions\": [\n            {\n              \"type\": \"button\",\n              \"actionType\": \"close\",\n              \"label\": \"关闭\"\n            }\n          ]\n        }\n      },\n      {\n        \"type\": \"button\",\n        \"label\": \"ajax请求 Feedback\",\n        \"actionType\": \"ajax\",\n        \"close\": true,\n        \"api\": \"https://houtai.baidu.com/api/mock2/form/initData?waitSeconds=1\",\n        \"feedback\": {\n          \"body\": \"feedback弹框中，不请求接口了，直接点击按钮关闭\",\n          \"actions\": [\n            {\n              \"type\": \"button\",\n              \"actionType\": \"close\",\n              \"label\": \"关闭\"\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\n</script></div>\n<h5><a class=\"anchor\" name=\"2-%E8%AF%B7%E6%B1%82%E6%8E%A5%E5%8F%A3-%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%90%8E-%E5%85%B3%E9%97%AD%E6%89%80%E6%9C%89%E5%BC%B9%E6%A1%86\" href=\"#2-%E8%AF%B7%E6%B1%82%E6%8E%A5%E5%8F%A3-%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%90%8E-%E5%85%B3%E9%97%AD%E6%89%80%E6%9C%89%E5%BC%B9%E6%A1%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>2. 请求接口，请求成功后，关闭所有弹框</h5><p>需要在 feedback 的 <code>body</code> 中添加 Form 组件，并配置<code>&quot;actionType&quot;: &quot;confirm&quot;</code>，</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n  \"type\": \"button\",\n  \"label\": \"弹一个框\",\n  \"actionType\": \"dialog\",\n  \"dialog\": {\n    \"body\": {\n        \"type\": \"form\",\n        \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2\",\n        \"controls\": [\n            {\n                \"type\": \"text\",\n                \"name\": \"text\",\n                \"required\": true,\n                \"label\": \"用户名\",\n                \"placeholder\": \"请输入用户名\"\n            },\n            {\n                \"type\": \"password\",\n                \"name\": \"password\",\n                \"label\": \"密码\",\n                \"required\": true,\n                \"placeholder\": \"请输入密码\"\n            },\n            {\n                \"type\": \"checkbox\",\n                \"name\": \"rememberMe\",\n                \"label\": \"记住登录\"\n            }\n        ]\n    },\n    \"actions\": [\n      {\n        \"type\": \"button\",\n        \"label\": \"confirm Feedback\",\n        \"actionType\": \"confirm\",\n        \"feedback\": {\n          \"body\": {\n            \"type\": \"form\",\n            \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=1\",\n            \"controls\": [\n              {\n                \"type\": \"tpl\",\n                \"tpl\": \"点击确认，请求接口，接口请求成功后，关闭弹框\"\n              }\n            ]\n          },\n          \"actions\": [\n            {\n              \"type\": \"button\",\n              \"actionType\": \"confirm\",\n              \"label\": \"确认\",\n              \"primary\": true\n            }\n          ]\n        }\n      },\n      {\n        \"type\": \"button\",\n        \"label\": \"ajax Feedback\",\n        \"actionType\": \"ajax\",\n        \"close\": true,\n        \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=1\",\n        \"feedback\": {\n          \"body\": {\n            \"type\": \"form\",\n            \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=1\",\n            \"controls\": [\n              {\n                \"type\": \"tpl\",\n                \"tpl\": \"点击确认，请求接口，接口请求成功后，关闭弹框\"\n              }\n            ]\n          },\n          \"actions\": [\n            {\n              \"type\": \"button\",\n              \"actionType\": \"confirm\",\n              \"label\": \"确认\",\n              \"primary\": true\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\n</script></div>\n<blockquote>\n<p>注意上面的例子：如果你的触发<code>feedback</code>的按钮<code>actionType</code>为<code>ajax</code>时，为需要额外在按钮上配置<code>&quot;close&quot;: true</code></p>\n</blockquote>\n<h4><a class=\"anchor\" name=\"%E5%85%B3%E9%97%AD-feedback-%E5%BC%B9%E6%A1%86%E6%97%B6-%E4%B8%8D%E5%90%8C%E6%97%B6%E5%85%B3%E9%97%AD%E4%B8%8A%E5%B1%82%E5%BC%B9%E6%A1%86\" href=\"#%E5%85%B3%E9%97%AD-feedback-%E5%BC%B9%E6%A1%86%E6%97%B6-%E4%B8%8D%E5%90%8C%E6%97%B6%E5%85%B3%E9%97%AD%E4%B8%8A%E5%B1%82%E5%BC%B9%E6%A1%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>关闭 feedback 弹框时，不同时关闭上层弹框</h4><p>改场景只适用于<strong>不请求接口关闭弹框</strong>的场景，需要在 feedback 层添加<code>&quot;skipRestOnCancel&quot;: true</code></p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n  \"type\": \"button\",\n  \"label\": \"弹一个框\",\n  \"actionType\": \"dialog\",\n  \"dialog\": {\n    \"title\": \"提示\",\n    \"body\": {\n      \"type\": \"form\",\n      \"api\": \"https://houtai.baidu.com/api/mock2/form/initData?waitSeconds=1\",\n      \"controls\": [\n        {\n          \"type\": \"tpl\",\n          \"tpl\": \"这是一个简单的弹框\"\n        }\n      ]\n    },\n    \"actions\": [\n      {\n        \"type\": \"button\",\n        \"actionType\": \"confirm\",\n        \"label\": \"Feedback\",\n        \"feedback\": {\n          \"body\": \"这是一个feedback弹框\",\n          \"skipRestOnCancel\": true,\n          \"actions\": [\n            {\n              \"type\": \"button\",\n              \"actionType\": \"close\",\n              \"label\": \"关闭\"\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E6%98%BE%E7%A4%BA-feedback\" href=\"#%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E6%98%BE%E7%A4%BA-feedback\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>根据条件显示 feedback</h3><p>可以根据条件弹出，例如下面这个例子，只有当接口返回的时间戳可以整除 2 时才显示弹框。</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"条件feedback\",\n    \"actionType\": \"ajax\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/initData?waitSeconds=1\",\n    \"feedback\": {\n        \"visibleOn\": \"!(this.date % 2)\",\n        \"title\": \"操作成功\",\n        \"body\": \"当前时间戳: <code>${date}</code>\"\n    }\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td></td>\n<td><code>&quot;dialog&quot;</code> 指定为 Dialog 渲染器</td>\n</tr>\n<tr>\n<td>title</td>\n<td><a href=\"../types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>弹出层标题</td>\n</tr>\n<tr>\n<td>body</td>\n<td><a href=\"../types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>往 Dialog 内容区加内容</td>\n</tr>\n<tr>\n<td>size</td>\n<td><code>string</code></td>\n<td></td>\n<td>指定 dialog 大小，支持: <code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code></td>\n</tr>\n<tr>\n<td>bodyClassName</td>\n<td><code>string</code></td>\n<td><code>modal-body</code></td>\n<td>Dialog body 区域的样式类名</td>\n</tr>\n<tr>\n<td>closeOnEsc</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否支持按 <code>Esc</code> 关闭 Dialog</td>\n</tr>\n<tr>\n<td>showCloseButton</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否显示右上角的关闭按钮</td>\n</tr>\n<tr>\n<td>showErrorMsg</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否在弹框左下角显示报错信息</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>如果设置此属性，则该 Dialog 只读没有提交操作。</td>\n</tr>\n<tr>\n<td>actions</td>\n<td>Array&lt;<a href=\"./action\">Action</a>&gt;</td>\n<td>【确认】和【取消】</td>\n<td>如果想不显示底部按钮，可以配置：<code>[]</code></td>\n</tr>\n<tr>\n<td>data</td>\n<td><code>object</code></td>\n<td></td>\n<td>支持<a href=\"../concepts/data-mapping\">数据映射</a>，如果不设定将默认将触发按钮的上下文中继承数据。</td>\n</tr>\n</tbody></table>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "配置尺寸",
          "fragment": "%E9%85%8D%E7%BD%AE%E5%B0%BA%E5%AF%B8",
          "fullPath": "#%E9%85%8D%E7%BD%AE%E5%B0%BA%E5%AF%B8",
          "level": 2
        },
        {
          "label": "多级弹框",
          "fragment": "%E5%A4%9A%E7%BA%A7%E5%BC%B9%E6%A1%86",
          "fullPath": "#%E5%A4%9A%E7%BA%A7%E5%BC%B9%E6%A1%86",
          "level": 2
        },
        {
          "label": "行为后关闭弹框",
          "fragment": "%E8%A1%8C%E4%B8%BA%E5%90%8E%E5%85%B3%E9%97%AD%E5%BC%B9%E6%A1%86",
          "fullPath": "#%E8%A1%8C%E4%B8%BA%E5%90%8E%E5%85%B3%E9%97%AD%E5%BC%B9%E6%A1%86",
          "level": 2
        },
        {
          "label": "弹框中配置表单",
          "fragment": "%E5%BC%B9%E6%A1%86%E4%B8%AD%E9%85%8D%E7%BD%AE%E8%A1%A8%E5%8D%95",
          "fullPath": "#%E5%BC%B9%E6%A1%86%E4%B8%AD%E9%85%8D%E7%BD%AE%E8%A1%A8%E5%8D%95",
          "level": 2,
          "children": [
            {
              "label": "基本使用",
              "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
              "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
              "level": 3
            },
            {
              "label": "提交表单 或 ajax 请求",
              "fragment": "%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95-%E6%88%96-ajax-%E8%AF%B7%E6%B1%82",
              "fullPath": "#%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95-%E6%88%96-ajax-%E8%AF%B7%E6%B1%82",
              "level": 3
            },
            {
              "label": "提交表单 或 ajax 请求 后不关闭弹框",
              "fragment": "%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95-%E6%88%96-ajax-%E8%AF%B7%E6%B1%82-%E5%90%8E%E4%B8%8D%E5%85%B3%E9%97%AD%E5%BC%B9%E6%A1%86",
              "fullPath": "#%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95-%E6%88%96-ajax-%E8%AF%B7%E6%B1%82-%E5%90%8E%E4%B8%8D%E5%85%B3%E9%97%AD%E5%BC%B9%E6%A1%86",
              "level": 3
            }
          ]
        },
        {
          "label": "feedback 反馈弹框",
          "fragment": "feedback-%E5%8F%8D%E9%A6%88%E5%BC%B9%E6%A1%86",
          "fullPath": "#feedback-%E5%8F%8D%E9%A6%88%E5%BC%B9%E6%A1%86",
          "level": 2,
          "children": [
            {
              "label": "基本使用",
              "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
              "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
              "level": 3
            },
            {
              "label": "弹框中配置 feedback",
              "fragment": "%E5%BC%B9%E6%A1%86%E4%B8%AD%E9%85%8D%E7%BD%AE-feedback",
              "fullPath": "#%E5%BC%B9%E6%A1%86%E4%B8%AD%E9%85%8D%E7%BD%AE-feedback",
              "level": 3,
              "children": [
                {
                  "label": "关闭 feedback 弹框时，同时关闭上层弹框",
                  "fragment": "%E5%85%B3%E9%97%AD-feedback-%E5%BC%B9%E6%A1%86%E6%97%B6-%E5%90%8C%E6%97%B6%E5%85%B3%E9%97%AD%E4%B8%8A%E5%B1%82%E5%BC%B9%E6%A1%86",
                  "fullPath": "#%E5%85%B3%E9%97%AD-feedback-%E5%BC%B9%E6%A1%86%E6%97%B6-%E5%90%8C%E6%97%B6%E5%85%B3%E9%97%AD%E4%B8%8A%E5%B1%82%E5%BC%B9%E6%A1%86",
                  "level": 4
                },
                {
                  "label": "关闭 feedback 弹框时，不同时关闭上层弹框",
                  "fragment": "%E5%85%B3%E9%97%AD-feedback-%E5%BC%B9%E6%A1%86%E6%97%B6-%E4%B8%8D%E5%90%8C%E6%97%B6%E5%85%B3%E9%97%AD%E4%B8%8A%E5%B1%82%E5%BC%B9%E6%A1%86",
                  "fullPath": "#%E5%85%B3%E9%97%AD-feedback-%E5%BC%B9%E6%A1%86%E6%97%B6-%E4%B8%8D%E5%90%8C%E6%97%B6%E5%85%B3%E9%97%AD%E4%B8%8A%E5%B1%82%E5%BC%B9%E6%A1%86",
                  "level": 4
                }
              ]
            },
            {
              "label": "根据条件显示 feedback",
              "fragment": "%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E6%98%BE%E7%A4%BA-feedback",
              "fullPath": "#%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E6%98%BE%E7%A4%BA-feedback",
              "level": 3
            }
          ]
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
