<template>
  <el-form ref="ruleFormRef" style="max-width: 300px" :model="loginForm" status-icon :rules="rules" label-width="auto"
           class="demo-ruleForm">
    <el-form-item label="username">
      <el-input v-model="loginForm.username" type="text" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="password" prop="pass">
      <el-input v-model="loginForm.password" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>

    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {reactive} from 'vue'

const title = ref('登录');


import type {FormInstance, FormRules} from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const loginForm = reactive({
  username: '',
  password: '',
})



/**
 * 验证密码的函数
 * 该函数用于表单验证，以确保用户输入的密码符合要求
 * @param {any} rule - 验证规则对象
 * @param {any} value - 用户输入的密码值
 * @param {any} callback - 回调函数，用于返回验证结果
 */
const validatePass = (rule: any, value: any, callback: any) => {
  // 检查是否有输入密码
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    // 如果确认密码不为空，触发确认密码的验证
    if (loginForm.password !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
// 定义表单验证规则
const rules = reactive<FormRules<typeof loginForm>>({
  // 密码验证规则
  password: [{validator: validatePass, trigger: 'blur'}],

})



/**
 * 提交表单函数
 * @param {FormInstance | undefined} formEl - 表单实例
 */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  // 验证表单数据是否有效
  formEl.validate((valid) => {
    if (valid) {
      // 如果表单数据有效，则提交表单
      console.log('submit!')
    } else {
      // 如果表单数据无效，则提示错误信息
      console.log('error submit!')
    }
  })
}

</script>

<style scoped>

</style>
