(async () => {
    'use strict';

    //faviconの置き換え
    const faviconURL = "https://abs.twimg.com/favicon.ico"

    const faviconElm = document.querySelector("link[rel='shortcut icon']");
    faviconElm.href = faviconURL;


    //タイトルの置き換え
    const titleReplace = async (repeat = false) => {
        for (let i = 0; i < 100; i++) {
            const titleElm = document.querySelector("title");
            if (titleElm != null && titleElm.innerText.length > 1) {
                console.log(titleElm.innerText);
                //最後の文字がXの場合、Twitterに置き換える
                if (titleElm.innerText.slice(-1) == "X") {
                    titleElm.innerText = titleElm.innerText.slice(0, -1) + "Twitter";
                }
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        if (repeat) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            await titleReplace(false);
        };
    }
    window.addEventListener('click', async () => {
        await new Promise(resolve => setTimeout(resolve, 50));
        await titleReplace(true);
    });
    await titleReplace(true);
})();