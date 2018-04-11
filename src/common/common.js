import $ from  "jquery"
export default {
    path:'http://192.168.0.113:8080',
    player:"",
    isLogin:function(callback){
        console.log('开始调用');
        var login=false;
        $.ajax({
            url:this.path+'/account/get',
            type:'get',
            xhrFields:{withCredentials: true},
            success:function(e){
                callback(e);
            },
            error:function (msg) {
            console.log('请求失败');
            console.log(msg);
        }
        });
    }

};