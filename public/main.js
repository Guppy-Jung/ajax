let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const array = JSON.parse(request.response);//把JSON字符串变成js数组
            array.forEach(item => {//item为数组中每一项
                const li = document.createElement('li')
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    }
    request.send();
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            console.log(request.response);
            const object = JSON.parse(request.response);//JSON.parse()可以把符合JSON语法的字符串变成JSON对象
            myName.textContent = object.name;//这样就将JSON从request.response获取到的5.json文件中的内容赋值给了html的内容
        }
    };
    request.send();
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            // console.log(request.responseXML);//request默认有一个responseXML,自动把请求到的信息变成对象,是DOM对象
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());//trim()消除掉文本左右的回车
        }
    };
    request.send();
    // request.onload = () => {
    //     console.log('这没问题')
    // }
    // request.onerror = () => {
    //     console.log('这有问题')
    // }
    // request.onreadystatechange = () => {
    //     console.log('这没问题')
    //     if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
    //         console.log(request.response);
    //         const xml = document.createElement('xml');
    //         xml.innerHTML = request.response;
    //         document.body.appendChild(xml);
    //     };
    // };
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onload = () => {//通过ajax可以实现请求一小块html内容，iframe方法也可以，但是iframe会请求一个新的窗口
        console.log(request.response);
        // 创建div
        const div = document.createElement('div')
        // 填写div内容
        div.innerHTML = request.response;
        // 插入到body
        document.body.appendChild(div);
    };
    request.onerror = () => { };
    request.send();
}


// 以下是使用ajax加载css页面的所有步骤，共四步，主要是使用了浏览器提供的XMLHttpRequest构造函数，使用其中的open,onload,onerror,send方法
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onload = () => {
        // 创建script标签
        const script = document.createElement('script');
        // 填写script内容
        script.innerHTML = request.response;
        // 插到body里面
        document.body.appendChild(script);//浏览器只要看到script标签，它就会执行script标签中的内容，但是这个script元素是在js引擎中，user-agent看不到
    }
    request.onerror = () => { }  //但是onerror()无法监听ajax，所以大家用onreadystatechange
    request.send();  //readyState值为2
};

// getCSS.onclick = () => {
//     const request = new XMLHttpRequest();//创建XMLHttpRequest对象
//     request.open('GET', '/style.css');
//     request.onload = () => {
//         console.log('request.response');
//         console.log(request.response);

//         // 创建style标签
//         const style = document.createElement('style')
//         //填写style内容
//         style.innerHTML = request.response
//         //插到head里面
//         document.head.appendChild(style)
//     }
//     request.onerror = () => {
//         console.log('失败了');
//     }

//     request.send();//发送请求
// }


getCSS.onclick = () => {
    const request = new XMLHttpRequest();//创建XMLHttpRequest对象
    request.open('GET', '/style.css');//readyState等于1
    request.onreadystatechange = () => {
        // console.log(request.readyState)
        if (request.readyState === 4) {//但是readyState属性不能区分是成功下载完还是失败下载完
            console.log('加载成功')
            if (request.status >= 200 && request.status < 300) {// console.log(request.status)//request.status是相应状态码，如404
                // 创建style标签
                const style = document.createElement('style');
                //填写style内容
                style.innerHTML = request.response;
                //插到head里面
                document.head.appendChild(style);
            } else {
                alert('加载CSS 失败');
            };
        };


    };
    request.send();//发送请求
}