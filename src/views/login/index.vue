<template>
    <div class="login-container">
      <el-card class="login-card">
          <img src="../../assets/images/logo_index.png" alt="">
          <el-input v-model="phone" placeholder="请输入内容" class="username"></el-input>
          <el-input v-model="code" placeholder="请输入内容" class="verificationCode"></el-input>
          <el-button>获取验证</el-button>
          <el-checkbox v-model="checked">我已经阅读并同意 <el-link type="primary">用户协议</el-link>和 <el-link type="primary">隐私条款</el-link></el-checkbox>
          <el-button @click="submit()" type="primary" class="login-btn">主要按钮</el-button>
      </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      code: '',
      checked: true
    }
  },
  created () {
    this.$axios({
      method: 'post',
      url: 'https://www.easy-mock.com/mock/5d258e713e42d25cf5bae2ae/example/sendCode',
      data: {}
    }).then((res) => {
      console.log(res.data)
    })
  },
  methods: {
    submit () {
      let form = {
        phone: this.phone,
        code: this.code
      }
      this.$axios({
        method: 'post',
        url: 'https://www.easy-mock.com/mock/5d258e713e42d25cf5bae2ae/example/login',
        data: { form }
      }).then((res) => {
        console.log(res.data)
        if (res.data.isSuccessful) {
          alert('登录成功啦')
        }
      })
    }
  }
}
</script>

<style lang="less">
     .login-container{
         background:url('../../assets/images/login_bg.jpg') no-repeat center/cover;
         width: 100%;
         height: 100%;
         position: absolute;
         .login-card{
             width: 400px;
             height: 350px;
             position: absolute;
             top: 50%;
             left: 50%;
             transform: translate(-50%,-50%);
             img{
                 display: block;
                 width: 200px;
                 margin: 10px auto;
             }
             .username{
                 margin: 20px 0px 10px 0px;
             }
             .verificationCode{
                 width: 255px;
                 margin: 20px 5px 20px 0px;
             }
             .login-btn{
                 width: 356px;
                 margin:20px 0px 10px 0px;
             }
         }
     }
</style>
