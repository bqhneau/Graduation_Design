<template>
  <div id="login">
    <div class="login-container">
      <!-- <loginparticles /> -->
      <div class="login-box">
        <div class="login-content">
          <h1 class="title">校园信息发布平台管理后台</h1>
          <form id="form" @submit.prevent="onSubmit" class="login-form">
            <div class="form-group">
              <div class="input-wrapper">
                <span class="icon">👤</span>
                <input type="text" v-model="username" placeholder="用户名" id="username" class="form-input" />
              </div>
            </div>
            <div class="form-group">
              <div class="input-wrapper">
                <span class="icon">🔒</span>
                <input type="password" v-model="password" placeholder="密码" id="password" class="form-input" />
              </div>
            </div>
            <button type="submit" @click.prevent="login" class="submit-btn">
              登录
              <span class="btn-hover"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginparticles from '@/views/loginparticles.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'login',
  components: {
    // loginparticles
  },
  data() {
    return {
      password: 'admin',
      username: 'admin'
    }
  },
  methods: {
    ...mapActions('user', ['setUserInfo', 'setToken']),
    login() {
      if (this.password === '' || this.username === '') {
        this.$message.error('账号或者密码为空')
        return
      }
      let obj = {
        password: this.password,
        username: this.username
      }
      this.$axios({
        url: '/admin/login',
        method: 'POST',
        data: this.qs.stringify(obj)
      })
        .then(res => {
          let data = res.data.data
          if (res.data.state.type === 'SUCCESS') {
            this.$message.success('登录成功')
            this.setUserInfo(data.userinfo)
            this.setToken(data.token)
            this.$router.push('/')
          } else this.$message.error('用户名或密码错误')
        })
        .catch(e => {
          this.$message(e)
        })
    }
  }
}
</script>

<style scoped>
#login {
  width: 100%;
  height: 100vh;
  margin: 0;
  background: url(../assets/img/bg.jpg) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.login-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(23, 93, 179, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 0 auto;
}

.login-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(23, 93, 179, 0.3);
}

.login-content {
  padding: 40px 30px;
}

.title {
  font-size: 24px;
  color: rgb(23, 93, 179);
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(23, 93, 179, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  position: relative;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.icon {
  position: absolute;
  left: 15px;
  font-size: 18px;
  color: rgb(23, 93, 179);
  opacity: 0.8;
}

.form-input {
  width: 100%;
  padding: 12px 15px 12px 45px;
  border: 2px solid rgba(23, 93, 179, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  color: rgb(23, 93, 179);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: rgb(23, 93, 179);
  box-shadow: 0 0 0 3px rgba(23, 93, 179, 0.1);
}

.form-input::placeholder {
  color: rgba(23, 93, 179, 0.5);
}

.submit-btn {
  position: relative;
  width: 100%;
  padding: 12px;
  background: rgb(23, 93, 179);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: rgb(28, 110, 209);
  transform: translateY(-2px);
}

.submit-btn:active {
  transform: translateY(0);
}

.btn-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent);
  transform: translateX(-100%);
  transition: 0.5s;
}

.submit-btn:hover .btn-hover {
  transform: translateX(100%);
}
</style>
