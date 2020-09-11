amis.define('docs/components/images.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Images 图片集",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Images 图片集合",
    "icon": null,
    "order": 53,
    "html": "<p>图片集展示，不支持配置初始化接口初始化数据域，所以需要搭配类似像<code>Service</code>、<code>Form</code>或<code>CRUD</code>这样的，具有配置接口初始化数据域功能的组件，或者手动进行数据域初始化，然后通过<code>source</code>属性，获取数据链中的数据，完成数据展示。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n    \"type\": \"page\",\n    \"data\": {\n        \"images\": [\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n        ]\n    },\n    \"body\": {\n        \"type\": \"images\",\n        \"source\": \"${images}\"\n    }\n}\n</script></div>\n<p>也可以直接指定<code>value</code>字段：</p>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n    \"type\": \"page\",\n    \"body\": {\n        \"type\": \"images\",\n        \"value\": [\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n        ]\n    }\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E5%9B%BE%E7%89%87%E9%9B%86%E5%80%BC%E6%98%AF%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84\" href=\"#%E5%9B%BE%E7%89%87%E9%9B%86%E5%80%BC%E6%98%AF%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>图片集值是对象数组</h2><p>除了支持纯文本数组以外，也支持对象数组，</p>\n<h3><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E9%A2%84%E8%A7%88%E5%9B%BE%E5%9C%B0%E5%9D%80\" href=\"#%E9%85%8D%E7%BD%AE%E9%A2%84%E8%A7%88%E5%9B%BE%E5%9C%B0%E5%9D%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置预览图地址</h3><p>需要设置对象中预览图地址的<code>key</code>值为<code>image</code></p>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n    \"type\": \"page\",\n    \"data\": {\n        \"images\": [\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"a\": \"aaa1\",\n                \"b\": \"bbb1\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"a\": \"aaa2\",\n                \"b\": \"bbb2\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"a\": \"aaa3\",\n                \"b\": \"bbb3\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"a\": \"aaa4\",\n                \"b\": \"bbb4\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"a\": \"aaa5\",\n                \"b\": \"bbb5\"\n            }\n        ]\n    },\n    \"body\": {\n        \"type\": \"images\",\n        \"source\": \"${images}\"\n    }\n}\n</script></div>\n<p>如果<code>key</code>值不是<code>image</code>，也可以在 <strong>images组件</strong> 上，通过配置<code>src</code>，使用数据映射，来获取图片地址</p>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n    \"type\": \"page\",\n    \"data\": {\n        \"images\": [\n            {\n                \"img\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"a\": \"aaa1\",\n                \"b\": \"bbb1\"\n            },\n            {\n                \"img\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"a\": \"aaa2\",\n                \"b\": \"bbb2\"\n            },\n            {\n                \"img\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"a\": \"aaa3\",\n                \"b\": \"bbb3\"\n            },\n            {\n                \"img\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"a\": \"aaa4\",\n                \"b\": \"bbb4\"\n            },\n            {\n                \"img\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"a\": \"aaa5\",\n                \"b\": \"bbb5\"\n            }\n        ]\n    },\n    \"body\": {\n        \"type\": \"images\",\n        \"source\": \"${images}\",\n        \"src\": \"${img}\"\n    }\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E5%8E%9F%E5%9B%BE%E5%9C%B0%E5%9D%80\" href=\"#%E9%85%8D%E7%BD%AE%E5%8E%9F%E5%9B%BE%E5%9C%B0%E5%9D%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置原图地址</h3><p>需要设置对象中原图地址的<code>key</code>值为<code>src</code></p>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n    \"type\": \"page\",\n    \"data\": {\n        \"images\": [\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n                \"a\": \"aaa1\",\n                \"b\": \"bbb1\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n                \"a\": \"aaa2\",\n                \"b\": \"bbb2\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n                \"a\": \"aaa3\",\n                \"b\": \"bbb3\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n                \"a\": \"aaa4\",\n                \"b\": \"bbb4\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n                \"a\": \"aaa5\",\n                \"b\": \"bbb5\"\n            }\n        ]\n    },\n    \"body\": {\n        \"type\": \"images\",\n        \"source\": \"${images}\",\n        \"enlargeAble\": true\n    }\n}\n</script></div>\n<p>如果原图数据的<code>key</code>值不是<code>src</code>，也可以在 <strong>images组件</strong> 上，通过配置<code>originalSrc</code>，使用数据映射，来获取原图片地址</p>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n    \"type\": \"page\",\n    \"data\": {\n        \"images\": [\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"source\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n                \"a\": \"aaa1\",\n                \"b\": \"bbb1\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"source\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n                \"a\": \"aaa2\",\n                \"b\": \"bbb2\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"source\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n                \"a\": \"aaa3\",\n                \"b\": \"bbb3\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"source\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n                \"a\": \"aaa4\",\n                \"b\": \"bbb4\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"source\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n                \"a\": \"aaa5\",\n                \"b\": \"bbb5\"\n            }\n        ]\n    },\n    \"body\": {\n        \"type\": \"images\",\n        \"source\": \"${images}\",\n        \"originalSrc\": \"${source}\",\n        \"enlargeAble\": true\n    }\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E6%A0%87%E9%A2%98%E5%92%8C%E8%AF%B4%E6%98%8E\" href=\"#%E9%85%8D%E7%BD%AE%E6%A0%87%E9%A2%98%E5%92%8C%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置标题和说明</h3><p>设置对象中标题的<code>key</code>值为<code>title</code>，说明的<code>key</code>为<code>description</code>或<code>caption</code>。</p>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n    \"type\": \"page\",\n    \"data\": {\n        \"images\": [\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"title\": \"图片1\",\n                \"description\": \"图片1的描述\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"title\": \"图片2\",\n                \"description\": \"图片2的描述\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"title\": \"图片3\",\n                \"description\": \"图片3的描述\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"title\": \"图片4\",\n                \"description\": \"图片4的描述\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"title\": \"图片5\",\n                \"description\": \"图片5的描述\"\n            }\n        ]\n    },\n    \"body\": {\n        \"type\": \"images\",\n        \"source\": \"${images}\"\n    }\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E6%94%BE%E5%A4%A7%E9%A2%84%E8%A7%88\" href=\"#%E9%85%8D%E7%BD%AE%E6%94%BE%E5%A4%A7%E9%A2%84%E8%A7%88\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置放大预览</h2><p>在 <strong>images组件</strong> 上，配置<code>enlargeAble</code>，支持放大预览</p>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n    \"type\": \"page\",\n    \"data\": {\n        \"images\": [\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"title\": \"图片1\",\n                \"description\": \"图片1的描述\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"title\": \"图片2\",\n                \"description\": \"图片2的描述\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"title\": \"图片3\",\n                \"description\": \"图片3的描述\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"title\": \"图片4\",\n                \"description\": \"图片4的描述\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"title\": \"图片5\",\n                \"description\": \"图片5的描述\"\n            }\n        ]\n    },\n    \"body\": {\n        \"type\": \"images\",\n        \"source\": \"${images}\",\n        \"enlargeAble\": true\n    }\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E7%94%A8%E4%BD%9C-field-%E6%97%B6\" href=\"#%E7%94%A8%E4%BD%9C-field-%E6%97%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>用作 Field 时</h2><p>当用在 Table 的列配置 Column、List 的内容、Card 卡片的内容和表单的Static-XXX 中时，可以设置<code>name</code>属性，映射同名变量</p>\n<h3><a class=\"anchor\" name=\"table-%E4%B8%AD%E7%9A%84%E5%88%97%E7%B1%BB%E5%9E%8B\" href=\"#table-%E4%B8%AD%E7%9A%84%E5%88%97%E7%B1%BB%E5%9E%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Table 中的列类型</h3><div class=\"amis-preview\" style=\"height: 500px\"><script type=\"text/schema\" height=\"500\" scope=\"body\">{\n    \"type\": \"table\",\n    \"data\": {\n        \"items\": [\n            {\n                \"id\": \"1\",\n                \"images\": [\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n                ]\n            },\n            {\n                \"id\": \"2\",\n                \"images\": [\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n                ]\n            },\n            {\n                \"id\": \"3\",\n                \"images\": [\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                    \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n                ]\n            }\n        ]\n    },\n    \"columns\": [\n        {\n            \"name\": \"id\",\n            \"label\": \"Id\"\n        },\n\n        {\n            \"name\": \"images\",\n            \"label\": \"颜色\",\n            \"type\": \"images\"\n        }\n    ]\n}\n</script></div>\n<p>List 的内容、Card 卡片的内容配置同上</p>\n<h3><a class=\"anchor\" name=\"form-%E4%B8%AD%E9%9D%99%E6%80%81%E5%B1%95%E7%A4%BA\" href=\"#form-%E4%B8%AD%E9%9D%99%E6%80%81%E5%B1%95%E7%A4%BA\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Form 中静态展示</h3><div class=\"amis-preview\" style=\"height: 500px\"><script type=\"text/schema\" height=\"500\" scope=\"body\">{\n    \"type\": \"form\",\n    \"data\": {\n        \"images\": [\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n            \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n        ]\n    },\n    \"controls\": [\n        {\n            \"type\": \"static-images\",\n            \"name\": \"images\",\n            \"label\": \"图片集\"\n        }\n    ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>images</code></td>\n<td>如果在 Table、Card 和 List 中，为<code>&quot;images&quot;</code>；在 Form 中用作静态展示，为<code>&quot;static-images&quot;</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 CSS 类名</td>\n</tr>\n<tr>\n<td>defaultImage</td>\n<td><code>string</code></td>\n<td></td>\n<td>默认展示图片</td>\n</tr>\n<tr>\n<td>value</td>\n<td><code>string</code>或<code>Array&lt;string&gt;</code>或<code>Array&lt;object&gt;</code></td>\n<td></td>\n<td>图片数组</td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>string</code></td>\n<td></td>\n<td>数据源</td>\n</tr>\n<tr>\n<td>delimiter</td>\n<td><code>string</code></td>\n<td><code>,</code></td>\n<td>分隔符，当value为字符串时，用该值进行分隔拆分</td>\n</tr>\n<tr>\n<td>src</td>\n<td><code>string</code></td>\n<td></td>\n<td>预览图地址，支持数据映射获取对象中图片变量</td>\n</tr>\n<tr>\n<td>originalSrc</td>\n<td><code>string</code></td>\n<td></td>\n<td>原图地址，支持数据映射获取对象中图片变量</td>\n</tr>\n<tr>\n<td>enlargeAble</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>支持放大预览</td>\n</tr>\n<tr>\n<td>thumbMode</td>\n<td><code>string</code></td>\n<td><code>contain</code></td>\n<td>预览图模式，可选：<code>&#39;w-full&#39;</code>, <code>&#39;h-full&#39;</code>, <code>&#39;contain&#39;</code>, <code>&#39;cover&#39;</code></td>\n</tr>\n<tr>\n<td>thumbRatio</td>\n<td><code>string</code></td>\n<td><code>1:1</code></td>\n<td>预览图比例，可选：<code>&#39;1:1&#39;</code>, <code>&#39;4:3&#39;</code>, <code>&#39;16:9&#39;</code></td>\n</tr>\n</tbody></table>\n",
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
          "label": "图片集值是对象数组",
          "fragment": "%E5%9B%BE%E7%89%87%E9%9B%86%E5%80%BC%E6%98%AF%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84",
          "fullPath": "#%E5%9B%BE%E7%89%87%E9%9B%86%E5%80%BC%E6%98%AF%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84",
          "level": 2,
          "children": [
            {
              "label": "配置预览图地址",
              "fragment": "%E9%85%8D%E7%BD%AE%E9%A2%84%E8%A7%88%E5%9B%BE%E5%9C%B0%E5%9D%80",
              "fullPath": "#%E9%85%8D%E7%BD%AE%E9%A2%84%E8%A7%88%E5%9B%BE%E5%9C%B0%E5%9D%80",
              "level": 3
            },
            {
              "label": "配置原图地址",
              "fragment": "%E9%85%8D%E7%BD%AE%E5%8E%9F%E5%9B%BE%E5%9C%B0%E5%9D%80",
              "fullPath": "#%E9%85%8D%E7%BD%AE%E5%8E%9F%E5%9B%BE%E5%9C%B0%E5%9D%80",
              "level": 3
            },
            {
              "label": "配置标题和说明",
              "fragment": "%E9%85%8D%E7%BD%AE%E6%A0%87%E9%A2%98%E5%92%8C%E8%AF%B4%E6%98%8E",
              "fullPath": "#%E9%85%8D%E7%BD%AE%E6%A0%87%E9%A2%98%E5%92%8C%E8%AF%B4%E6%98%8E",
              "level": 3
            }
          ]
        },
        {
          "label": "配置放大预览",
          "fragment": "%E9%85%8D%E7%BD%AE%E6%94%BE%E5%A4%A7%E9%A2%84%E8%A7%88",
          "fullPath": "#%E9%85%8D%E7%BD%AE%E6%94%BE%E5%A4%A7%E9%A2%84%E8%A7%88",
          "level": 2
        },
        {
          "label": "用作 Field 时",
          "fragment": "%E7%94%A8%E4%BD%9C-field-%E6%97%B6",
          "fullPath": "#%E7%94%A8%E4%BD%9C-field-%E6%97%B6",
          "level": 2,
          "children": [
            {
              "label": "Table 中的列类型",
              "fragment": "table-%E4%B8%AD%E7%9A%84%E5%88%97%E7%B1%BB%E5%9E%8B",
              "fullPath": "#table-%E4%B8%AD%E7%9A%84%E5%88%97%E7%B1%BB%E5%9E%8B",
              "level": 3
            },
            {
              "label": "Form 中静态展示",
              "fragment": "form-%E4%B8%AD%E9%9D%99%E6%80%81%E5%B1%95%E7%A4%BA",
              "fullPath": "#form-%E4%B8%AD%E9%9D%99%E6%80%81%E5%B1%95%E7%A4%BA",
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
