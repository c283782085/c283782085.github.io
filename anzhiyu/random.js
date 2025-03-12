var posts=["2025/02/21/v2ray/","2025/02/21/topsimple/","2025/02/21/教程/","2025/02/21/使用Acme.sh脚本申请证书/","2025/02/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };